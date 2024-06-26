// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/policy.proto (package zitadel.policy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { ObjectDetails } from "./object_pb.js";
import { IDPLoginPolicyLink } from "./idp_pb.js";

/**
 * @generated from enum zitadel.policy.v1.ThemeMode
 */
export const ThemeMode = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.policy.v1.ThemeMode",
  [
    {no: 0, name: "THEME_MODE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "THEME_MODE_AUTO", localName: "AUTO"},
    {no: 2, name: "THEME_MODE_DARK", localName: "DARK"},
    {no: 3, name: "THEME_MODE_LIGHT", localName: "LIGHT"},
  ],
);

/**
 * @generated from enum zitadel.policy.v1.SecondFactorType
 */
export const SecondFactorType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.policy.v1.SecondFactorType",
  [
    {no: 0, name: "SECOND_FACTOR_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SECOND_FACTOR_TYPE_OTP", localName: "OTP"},
    {no: 2, name: "SECOND_FACTOR_TYPE_U2F", localName: "U2F"},
    {no: 3, name: "SECOND_FACTOR_TYPE_OTP_EMAIL", localName: "OTP_EMAIL"},
    {no: 4, name: "SECOND_FACTOR_TYPE_OTP_SMS", localName: "OTP_SMS"},
  ],
);

/**
 * @generated from enum zitadel.policy.v1.MultiFactorType
 */
export const MultiFactorType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.policy.v1.MultiFactorType",
  [
    {no: 0, name: "MULTI_FACTOR_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION", localName: "U2F_WITH_VERIFICATION"},
  ],
);

/**
 * @generated from enum zitadel.policy.v1.PasswordlessType
 */
export const PasswordlessType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.policy.v1.PasswordlessType",
  [
    {no: 0, name: "PASSWORDLESS_TYPE_NOT_ALLOWED", localName: "NOT_ALLOWED"},
    {no: 1, name: "PASSWORDLESS_TYPE_ALLOWED", localName: "ALLOWED"},
  ],
);

/**
 * deprecated: please use DomainPolicy instead
 *
 * @generated from message zitadel.policy.v1.OrgIAMPolicy
 */
export const OrgIAMPolicy = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.policy.v1.OrgIAMPolicy",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "user_login_must_be_domain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.policy.v1.DomainPolicy
 */
export const DomainPolicy = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.policy.v1.DomainPolicy",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "user_login_must_be_domain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "validate_org_domains", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "smtp_sender_address_matches_instance_domain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.policy.v1.LabelPolicy
 */
export const LabelPolicy = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.policy.v1.LabelPolicy",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "primary_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "hide_login_name_suffix", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "warn_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "background_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "font_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "primary_color_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "background_color_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "warn_color_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "font_color_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "disable_watermark", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "logo_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "icon_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "logo_url_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "icon_url_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "font_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "theme_mode", kind: "enum", T: proto3.getEnumType(ThemeMode) },
  ],
);

/**
 * @generated from message zitadel.policy.v1.LoginPolicy
 */
export const LoginPolicy = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.policy.v1.LoginPolicy",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "allow_username_password", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "allow_register", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "allow_external_idp", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "force_mfa", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "passwordless_type", kind: "enum", T: proto3.getEnumType(PasswordlessType) },
    { no: 7, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "hide_password_reset", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "ignore_unknown_usernames", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "default_redirect_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "password_check_lifetime", kind: "message", T: Duration },
    { no: 12, name: "external_login_check_lifetime", kind: "message", T: Duration },
    { no: 13, name: "mfa_init_skip_lifetime", kind: "message", T: Duration },
    { no: 14, name: "second_factor_check_lifetime", kind: "message", T: Duration },
    { no: 15, name: "multi_factor_check_lifetime", kind: "message", T: Duration },
    { no: 16, name: "second_factors", kind: "enum", T: proto3.getEnumType(SecondFactorType), repeated: true },
    { no: 17, name: "multi_factors", kind: "enum", T: proto3.getEnumType(MultiFactorType), repeated: true },
    { no: 18, name: "idps", kind: "message", T: IDPLoginPolicyLink, repeated: true },
    { no: 19, name: "allow_domain_discovery", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 20, name: "disable_login_with_email", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "disable_login_with_phone", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 22, name: "force_mfa_local_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.policy.v1.PasswordComplexityPolicy
 */
export const PasswordComplexityPolicy = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.policy.v1.PasswordComplexityPolicy",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "min_length", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "has_uppercase", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "has_lowercase", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "has_number", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "has_symbol", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.policy.v1.PasswordAgePolicy
 */
export const PasswordAgePolicy = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.policy.v1.PasswordAgePolicy",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "max_age_days", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "expire_warn_days", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.policy.v1.LockoutPolicy
 */
export const LockoutPolicy = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.policy.v1.LockoutPolicy",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "max_password_attempts", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "max_otp_attempts", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.policy.v1.PrivacyPolicy
 */
export const PrivacyPolicy = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.policy.v1.PrivacyPolicy",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "tos_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "privacy_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "help_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "support_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "docs_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "custom_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "custom_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.policy.v1.NotificationPolicy
 */
export const NotificationPolicy = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.policy.v1.NotificationPolicy",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "password_change", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

