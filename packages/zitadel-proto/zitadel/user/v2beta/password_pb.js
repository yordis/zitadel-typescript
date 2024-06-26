// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/user/v2beta/password.proto (package zitadel.user.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.user.v2beta.NotificationType
 */
export const NotificationType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.user.v2beta.NotificationType",
  [
    {no: 0, name: "NOTIFICATION_TYPE_Unspecified", localName: "Unspecified"},
    {no: 1, name: "NOTIFICATION_TYPE_Email", localName: "Email"},
    {no: 2, name: "NOTIFICATION_TYPE_SMS", localName: "SMS"},
  ],
);

/**
 * @generated from message zitadel.user.v2beta.Password
 */
export const Password = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.Password",
  () => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "change_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.HashedPassword
 */
export const HashedPassword = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.HashedPassword",
  () => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "change_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.SendPasswordResetLink
 */
export const SendPasswordResetLink = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.SendPasswordResetLink",
  () => [
    { no: 1, name: "notification_type", kind: "enum", T: proto3.getEnumType(NotificationType) },
    { no: 2, name: "url_template", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ReturnPasswordResetCode
 */
export const ReturnPasswordResetCode = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ReturnPasswordResetCode",
  [],
);

/**
 * @generated from message zitadel.user.v2beta.SetPassword
 */
export const SetPassword = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.SetPassword",
  () => [
    { no: 1, name: "password", kind: "message", T: Password, oneof: "password_type" },
    { no: 2, name: "hashed_password", kind: "message", T: HashedPassword, oneof: "password_type" },
    { no: 3, name: "current_password", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "verification" },
    { no: 4, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "verification" },
  ],
);

