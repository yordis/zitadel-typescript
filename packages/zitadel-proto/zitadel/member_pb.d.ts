// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/member.proto (package zitadel.member.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ObjectDetails, TextQueryMethod } from "./object_pb.js";
import type { Type } from "./user_pb.js";

/**
 * @generated from message zitadel.member.v1.Member
 */
export declare class Member extends Message<Member> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: repeated string roles = 3;
   */
  roles: string[];

  /**
   * @generated from field: string preferred_login_name = 4;
   */
  preferredLoginName: string;

  /**
   * @generated from field: string email = 5;
   */
  email: string;

  /**
   * @generated from field: string first_name = 6;
   */
  firstName: string;

  /**
   * @generated from field: string last_name = 7;
   */
  lastName: string;

  /**
   * @generated from field: string display_name = 8;
   */
  displayName: string;

  /**
   * @generated from field: string avatar_url = 9;
   */
  avatarUrl: string;

  /**
   * @generated from field: zitadel.user.v1.Type user_type = 10;
   */
  userType: Type;

  constructor(data?: PartialMessage<Member>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.member.v1.Member";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Member;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Member;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Member;

  static equals(
    a: Member | PlainMessage<Member> | undefined,
    b: Member | PlainMessage<Member> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.member.v1.SearchQuery
 */
export declare class SearchQuery extends Message<SearchQuery> {
  /**
   * @generated from oneof zitadel.member.v1.SearchQuery.query
   */
  query:
    | {
        /**
         * @generated from field: zitadel.member.v1.FirstNameQuery first_name_query = 1;
         */
        value: FirstNameQuery;
        case: "firstNameQuery";
      }
    | {
        /**
         * @generated from field: zitadel.member.v1.LastNameQuery last_name_query = 2;
         */
        value: LastNameQuery;
        case: "lastNameQuery";
      }
    | {
        /**
         * @generated from field: zitadel.member.v1.EmailQuery email_query = 3;
         */
        value: EmailQuery;
        case: "emailQuery";
      }
    | {
        /**
         * @generated from field: zitadel.member.v1.UserIDQuery user_id_query = 4;
         */
        value: UserIDQuery;
        case: "userIdQuery";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SearchQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.member.v1.SearchQuery";
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
 * @generated from message zitadel.member.v1.FirstNameQuery
 */
export declare class FirstNameQuery extends Message<FirstNameQuery> {
  /**
   * @generated from field: string first_name = 1;
   */
  firstName: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;

  constructor(data?: PartialMessage<FirstNameQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.member.v1.FirstNameQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): FirstNameQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): FirstNameQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): FirstNameQuery;

  static equals(
    a: FirstNameQuery | PlainMessage<FirstNameQuery> | undefined,
    b: FirstNameQuery | PlainMessage<FirstNameQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.member.v1.LastNameQuery
 */
export declare class LastNameQuery extends Message<LastNameQuery> {
  /**
   * @generated from field: string last_name = 1;
   */
  lastName: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;

  constructor(data?: PartialMessage<LastNameQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.member.v1.LastNameQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): LastNameQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): LastNameQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): LastNameQuery;

  static equals(
    a: LastNameQuery | PlainMessage<LastNameQuery> | undefined,
    b: LastNameQuery | PlainMessage<LastNameQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.member.v1.EmailQuery
 */
export declare class EmailQuery extends Message<EmailQuery> {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;

  constructor(data?: PartialMessage<EmailQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.member.v1.EmailQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EmailQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EmailQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EmailQuery;

  static equals(
    a: EmailQuery | PlainMessage<EmailQuery> | undefined,
    b: EmailQuery | PlainMessage<EmailQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.member.v1.UserIDQuery
 */
export declare class UserIDQuery extends Message<UserIDQuery> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<UserIDQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.member.v1.UserIDQuery";
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
