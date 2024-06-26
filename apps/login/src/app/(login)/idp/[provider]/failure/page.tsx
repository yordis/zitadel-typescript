import { ProviderSlug } from "@/lib/demos";
import { getBrandingSettings, server } from "@/lib/zitadel";
import Alert, { AlertType } from "@/ui/Alert";
import DynamicTheme from "@/ui/DynamicTheme";
import IdpSignin from "@/ui/IdpSignin";
import {
  AddHumanUserRequest,
  IDPInformation,
  RetrieveIdentityProviderIntentResponse,
  user,
  IDPLink,
} from "@zitadel/server";
import { ClientError } from "nice-grpc";

const PROVIDER_NAME_MAPPING: {
  [provider: string]: string;
} = {
  [ProviderSlug.GOOGLE]: "Google",
  [ProviderSlug.GITHUB]: "GitHub",
};

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
  params: { provider: ProviderSlug };
}) {
  const { id, token, authRequestId, organization } = searchParams;
  const { provider } = params;

  const branding = await getBrandingSettings(server, organization);

  if (provider) {
    return (
      <DynamicTheme branding={branding}>
        <div className="flex flex-col items-center space-y-4">
          <h1>Login failure</h1>
          <div>
            An error signing in with{" "}
            {PROVIDER_NAME_MAPPING[provider]
              ? PROVIDER_NAME_MAPPING[provider]
              : provider}{" "}
            happened!
          </div>

          {/* <Alert type={AlertType.ALERT}>
                    {}
                  </Alert> */}
        </div>
      </DynamicTheme>
    );
  } else {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h1>Register</h1>
        <p className="ztdl-p">No id and token received!</p>
      </div>
    );
  }
}
