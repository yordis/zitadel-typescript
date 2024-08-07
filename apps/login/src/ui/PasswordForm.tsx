"use client";

import { useState } from "react";
import { Button, ButtonVariants } from "./Button";
import { TextInput } from "./Input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Spinner } from "./Spinner";
import Alert from "./Alert";
import BackButton from "./BackButton";
import { LoginSettings } from "@zitadel/proto/zitadel/settings/v2/login_settings_pb";
import { Checks } from "@zitadel/proto/zitadel/session/v2/session_service_pb";
import { AuthenticationMethodType } from "@zitadel/proto/zitadel/user/v2/user_service_pb";

type Inputs = {
  password: string;
};

type Props = {
  loginSettings: LoginSettings | undefined;
  loginName?: string;
  organization?: string;
  authRequestId?: string;
  isAlternative?: boolean; // whether password was requested as alternative auth method
  promptPasswordless?: boolean;
};

export default function PasswordForm({
  loginSettings,
  loginName,
  organization,
  authRequestId,
  promptPasswordless,
  isAlternative,
}: Props) {
  const { register, handleSubmit, formState } = useForm<Inputs>({
    mode: "onBlur",
  });

  const [error, setError] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  async function submitPassword(values: Inputs) {
    setError("");
    setLoading(true);

    const res = await fetch("/api/session", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginName,
        organization,
        checks: {
          password: { password: values.password },
        } as Checks,
        authRequestId,
      }),
    });

    const response = await res.json();

    setLoading(false);
    if (!res.ok) {
      setError(response.details?.details ?? "Could not verify password");
      return Promise.reject(response.details);
    }
    return response;
  }

  async function resetPassword() {
    setError("");
    setLoading(true);

    const res = await fetch("/api/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginName,
        organization,
        authRequestId,
      }),
    });

    const response = await res.json();

    setLoading(false);
    if (!res.ok) {
      console.log(response.details.details);
      setError(response.details?.details ?? "Could not verify password");
      return Promise.reject(response.details);
    }
    return response;
  }

  function submitPasswordAndContinue(value: Inputs): Promise<boolean | void> {
    return submitPassword(value).then((resp) => {
      // if user has mfa -> /otp/[method] or /u2f
      // if mfa is forced and user has no mfa -> /mfa/set
      // if no passwordless -> /passkey/add

      // exclude password and passwordless
      const availableSecondFactors = resp.authMethods?.filter(
        (m: AuthenticationMethodType) =>
          m !== AuthenticationMethodType.PASSWORD &&
          m !== AuthenticationMethodType.PASSKEY,
      );

      if (availableSecondFactors.length == 1) {
        const params = new URLSearchParams({
          loginName: resp.factors.user.loginName,
        });

        if (authRequestId) {
          params.append("authRequestId", authRequestId);
        }

        if (organization) {
          params.append("organization", organization);
        }

        const factor = availableSecondFactors[0];
        // if passwordless is other method, but user selected password as alternative, perform a login
        if (factor === AuthenticationMethodType.TOTP) {
          return router.push(`/otp/time-based?` + params);
        } else if (factor === AuthenticationMethodType.OTP_SMS) {
          return router.push(`/otp/sms?` + params);
        } else if (factor === AuthenticationMethodType.OTP_EMAIL) {
          return router.push(`/otp/email?` + params);
        } else if (factor === AuthenticationMethodType.U2F) {
          return router.push(`/u2f?` + params);
        }
      } else if (availableSecondFactors.length >= 1) {
        const params = new URLSearchParams({
          loginName: resp.factors.user.loginName,
        });

        if (authRequestId) {
          params.append("authRequestId", authRequestId);
        }

        if (organization) {
          params.append("organization", organization);
        }

        return router.push(`/mfa?` + params);
      } else if (
        resp.factors &&
        !resp.factors.passwordless && // if session was not verified with a passkey
        promptPasswordless && // if explicitly prompted due policy
        !isAlternative // escaped if password was used as an alternative method
      ) {
        const params = new URLSearchParams({
          loginName: resp.factors.user.loginName,
          promptPasswordless: "true",
        });

        if (authRequestId) {
          params.append("authRequestId", authRequestId);
        }

        if (organization) {
          params.append("organization", organization);
        }

        return router.push(`/passkey/add?` + params);
      } else if (loginSettings?.forceMfa && !availableSecondFactors.length) {
        const params = new URLSearchParams({
          loginName: resp.factors.user.loginName,
          checkAfter: "true", // this defines if the check is directly made after the setup
        });

        if (authRequestId) {
          params.append("authRequestId", authRequestId);
        }

        if (organization) {
          params.append("organization", organization);
        }

        return router.push(`/mfa/set?` + params);
      } else if (authRequestId && resp.sessionId) {
        const params = new URLSearchParams({
          sessionId: resp.sessionId,
          authRequest: authRequestId,
        });

        if (organization) {
          params.append("organization", organization);
        }

        return router.push(`/login?` + params);
      } else {
        // without OIDC flow
        const params = new URLSearchParams(
          authRequestId
            ? {
                loginName: resp.factors.user.loginName,
                authRequestId,
              }
            : {
                loginName: resp.factors.user.loginName,
              },
        );

        if (organization) {
          params.append("organization", organization);
        }

        return router.push(`/signedin?` + params);
      }
    });
  }

  return (
    <form className="w-full">
      <div className={`${error && "transform-gpu animate-shake"}`}>
        <TextInput
          type="password"
          autoComplete="password"
          {...register("password", { required: "This field is required" })}
          label="Password"
          //   error={errors.username?.message as string}
        />
        <button
          className="transition-all text-sm hover:text-primary-light-500 dark:hover:text-primary-dark-500"
          onClick={() => resetPassword()}
          type="button"
          disabled={loading}
        >
          Reset Password
        </button>

        {loginName && (
          <input type="hidden" name="loginName" value={loginName} />
        )}
      </div>

      {error && (
        <div className="py-4">
          <Alert>{error}</Alert>
        </div>
      )}

      <div className="mt-8 flex w-full flex-row items-center">
        <BackButton />
        <span className="flex-grow"></span>
        <Button
          type="submit"
          className="self-end"
          variant={ButtonVariants.Primary}
          disabled={loading || !formState.isValid}
          onClick={handleSubmit(submitPasswordAndContinue)}
        >
          {loading && <Spinner className="h-5 w-5 mr-2" />}
          continue
        </Button>
      </div>
    </form>
  );
}
