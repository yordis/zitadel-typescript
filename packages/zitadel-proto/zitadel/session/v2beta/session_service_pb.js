// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/session/v2beta/session_service.proto (package zitadel.session.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, Struct } from "@bufbuild/protobuf";
import { Details, ListDetails, ListQuery } from "../../object/v2beta/object_pb.js";
import { SearchQuery, Session, SessionFieldName, UserAgent } from "./session_pb.js";
import { Challenges, RequestChallenges } from "./challenge_pb.js";

/**
 * @generated from message zitadel.session.v2beta.ListSessionsRequest
 */
export const ListSessionsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.ListSessionsRequest",
  () => [
    { no: 1, name: "query", kind: "message", T: ListQuery },
    { no: 2, name: "queries", kind: "message", T: SearchQuery, repeated: true },
    { no: 3, name: "sorting_column", kind: "enum", T: proto3.getEnumType(SessionFieldName) },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.ListSessionsResponse
 */
export const ListSessionsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.ListSessionsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: ListDetails },
    { no: 2, name: "sessions", kind: "message", T: Session, repeated: true },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.GetSessionRequest
 */
export const GetSessionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.GetSessionRequest",
  () => [
    { no: 1, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "session_token", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.GetSessionResponse
 */
export const GetSessionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.GetSessionResponse",
  () => [
    { no: 1, name: "session", kind: "message", T: Session },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.CreateSessionRequest
 */
export const CreateSessionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.CreateSessionRequest",
  () => [
    { no: 1, name: "checks", kind: "message", T: Checks },
    { no: 2, name: "metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 3, name: "challenges", kind: "message", T: RequestChallenges },
    { no: 4, name: "user_agent", kind: "message", T: UserAgent },
    { no: 5, name: "lifetime", kind: "message", T: Duration, opt: true },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.CreateSessionResponse
 */
export const CreateSessionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.CreateSessionResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "session_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "challenges", kind: "message", T: Challenges },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.SetSessionRequest
 */
export const SetSessionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.SetSessionRequest",
  () => [
    { no: 1, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "session_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "checks", kind: "message", T: Checks },
    { no: 4, name: "metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 5, name: "challenges", kind: "message", T: RequestChallenges },
    { no: 6, name: "lifetime", kind: "message", T: Duration, opt: true },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.SetSessionResponse
 */
export const SetSessionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.SetSessionResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "session_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "challenges", kind: "message", T: Challenges },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.DeleteSessionRequest
 */
export const DeleteSessionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.DeleteSessionRequest",
  () => [
    { no: 1, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "session_token", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.DeleteSessionResponse
 */
export const DeleteSessionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.DeleteSessionResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.Checks
 */
export const Checks = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.Checks",
  () => [
    { no: 1, name: "user", kind: "message", T: CheckUser, opt: true },
    { no: 2, name: "password", kind: "message", T: CheckPassword, opt: true },
    { no: 3, name: "web_auth_n", kind: "message", T: CheckWebAuthN, opt: true },
    { no: 4, name: "idp_intent", kind: "message", T: CheckIDPIntent, opt: true },
    { no: 5, name: "totp", kind: "message", T: CheckTOTP, opt: true },
    { no: 6, name: "otp_sms", kind: "message", T: CheckOTP, opt: true },
    { no: 7, name: "otp_email", kind: "message", T: CheckOTP, opt: true },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.CheckUser
 */
export const CheckUser = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.CheckUser",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "search" },
    { no: 2, name: "login_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "search" },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.CheckPassword
 */
export const CheckPassword = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.CheckPassword",
  () => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.CheckWebAuthN
 */
export const CheckWebAuthN = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.CheckWebAuthN",
  () => [
    { no: 1, name: "credential_assertion_data", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.CheckIDPIntent
 */
export const CheckIDPIntent = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.CheckIDPIntent",
  () => [
    { no: 1, name: "idp_intent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "idp_intent_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.CheckTOTP
 */
export const CheckTOTP = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.CheckTOTP",
  () => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.session.v2beta.CheckOTP
 */
export const CheckOTP = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.session.v2beta.CheckOTP",
  () => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

