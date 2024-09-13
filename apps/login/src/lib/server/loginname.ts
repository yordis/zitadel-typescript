"use server";

import { PasskeysType } from "@zitadel/proto/zitadel/settings/v2/login_settings_pb";
import { AuthenticationMethodType } from "@zitadel/proto/zitadel/user/v2/user_service_pb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionForUserIdAndUpdateCookie } from "../../utils/session";
import { idpTypeToSlug } from "../idp";
import {
  getActiveIdentityProviders,
  getLoginSettings,
  getOrgsByDomain,
  listAuthenticationMethodTypes,
  listUsers,
  startIdentityProviderFlow,
} from "../zitadel";

export type SendLoginnameCommand = {
  loginName: string;
  authRequestId?: string;
  organization?: string;
};

const ORG_SUFFIX_REGEX = /(?<=@)(.+)/;

export async function sendLoginname(command: SendLoginnameCommand) {
  const users = await listUsers({
    loginName: command.loginName,
    organizationId: command.organization,
  });

  const loginSettings = await getLoginSettings(command.organization);

  const redirectUserToSingleIDPIfAvailable = async () => {
    const identityProviders = await getActiveIdentityProviders(
      command.organization,
    ).then((resp) => {
      return resp.identityProviders;
    });

    if (identityProviders.length === 1) {
      const host = headers().get("host");
      const identityProviderType = identityProviders[0].type;

      const provider = idpTypeToSlug(identityProviderType);

      const params = new URLSearchParams();

      if (command.authRequestId) {
        params.set("authRequestId", command.authRequestId);
      }

      if (command.organization) {
        params.set("organization", command.organization);
      }

      const resp = await startIdentityProviderFlow({
        idpId: identityProviders[0].id,
        urls: {
          successUrl:
            `${host}/idp/${provider}/success?` + new URLSearchParams(params),
          failureUrl:
            `${host}/idp/${provider}/failure?` + new URLSearchParams(params),
        },
      });

      if (resp?.nextStep.case === "authUrl") {
        return redirect(resp.nextStep.value);
      }
    }
  };

  if (users.details?.totalResult == BigInt(1) && users.result[0].userId) {
    const userId = users.result[0].userId;
    const session = await createSessionForUserIdAndUpdateCookie(
      userId,
      undefined,
      undefined,
      command.authRequestId,
    );

    if (!session.factors?.user?.id) {
      throw Error("Could not create session for user");
    }

    const methods = await listAuthenticationMethodTypes(
      session.factors?.user?.id,
    );

    if (!methods.authMethodTypes || !methods.authMethodTypes.length) {
      throw Error(
        "User has no available authentication methods. Contact your administrator to setup authentication for the requested user.",
      );
    }

    if (methods.authMethodTypes.length == 1) {
      const method = methods.authMethodTypes[0];
      switch (method) {
        case AuthenticationMethodType.PASSWORD: // user has only password as auth method
          const paramsPassword: any = {
            loginName: session.factors?.user?.loginName,
          };

          // TODO: does this have to be checked in loginSettings.allowDomainDiscovery

          if (command.organization || session.factors?.user?.organizationId) {
            paramsPassword.organization =
              command.organization ?? session.factors?.user?.organizationId;
          }

          if (
            loginSettings?.passkeysType &&
            loginSettings?.passkeysType === PasskeysType.ALLOWED
          ) {
            paramsPassword.promptPasswordless = `true`;
          }

          if (command.authRequestId) {
            paramsPassword.authRequestId = command.authRequestId;
          }

          return redirect("/password?" + new URLSearchParams(paramsPassword));
        case AuthenticationMethodType.PASSKEY: // AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSKEY
          const paramsPasskey: any = { loginName: command.loginName };
          if (command.authRequestId) {
            paramsPasskey.authRequestId = command.authRequestId;
          }

          if (command.organization || session.factors?.user?.organizationId) {
            paramsPasskey.organization =
              command.organization ?? session.factors?.user?.organizationId;
          }

          return redirect(
            "/passkey/login?" + new URLSearchParams(paramsPasskey),
          );
      }
    } else {
      // prefer passkey in favor of other methods
      if (methods.authMethodTypes.includes(AuthenticationMethodType.PASSKEY)) {
        const passkeyParams: any = {
          loginName: command.loginName,
          altPassword: `${methods.authMethodTypes.includes(1)}`, // show alternative password option
        };

        if (command.authRequestId) {
          passkeyParams.authRequestId = command.authRequestId;
        }

        if (command.organization || session.factors?.user?.organizationId) {
          passkeyParams.organization =
            command.organization ?? session.factors?.user?.organizationId;
        }

        return redirect("/passkey/login?" + new URLSearchParams(passkeyParams));
      } else if (
        methods.authMethodTypes.includes(AuthenticationMethodType.IDP)
      ) {
        // TODO: redirect user to idp
        await redirectUserToSingleIDPIfAvailable();
      } else if (
        methods.authMethodTypes.includes(AuthenticationMethodType.PASSWORD)
      ) {
        // user has no passkey setup and login settings allow passkeys
        const paramsPasswordDefault: any = { loginName: command.loginName };

        if (loginSettings?.passkeysType === PasskeysType.ALLOWED) {
          paramsPasswordDefault.promptPasswordless = `true`; // PasskeysType.PASSKEYS_TYPE_ALLOWED,
        }

        if (command.authRequestId) {
          paramsPasswordDefault.authRequestId = command.authRequestId;
        }

        if (command.organization || session.factors?.user?.organizationId) {
          paramsPasswordDefault.organization =
            command.organization ?? session.factors?.user?.organizationId;
        }

        return redirect(
          "/password?" + new URLSearchParams(paramsPasswordDefault),
        );
      }
    }
  }

  // user not found, check if register is enabled on organization
  if (loginSettings?.allowRegister && !loginSettings?.allowUsernamePassword) {
    // TODO: do we need to handle login hints for IDPs here?
    await redirectUserToSingleIDPIfAvailable();

    throw Error("Could not find user");
  } else if (
    loginSettings?.allowRegister &&
    loginSettings?.allowUsernamePassword
  ) {
    let orgToRegisterOn: string | undefined = command.organization;

    if (
      !orgToRegisterOn &&
      command.loginName &&
      ORG_SUFFIX_REGEX.test(command.loginName)
    ) {
      const matched = ORG_SUFFIX_REGEX.exec(command.loginName);
      const suffix = matched?.[1] ?? "";

      // this just returns orgs where the suffix is set as primary domain
      const orgs = await getOrgsByDomain(suffix);
      const orgToCheckForDiscovery =
        orgs.result && orgs.result.length === 1 ? orgs.result[0].id : undefined;

      const orgLoginSettings = await getLoginSettings(orgToCheckForDiscovery);
      if (orgLoginSettings?.allowDomainDiscovery) {
        orgToRegisterOn = orgToCheckForDiscovery;
      }
    }

    const params = new URLSearchParams();

    if (orgToRegisterOn) {
      params.set("organization", orgToRegisterOn);
    }
    if (command.authRequestId) {
      params.set("authRequestId", command.authRequestId);
    }
    if (command.loginName) {
      params.set("loginName", command.loginName);
    }

    const registerUrl = "/register?" + params;

    return redirect(registerUrl);
  }

  if (loginSettings?.ignoreUnknownUsernames) {
    const paramsPasswordDefault: any = { loginName: command.loginName };

    if (loginSettings?.passkeysType === PasskeysType.ALLOWED) {
      paramsPasswordDefault.promptPasswordless = `true`;
    }

    if (command.authRequestId) {
      paramsPasswordDefault.authRequestId = command.authRequestId;
    }

    if (command.organization) {
      paramsPasswordDefault.organization = command.organization;
    }

    return redirect("/password?" + new URLSearchParams(paramsPasswordDefault));
  }

  throw Error("Could not find user");
}
