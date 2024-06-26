// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/session/v2beta/session.proto (package zitadel.session.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
  Timestamp,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TimestampQueryMethod } from "../../object_pb.js";

/**
 * @generated from enum zitadel.session.v2beta.SessionFieldName
 */
export declare enum SessionFieldName {
  /**
   * @generated from enum value: SESSION_FIELD_NAME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SESSION_FIELD_NAME_CREATION_DATE = 1;
   */
  CREATION_DATE = 1,
}

/**
 * @generated from message zitadel.session.v2beta.Session
 */
export declare class Session extends Message<Session> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 2;
   */
  creationDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp change_date = 3;
   */
  changeDate?: Timestamp;

  /**
   * @generated from field: uint64 sequence = 4;
   */
  sequence: bigint;

  /**
   * @generated from field: zitadel.session.v2beta.Factors factors = 5;
   */
  factors?: Factors;

  /**
   * @generated from field: map<string, bytes> metadata = 6;
   */
  metadata: { [key: string]: Uint8Array };

  /**
   * @generated from field: zitadel.session.v2beta.UserAgent user_agent = 7;
   */
  userAgent?: UserAgent;

  /**
   * @generated from field: optional google.protobuf.Timestamp expiration_date = 8;
   */
  expirationDate?: Timestamp;

  constructor(data?: PartialMessage<Session>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.Session";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Session;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Session;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Session;

  static equals(
    a: Session | PlainMessage<Session> | undefined,
    b: Session | PlainMessage<Session> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.Factors
 */
export declare class Factors extends Message<Factors> {
  /**
   * @generated from field: zitadel.session.v2beta.UserFactor user = 1;
   */
  user?: UserFactor;

  /**
   * @generated from field: zitadel.session.v2beta.PasswordFactor password = 2;
   */
  password?: PasswordFactor;

  /**
   * @generated from field: zitadel.session.v2beta.WebAuthNFactor web_auth_n = 3;
   */
  webAuthN?: WebAuthNFactor;

  /**
   * @generated from field: zitadel.session.v2beta.IntentFactor intent = 4;
   */
  intent?: IntentFactor;

  /**
   * @generated from field: zitadel.session.v2beta.TOTPFactor totp = 5;
   */
  totp?: TOTPFactor;

  /**
   * @generated from field: zitadel.session.v2beta.OTPFactor otp_sms = 6;
   */
  otpSms?: OTPFactor;

  /**
   * @generated from field: zitadel.session.v2beta.OTPFactor otp_email = 7;
   */
  otpEmail?: OTPFactor;

  constructor(data?: PartialMessage<Factors>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.Factors";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Factors;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Factors;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Factors;

  static equals(
    a: Factors | PlainMessage<Factors> | undefined,
    b: Factors | PlainMessage<Factors> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.UserFactor
 */
export declare class UserFactor extends Message<UserFactor> {
  /**
   * @generated from field: google.protobuf.Timestamp verified_at = 1;
   */
  verifiedAt?: Timestamp;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  /**
   * @generated from field: string login_name = 3;
   */
  loginName: string;

  /**
   * @generated from field: string display_name = 4;
   */
  displayName: string;

  /**
   * @generated from field: string organization_id = 6;
   */
  organizationId: string;

  constructor(data?: PartialMessage<UserFactor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.UserFactor";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): UserFactor;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): UserFactor;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): UserFactor;

  static equals(
    a: UserFactor | PlainMessage<UserFactor> | undefined,
    b: UserFactor | PlainMessage<UserFactor> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.PasswordFactor
 */
export declare class PasswordFactor extends Message<PasswordFactor> {
  /**
   * @generated from field: google.protobuf.Timestamp verified_at = 1;
   */
  verifiedAt?: Timestamp;

  constructor(data?: PartialMessage<PasswordFactor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.PasswordFactor";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PasswordFactor;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PasswordFactor;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PasswordFactor;

  static equals(
    a: PasswordFactor | PlainMessage<PasswordFactor> | undefined,
    b: PasswordFactor | PlainMessage<PasswordFactor> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.IntentFactor
 */
export declare class IntentFactor extends Message<IntentFactor> {
  /**
   * @generated from field: google.protobuf.Timestamp verified_at = 1;
   */
  verifiedAt?: Timestamp;

  constructor(data?: PartialMessage<IntentFactor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.IntentFactor";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): IntentFactor;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): IntentFactor;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): IntentFactor;

  static equals(
    a: IntentFactor | PlainMessage<IntentFactor> | undefined,
    b: IntentFactor | PlainMessage<IntentFactor> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.WebAuthNFactor
 */
export declare class WebAuthNFactor extends Message<WebAuthNFactor> {
  /**
   * @generated from field: google.protobuf.Timestamp verified_at = 1;
   */
  verifiedAt?: Timestamp;

  /**
   * @generated from field: bool user_verified = 2;
   */
  userVerified: boolean;

  constructor(data?: PartialMessage<WebAuthNFactor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.WebAuthNFactor";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): WebAuthNFactor;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): WebAuthNFactor;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): WebAuthNFactor;

  static equals(
    a: WebAuthNFactor | PlainMessage<WebAuthNFactor> | undefined,
    b: WebAuthNFactor | PlainMessage<WebAuthNFactor> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.TOTPFactor
 */
export declare class TOTPFactor extends Message<TOTPFactor> {
  /**
   * @generated from field: google.protobuf.Timestamp verified_at = 1;
   */
  verifiedAt?: Timestamp;

  constructor(data?: PartialMessage<TOTPFactor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.TOTPFactor";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): TOTPFactor;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): TOTPFactor;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): TOTPFactor;

  static equals(
    a: TOTPFactor | PlainMessage<TOTPFactor> | undefined,
    b: TOTPFactor | PlainMessage<TOTPFactor> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.OTPFactor
 */
export declare class OTPFactor extends Message<OTPFactor> {
  /**
   * @generated from field: google.protobuf.Timestamp verified_at = 1;
   */
  verifiedAt?: Timestamp;

  constructor(data?: PartialMessage<OTPFactor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.OTPFactor";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): OTPFactor;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): OTPFactor;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): OTPFactor;

  static equals(
    a: OTPFactor | PlainMessage<OTPFactor> | undefined,
    b: OTPFactor | PlainMessage<OTPFactor> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.SearchQuery
 */
export declare class SearchQuery extends Message<SearchQuery> {
  /**
   * @generated from oneof zitadel.session.v2beta.SearchQuery.query
   */
  query:
    | {
        /**
         * @generated from field: zitadel.session.v2beta.IDsQuery ids_query = 1;
         */
        value: IDsQuery;
        case: "idsQuery";
      }
    | {
        /**
         * @generated from field: zitadel.session.v2beta.UserIDQuery user_id_query = 2;
         */
        value: UserIDQuery;
        case: "userIdQuery";
      }
    | {
        /**
         * @generated from field: zitadel.session.v2beta.CreationDateQuery creation_date_query = 3;
         */
        value: CreationDateQuery;
        case: "creationDateQuery";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SearchQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.SearchQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SearchQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SearchQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SearchQuery;

  static equals(
    a: SearchQuery | PlainMessage<SearchQuery> | undefined,
    b: SearchQuery | PlainMessage<SearchQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.IDsQuery
 */
export declare class IDsQuery extends Message<IDsQuery> {
  /**
   * @generated from field: repeated string ids = 1;
   */
  ids: string[];

  constructor(data?: PartialMessage<IDsQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.IDsQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): IDsQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): IDsQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): IDsQuery;

  static equals(
    a: IDsQuery | PlainMessage<IDsQuery> | undefined,
    b: IDsQuery | PlainMessage<IDsQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.UserIDQuery
 */
export declare class UserIDQuery extends Message<UserIDQuery> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<UserIDQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.UserIDQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): UserIDQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): UserIDQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): UserIDQuery;

  static equals(
    a: UserIDQuery | PlainMessage<UserIDQuery> | undefined,
    b: UserIDQuery | PlainMessage<UserIDQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.CreationDateQuery
 */
export declare class CreationDateQuery extends Message<CreationDateQuery> {
  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 1;
   */
  creationDate?: Timestamp;

  /**
   * @generated from field: zitadel.v1.TimestampQueryMethod method = 2;
   */
  method: TimestampQueryMethod;

  constructor(data?: PartialMessage<CreationDateQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.CreationDateQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): CreationDateQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): CreationDateQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): CreationDateQuery;

  static equals(
    a: CreationDateQuery | PlainMessage<CreationDateQuery> | undefined,
    b: CreationDateQuery | PlainMessage<CreationDateQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.UserAgent
 */
export declare class UserAgent extends Message<UserAgent> {
  /**
   * @generated from field: optional string fingerprint_id = 1;
   */
  fingerprintId?: string;

  /**
   * @generated from field: optional string ip = 2;
   */
  ip?: string;

  /**
   * @generated from field: optional string description = 3;
   */
  description?: string;

  /**
   * @generated from field: map<string, zitadel.session.v2beta.UserAgent.HeaderValues> header = 4;
   */
  header: { [key: string]: UserAgent_HeaderValues };

  constructor(data?: PartialMessage<UserAgent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.UserAgent";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): UserAgent;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): UserAgent;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): UserAgent;

  static equals(
    a: UserAgent | PlainMessage<UserAgent> | undefined,
    b: UserAgent | PlainMessage<UserAgent> | undefined,
  ): boolean;
}

/**
 * A header may have multiple values.
 * In Go, headers are defined
 * as map[string][]string, but protobuf
 * doesn't allow this scheme.
 *
 * @generated from message zitadel.session.v2beta.UserAgent.HeaderValues
 */
export declare class UserAgent_HeaderValues extends Message<UserAgent_HeaderValues> {
  /**
   * @generated from field: repeated string values = 1;
   */
  values: string[];

  constructor(data?: PartialMessage<UserAgent_HeaderValues>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.UserAgent.HeaderValues";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): UserAgent_HeaderValues;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): UserAgent_HeaderValues;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): UserAgent_HeaderValues;

  static equals(
    a:
      | UserAgent_HeaderValues
      | PlainMessage<UserAgent_HeaderValues>
      | undefined,
    b:
      | UserAgent_HeaderValues
      | PlainMessage<UserAgent_HeaderValues>
      | undefined,
  ): boolean;
}
