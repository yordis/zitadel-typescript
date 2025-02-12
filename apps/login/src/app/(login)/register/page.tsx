import { DynamicTheme } from "@/components/dynamic-theme";
import { RegisterForm } from "@/components/register-form";
import { getServiceUrlFromHeaders } from "@/lib/service";
import {
  getBrandingSettings,
  getDefaultOrg,
  getLegalAndSupportSettings,
  getLoginSettings,
  getPasswordComplexitySettings,
} from "@/lib/zitadel";
import { Organization } from "@zitadel/proto/zitadel/org/v2/org_pb";
import { getLocale, getTranslations } from "next-intl/server";
import { headers } from "next/headers";

export default async function Page(props: {
  searchParams: Promise<Record<string | number | symbol, string | undefined>>;
}) {
  const searchParams = await props.searchParams;
  const locale = getLocale();
  const t = await getTranslations({ locale, namespace: "register" });

  let { firstname, lastname, email, organization, authRequestId } =
    searchParams;

  const _headers = await headers();
  const { serviceUrl } = getServiceUrlFromHeaders(_headers);

  if (!organization) {
    const org: Organization | null = await getDefaultOrg({
      serviceUrl,
    });
    if (org) {
      organization = org.id;
    }
  }

  const legal = await getLegalAndSupportSettings({
    serviceUrl,

    organization,
  });
  const passwordComplexitySettings = await getPasswordComplexitySettings({
    serviceUrl,

    organization,
  });

  const branding = await getBrandingSettings({
    serviceUrl,

    organization,
  });

  const loginSettings = await getLoginSettings({
    serviceUrl,

    organization,
  });

  if (!loginSettings?.allowRegister) {
    return (
      <DynamicTheme branding={branding}>
        <div className="flex flex-col items-center space-y-4">
          <h1>{t("disabled.title")}</h1>
          <p className="ztdl-p">{t("disabled.description")}</p>
        </div>
      </DynamicTheme>
    );
  }

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>{t("title")}</h1>
        <p className="ztdl-p">{t("description")}</p>

        {legal && passwordComplexitySettings && (
          <RegisterForm
            legal={legal}
            organization={organization}
            firstname={firstname}
            lastname={lastname}
            email={email}
            authRequestId={authRequestId}
            loginSettings={loginSettings}
          ></RegisterForm>
        )}
      </div>
    </DynamicTheme>
  );
}
