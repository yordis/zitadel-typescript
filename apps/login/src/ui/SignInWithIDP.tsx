"use client";
import { ReactNode, useState } from "react";

import {
  SignInWithGitlab,
  SignInWithAzureAD,
  SignInWithGoogle,
  SignInWithGithub,
} from "@zitadel/react";
import { useRouter } from "next/navigation";
import { ProviderSlug } from "@/lib/demos";
import Alert from "./Alert";
import { IdentityProviderType } from "@zitadel/proto/zitadel/settings/v2beta/login_settings_pb";

export interface SignInWithIDPProps {
  children?: ReactNode;
  host: string;
  identityProviders: any[];
  authRequestId?: string;
  organization?: string;
  startIDPFlowPath?: (idpId: string) => string;
}

const START_IDP_FLOW_PATH = (idpId: string) =>
  `/v2beta/users/idps/${idpId}/start`;

export function SignInWithIDP({
  host,
  identityProviders,
  authRequestId,
  organization,
  startIDPFlowPath = START_IDP_FLOW_PATH,
}: SignInWithIDPProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  async function startFlow(idpId: string, provider: ProviderSlug) {
    setLoading(true);

    const params = new URLSearchParams();

    if (authRequestId) {
      params.set("authRequestId", authRequestId);
    }

    if (organization) {
      params.set("organization", organization);
    }

    const res = await fetch("/api/idp/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idpId,
        successUrl:
          `${host}/idp/${provider}/success?` + new URLSearchParams(params),
        failureUrl:
          `${host}/idp/${provider}/failure?` + new URLSearchParams(params),
      }),
    });

    const response = await res.json();

    setLoading(false);
    if (!res.ok) {
      setError(response.details);
      return Promise.reject(response.details);
    }
    return response;
  }

  return (
    <div className="flex flex-col w-full gap-2 text-sm">
      {identityProviders &&
        identityProviders.map((idp, i) => {
          switch (idp.type) {
            case "IDENTITY_PROVIDER_TYPE_GITHUB":
              return (
                <SignInWithGithub
                  key={`idp-${i}`}
                  onClick={() =>
                    startFlow(idp.id, ProviderSlug.GITHUB).then(
                      ({ authUrl }) => {
                        router.push(authUrl);
                      },
                    )
                  }
                ></SignInWithGithub>
              );
            case "IDENTITY_PROVIDER_TYPE_GITHUB_ES":
              return (
                <SignInWithGithub
                  key={`idp-${i}`}
                  onClick={() => alert("TODO: unimplemented")}
                ></SignInWithGithub>
              );
            case "IDENTITY_PROVIDER_TYPE_AZURE_AD":
              return (
                <SignInWithAzureAD
                  key={`idp-${i}`}
                  onClick={() => alert("TODO: unimplemented")}
                ></SignInWithAzureAD>
              );
            case "IDENTITY_PROVIDER_TYPE_GOOGLE":
              return (
                <SignInWithGoogle
                  key={`idp-${i}`}
                  e2e="google"
                  name={idp.name}
                  onClick={() =>
                    startFlow(idp.id, ProviderSlug.GOOGLE).then(
                      ({ authUrl }) => {
                        router.push(authUrl);
                      },
                    )
                  }
                ></SignInWithGoogle>
              );
            case IdentityProviderType.GITLAB:
              return (
                <SignInWithGitlab
                  key={`idp-${i}`}
                  onClick={() => alert("TODO: unimplemented")}
                ></SignInWithGitlab>
              );
            case IdentityProviderType.GITLAB_SELF_HOSTED:
              return (
                <SignInWithGitlab
                  key={`idp-${i}`}
                  onClick={() => alert("TODO: unimplemented")}
                ></SignInWithGitlab>
              );
            default:
              return null;
          }
        })}
      {error && (
        <div className="py-4">
          <Alert>{error}</Alert>
        </div>
      )}
    </div>
  );
}

SignInWithIDP.displayName = "SignInWithIDP";
