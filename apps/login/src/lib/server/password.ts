"use server";

import {
  createSessionAndUpdateCookie,
  setSessionAndUpdateCookie,
} from "@/lib/server/cookie";
import {
  getLoginSettings,
  getSession,
  getUserByID,
  listAuthenticationMethodTypes,
  listUsers,
  passwordReset,
  setPassword,
  setUserPassword,
} from "@/lib/zitadel";
import { create } from "@zitadel/client";
import { createUserServiceClient } from "@zitadel/client/v2";
import { createServerTransport } from "@zitadel/node";
import {
  Checks,
  ChecksSchema,
} from "@zitadel/proto/zitadel/session/v2/session_service_pb";
import { LoginSettings } from "@zitadel/proto/zitadel/settings/v2/login_settings_pb";
import { User, UserState } from "@zitadel/proto/zitadel/user/v2/user_pb";
import {
  AuthenticationMethodType,
  SetPasswordRequestSchema,
} from "@zitadel/proto/zitadel/user/v2/user_service_pb";
import { headers } from "next/headers";
import { getNextUrl } from "../client";
import { getSessionCookieById, getSessionCookieByLoginName } from "../cookies";

type ResetPasswordCommand = {
  loginName: string;
  organization?: string;
  authRequestId?: string;
};

export async function resetPassword(command: ResetPasswordCommand) {
  const host = (await headers()).get("host");

  const users = await listUsers({
    loginName: command.loginName,
    organizationId: command.organization,
  });

  if (
    !users.details ||
    users.details.totalResult !== BigInt(1) ||
    !users.result[0].userId
  ) {
    return { error: "Could not send Password Reset Link" };
  }
  const userId = users.result[0].userId;

  return passwordReset(userId, host, command.authRequestId);
}

export type UpdateSessionCommand = {
  loginName: string;
  organization?: string;
  checks: Checks;
  authRequestId?: string;
};

export async function sendPassword(command: UpdateSessionCommand) {
  let sessionCookie = await getSessionCookieByLoginName({
    loginName: command.loginName,
    organization: command.organization,
  }).catch((error) => {
    console.warn("Ignored error:", error);
  });

  let session;
  let user: User;
  let loginSettings: LoginSettings | undefined;

  if (!sessionCookie) {
    const users = await listUsers({
      loginName: command.loginName,
      organizationId: command.organization,
    });

    if (users.details?.totalResult == BigInt(1) && users.result[0].userId) {
      user = users.result[0];

      const checks = create(ChecksSchema, {
        user: { search: { case: "userId", value: users.result[0].userId } },
        password: { password: command.checks.password?.password },
      });

      loginSettings = await getLoginSettings(command.organization);

      session = await createSessionAndUpdateCookie(
        checks,
        undefined,
        command.authRequestId,
        loginSettings?.passwordCheckLifetime,
      );
    }

    // this is a fake error message to hide that the user does not even exist
    return { error: "Could not verify password" };
  } else {
    session = await setSessionAndUpdateCookie(
      sessionCookie,
      command.checks,
      undefined,
      command.authRequestId,
      loginSettings?.passwordCheckLifetime,
    );

    if (!session?.factors?.user?.id) {
      return { error: "Could not create session for user" };
    }

    const userResponse = await getUserByID(session?.factors?.user?.id);

    if (!userResponse.user) {
      return { error: "Could not find user" };
    }

    user = userResponse.user;
  }

  if (!loginSettings) {
    loginSettings = await getLoginSettings(
      command.organization ?? session.factors?.user?.organizationId,
    );
  }

  if (!session?.factors?.user?.id || !sessionCookie) {
    return { error: "Could not create session for user" };
  }

  // if password, check if user has MFA methods
  let authMethods;
  if (command.checks && command.checks.password && session.factors?.user?.id) {
    const response = await listAuthenticationMethodTypes(
      session.factors.user.id,
    );
    if (response.authMethodTypes && response.authMethodTypes.length) {
      authMethods = response.authMethodTypes;
    }
  }

  if (!authMethods || !session.factors?.user?.loginName) {
    return { error: "Could not verify password!" };
  }

  const humanUser = user.type.case === "human" ? user.type.value : undefined;

  // check if the user has to change password first
  if (humanUser?.passwordChangeRequired) {
    const params = new URLSearchParams({
      loginName: session.factors?.user?.loginName,
    });

    if (command.organization || session.factors?.user?.organizationId) {
      params.append("organization", session.factors?.user?.organizationId);
    }

    if (command.authRequestId) {
      params.append("authRequestId", command.authRequestId);
    }

    return { redirect: "/password/change?" + params };
  }

  const availableMultiFactors = authMethods?.filter(
    (m: AuthenticationMethodType) =>
      m !== AuthenticationMethodType.PASSWORD &&
      m !== AuthenticationMethodType.PASSKEY,
  );

  if (availableMultiFactors?.length == 1) {
    const params = new URLSearchParams({
      loginName: session.factors?.user.loginName,
    });

    if (command.authRequestId) {
      params.append("authRequestId", command.authRequestId);
    }

    if (command.organization || session.factors?.user?.organizationId) {
      params.append(
        "organization",
        command.organization ?? session.factors?.user?.organizationId,
      );
    }

    const factor = availableMultiFactors[0];
    // if passwordless is other method, but user selected password as alternative, perform a login
    if (factor === AuthenticationMethodType.TOTP) {
      return { redirect: `/otp/time-based?` + params };
    } else if (factor === AuthenticationMethodType.OTP_SMS) {
      return { redirect: `/otp/sms?` + params };
    } else if (factor === AuthenticationMethodType.OTP_EMAIL) {
      return { redirect: `/otp/email?` + params };
    } else if (factor === AuthenticationMethodType.U2F) {
      return { redirect: `/u2f?` + params };
    }
  } else if (availableMultiFactors?.length >= 1) {
    const params = new URLSearchParams({
      loginName: session.factors.user.loginName,
    });

    if (command.authRequestId) {
      params.append("authRequestId", command.authRequestId);
    }

    if (command.organization || session.factors?.user?.organizationId) {
      params.append(
        "organization",
        command.organization ?? session.factors?.user?.organizationId,
      );
    }

    return { redirect: `/mfa?` + params };
  }
  // TODO: check if handling of userstate INITIAL is needed
  else if (user.state === UserState.INITIAL) {
    return { error: "Initial User not supported" };
  } else if (
    (loginSettings?.forceMfa || loginSettings?.forceMfaLocalOnly) &&
    !availableMultiFactors.length
  ) {
    const params = new URLSearchParams({
      loginName: session.factors.user.loginName,
      force: "true", // this defines if the mfa is forced in the settings
      checkAfter: "true", // this defines if the check is directly made after the setup
    });

    if (command.authRequestId) {
      params.append("authRequestId", command.authRequestId);
    }

    if (command.organization || session.factors?.user?.organizationId) {
      params.append(
        "organization",
        command.organization ?? session.factors?.user?.organizationId,
      );
    }

    // TODO: provide a way to setup passkeys on mfa page?
    return { redirect: `/mfa/set?` + params };
  }
  // TODO: implement passkey setup

  //  else if (
  //   submitted.factors &&
  //   !submitted.factors.webAuthN && // if session was not verified with a passkey
  //   promptPasswordless && // if explicitly prompted due policy
  //   !isAlternative // escaped if password was used as an alternative method
  // ) {
  //   const params = new URLSearchParams({
  //     loginName: submitted.factors.user.loginName,
  //     prompt: "true",
  //   });

  //   if (authRequestId) {
  //     params.append("authRequestId", authRequestId);
  //   }

  //   if (organization) {
  //     params.append("organization", organization);
  //   }

  //   return router.push(`/passkey/set?` + params);
  // }
  else if (command.authRequestId && session.id) {
    const nextUrl = await getNextUrl(
      {
        sessionId: session.id,
        authRequestId: command.authRequestId,
        organization:
          command.organization ?? session.factors?.user?.organizationId,
      },
      loginSettings?.defaultRedirectUri,
    );

    return { redirect: nextUrl };
  }

  const url = await getNextUrl(
    {
      loginName: session.factors.user.loginName,
      organization: session.factors?.user?.organizationId,
    },
    loginSettings?.defaultRedirectUri,
  );

  return { redirect: url };
}

