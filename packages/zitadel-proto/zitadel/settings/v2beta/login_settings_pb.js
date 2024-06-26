// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/settings/v2beta/login_settings.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { ResourceOwnerType } from "./settings_pb.js";

/**
 * @generated from enum zitadel.settings.v2beta.SecondFactorType
 */
export const SecondFactorType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.settings.v2beta.SecondFactorType",
  [
    {no: 0, name: "SECOND_FACTOR_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SECOND_FACTOR_TYPE_OTP", localName: "OTP"},
    {no: 2, name: "SECOND_FACTOR_TYPE_U2F", localName: "U2F"},
    {no: 3, name: "SECOND_FACTOR_TYPE_OTP_EMAIL", localName: "OTP_EMAIL"},
    {no: 4, name: "SECOND_FACTOR_TYPE_OTP_SMS", localName: "OTP_SMS"},
  ],
);

/**
 * @generated from enum zitadel.settings.v2beta.MultiFactorType
 */
export const MultiFactorType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.settings.v2beta.MultiFactorType",
  [
    {no: 0, name: "MULTI_FACTOR_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION", localName: "U2F_WITH_VERIFICATION"},
  ],
);

/**
 * @generated from enum zitadel.settings.v2beta.PasskeysType
 */
export const PasskeysType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.settings.v2beta.PasskeysType",
  [
    {no: 0, name: "PASSKEYS_TYPE_NOT_ALLOWED", localName: "NOT_ALLOWED"},
    {no: 1, name: "PASSKEYS_TYPE_ALLOWED", localName: "ALLOWED"},
  ],
);

/**
 * @generated from enum zitadel.settings.v2beta.IdentityProviderType
 */
export const IdentityProviderType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.settings.v2beta.IdentityProviderType",
  [
    {no: 0, name: "IDENTITY_PROVIDER_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "IDENTITY_PROVIDER_TYPE_OIDC", localName: "OIDC"},
    {no: 2, name: "IDENTITY_PROVIDER_TYPE_JWT", localName: "JWT"},
    {no: 3, name: "IDENTITY_PROVIDER_TYPE_LDAP", localName: "LDAP"},
    {no: 4, name: "IDENTITY_PROVIDER_TYPE_OAUTH", localName: "OAUTH"},
    {no: 5, name: "IDENTITY_PROVIDER_TYPE_AZURE_AD", localName: "AZURE_AD"},
    {no: 6, name: "IDENTITY_PROVIDER_TYPE_GITHUB", localName: "GITHUB"},
    {no: 7, name: "IDENTITY_PROVIDER_TYPE_GITHUB_ES", localName: "GITHUB_ES"},
    {no: 8, name: "IDENTITY_PROVIDER_TYPE_GITLAB", localName: "GITLAB"},
    {no: 9, name: "IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED", localName: "GITLAB_SELF_HOSTED"},
    {no: 10, name: "IDENTITY_PROVIDER_TYPE_GOOGLE", localName: "GOOGLE"},
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.LoginSettings
 */
export const LoginSettings = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.LoginSettings",
  () => [
    { no: 1, name: "allow_username_password", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "allow_register", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "allow_external_idp", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "force_mfa", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "passkeys_type", kind: "enum", T: proto3.getEnumType(PasskeysType) },
    { no: 6, name: "hide_password_reset", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "ignore_unknown_usernames", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "default_redirect_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "password_check_lifetime", kind: "message", T: Duration },
    { no: 10, name: "external_login_check_lifetime", kind: "message", T: Duration },
    { no: 11, name: "mfa_init_skip_lifetime", kind: "message", T: Duration },
    { no: 12, name: "second_factor_check_lifetime", kind: "message", T: Duration },
    { no: 13, name: "multi_factor_check_lifetime", kind: "message", T: Duration },
    { no: 14, name: "second_factors", kind: "enum", T: proto3.getEnumType(SecondFactorType), repeated: true },
    { no: 15, name: "multi_factors", kind: "enum", T: proto3.getEnumType(MultiFactorType), repeated: true },
    { no: 16, name: "allow_domain_discovery", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "disable_login_with_email", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 18, name: "disable_login_with_phone", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "resource_owner_type", kind: "enum", T: proto3.getEnumType(ResourceOwnerType) },
    { no: 22, name: "force_mfa_local_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.IdentityProvider
 */
export const IdentityProvider = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.IdentityProvider",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(IdentityProviderType) },
  ],
);

