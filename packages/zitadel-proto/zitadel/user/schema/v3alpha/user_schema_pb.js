// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/user/schema/v3alpha/user_schema.proto (package zitadel.user.schema.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct } from "@bufbuild/protobuf";
import { Details, TextQueryMethod } from "../../../object/v2beta/object_pb.js";

/**
 * @generated from enum zitadel.user.schema.v3alpha.FieldName
 */
export const FieldName = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.user.schema.v3alpha.FieldName",
  [
    {no: 0, name: "FIELD_NAME_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "FIELD_NAME_TYPE", localName: "TYPE"},
    {no: 2, name: "FIELD_NAME_STATE", localName: "STATE"},
    {no: 3, name: "FIELD_NAME_REVISION", localName: "REVISION"},
    {no: 4, name: "FIELD_NAME_CHANGE_DATE", localName: "CHANGE_DATE"},
  ],
);

/**
 * @generated from enum zitadel.user.schema.v3alpha.State
 */
export const State = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.user.schema.v3alpha.State",
  [
    {no: 0, name: "STATE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "STATE_ACTIVE", localName: "ACTIVE"},
    {no: 2, name: "STATE_INACTIVE", localName: "INACTIVE"},
  ],
);

/**
 * @generated from enum zitadel.user.schema.v3alpha.AuthenticatorType
 */
export const AuthenticatorType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.user.schema.v3alpha.AuthenticatorType",
  [
    {no: 0, name: "AUTHENTICATOR_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "AUTHENTICATOR_TYPE_USERNAME", localName: "USERNAME"},
    {no: 2, name: "AUTHENTICATOR_TYPE_PASSWORD", localName: "PASSWORD"},
    {no: 3, name: "AUTHENTICATOR_TYPE_WEBAUTHN", localName: "WEBAUTHN"},
    {no: 4, name: "AUTHENTICATOR_TYPE_TOTP", localName: "TOTP"},
    {no: 5, name: "AUTHENTICATOR_TYPE_OTP_EMAIL", localName: "OTP_EMAIL"},
    {no: 6, name: "AUTHENTICATOR_TYPE_OTP_SMS", localName: "OTP_SMS"},
    {no: 7, name: "AUTHENTICATOR_TYPE_AUTHENTICATION_KEY", localName: "AUTHENTICATION_KEY"},
    {no: 8, name: "AUTHENTICATOR_TYPE_IDENTITY_PROVIDER", localName: "IDENTITY_PROVIDER"},
  ],
);

/**
 * @generated from message zitadel.user.schema.v3alpha.UserSchema
 */
export const UserSchema = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.schema.v3alpha.UserSchema",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "details", kind: "message", T: Details },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "state", kind: "enum", T: proto3.getEnumType(State) },
    { no: 5, name: "revision", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "schema", kind: "message", T: Struct },
    { no: 7, name: "possible_authenticators", kind: "enum", T: proto3.getEnumType(AuthenticatorType), repeated: true },
  ],
);

/**
 * @generated from message zitadel.user.schema.v3alpha.SearchQuery
 */
export const SearchQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.schema.v3alpha.SearchQuery",
  () => [
    { no: 1, name: "or_query", kind: "message", T: OrQuery, oneof: "query" },
    { no: 2, name: "and_query", kind: "message", T: AndQuery, oneof: "query" },
    { no: 3, name: "not_query", kind: "message", T: NotQuery, oneof: "query" },
    { no: 5, name: "type_query", kind: "message", T: TypeQuery, oneof: "query" },
    { no: 6, name: "state_query", kind: "message", T: StateQuery, oneof: "query" },
    { no: 7, name: "id_query", kind: "message", T: IDQuery, oneof: "query" },
  ],
);

/**
 * @generated from message zitadel.user.schema.v3alpha.OrQuery
 */
export const OrQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.schema.v3alpha.OrQuery",
  () => [
    { no: 1, name: "queries", kind: "message", T: SearchQuery, repeated: true },
  ],
);

/**
 * @generated from message zitadel.user.schema.v3alpha.AndQuery
 */
export const AndQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.schema.v3alpha.AndQuery",
  () => [
    { no: 1, name: "queries", kind: "message", T: SearchQuery, repeated: true },
  ],
);

/**
 * @generated from message zitadel.user.schema.v3alpha.NotQuery
 */
export const NotQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.schema.v3alpha.NotQuery",
  () => [
    { no: 1, name: "query", kind: "message", T: SearchQuery },
  ],
);

/**
 * @generated from message zitadel.user.schema.v3alpha.IDQuery
 */
export const IDQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.schema.v3alpha.IDQuery",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "method", kind: "enum", T: proto3.getEnumType(TextQueryMethod) },
  ],
);

/**
 * @generated from message zitadel.user.schema.v3alpha.TypeQuery
 */
export const TypeQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.schema.v3alpha.TypeQuery",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "method", kind: "enum", T: proto3.getEnumType(TextQueryMethod) },
  ],
);

/**
 * @generated from message zitadel.user.schema.v3alpha.StateQuery
 */
export const StateQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.schema.v3alpha.StateQuery",
  () => [
    { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(State) },
  ],
);