export async function changePassword(command: {
  code?: string;
  userId: string;
  password: string;
}) {
  // check for init state
  const { user } = await getUserByID(command.userId);

  if (!user || user.userId !== command.userId) {
    return { error: "Could not send Password Reset Link" };
  }
  const userId = user.userId;

  return setUserPassword(userId, command.password, user, command.code);
}

type CheckSessionAndSetPasswordCommand = {
  sessionId: string;
  password: string;
};

export async function checkSessionAndSetPassword({
  sessionId,
  password,
}: CheckSessionAndSetPasswordCommand) {
  const sessionCookie = await getSessionCookieById({ sessionId });

  const { session } = await getSession({
    sessionId: sessionCookie.id,
    sessionToken: sessionCookie.token,
  });

  if (!session || !session.factors?.user?.id) {
    return { error: "Could not load session" };
  }

  const payload = create(SetPasswordRequestSchema, {
    userId: session.factors.user.id,
    newPassword: {
      password,
    },
  });

  // check if the user has no password set in order to set a password
  const authmethods = await listAuthenticationMethodTypes(
    session.factors.user.id,
  );

  if (!authmethods) {
    return { error: "Could not load auth methods" };
  }

  const requiredAuthMethodsForForceMFA = [
    AuthenticationMethodType.OTP_EMAIL,
    AuthenticationMethodType.OTP_SMS,
    AuthenticationMethodType.TOTP,
    AuthenticationMethodType.U2F,
  ];

  const hasNoMFAMethods = requiredAuthMethodsForForceMFA.every(
    (method) => !authmethods.authMethodTypes.includes(method),
  );

  const loginSettings = await getLoginSettings(
    session.factors.user.organizationId,
  );

  const forceMfa = !!(
    loginSettings?.forceMfa || loginSettings?.forceMfaLocalOnly
  );

  // if the user has no MFA but MFA is enforced, we can set a password otherwise we use the token of the user
  if (forceMfa && hasNoMFAMethods) {
    return setPassword(payload).catch((error) => {
      // throw error if failed precondition (ex. User is not yet initialized)
      if (error.code === 9 && error.message) {
        return { error: "Failed precondition" };
      } else {
        throw error;
      }
    });
  } else {
    const myUserService = (sessionToken: string) => {
      return createUserServiceClient(
        createServerTransport(sessionToken, {
          baseUrl: process.env.ZITADEL_API_URL!,
        }),
      );
    };

    const selfService = await myUserService(`${sessionCookie.token}`);

    return selfService
      .setPassword(
        {
          userId: session.factors.user.id,
          newPassword: { password, changeRequired: false },
        },
        {},
      )
      .catch((error) => {
        console.log(error);
        if (error.code === 7) {
          return { error: "Session is not valid." };
        }
        throw error;
      });
  }
}
