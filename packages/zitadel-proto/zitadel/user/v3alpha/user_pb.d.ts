// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/user/v3alpha/user.proto (package zitadel.user.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
  Struct,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Details } from "../../object/v2beta/object_pb.js";
import type { Authenticators } from "./authenticator_pb.js";
import type { Contact } from "./communication_pb.js";

/**
 * @generated from enum zitadel.user.v3alpha.State
 */
export declare enum State {
  /**
   * @generated from enum value: USER_STATE_UNSPECIFIED = 0;
   */
  USER_STATE_UNSPECIFIED = 0,

  /**
   * @generated from enum value: USER_STATE_ACTIVE = 1;
   */
  USER_STATE_ACTIVE = 1,

  /**
   * @generated from enum value: USER_STATE_INACTIVE = 2;
   */
  USER_STATE_INACTIVE = 2,

  /**
   * @generated from enum value: USER_STATE_DELETED = 3;
   */
  USER_STATE_DELETED = 3,

  /**
   * @generated from enum value: USER_STATE_LOCKED = 4;
   */
  USER_STATE_LOCKED = 4,
}

/**
 * @generated from message zitadel.user.v3alpha.User
 */
export declare class User extends Message<User> {
  /**
   * ID is the read-only unique identifier of the user.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * Details provide some base information (such as the last change date) of the user.
   *
   * @generated from field: zitadel.object.v2beta.Details details = 2;
   */
  details?: Details;

  /**
   * The user's authenticators. They are used to identify and authenticate the user
   * during the authentication process.
   *
   * @generated from field: zitadel.user.v3alpha.Authenticators authenticators = 3;
   */
  authenticators?: Authenticators;

  /**
   * Contact information for the user. ZITADEL will use this in case of internal notifications.
   *
   * @generated from field: zitadel.user.v3alpha.Contact contact = 4;
   */
  contact?: Contact;

  /**
   * State of the user.
   *
   * @generated from field: zitadel.user.v3alpha.State state = 5;
   */
  state: State;

  /**
   * The schema the user and it's data is based on.
   *
   * @generated from field: zitadel.user.v3alpha.Schema schema = 6;
   */
  schema?: Schema;

  /**
   * The user's data based on the provided schema.
   *
   * @generated from field: google.protobuf.Struct data = 7;
   */
  data?: Struct;

  constructor(data?: PartialMessage<User>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.User";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): User;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): User;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): User;

  static equals(
    a: User | PlainMessage<User> | undefined,
    b: User | PlainMessage<User> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.Schema
 */
export declare class Schema extends Message<Schema> {
  /**
   * The unique identifier of the user schema.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The human readable name of the user schema.
   *
   * @generated from field: string type = 2;
   */
  type: string;

  /**
   * The revision the user's data is based on of the revision.
   *
   * @generated from field: uint32 revision = 3;
   */
  revision: number;

  constructor(data?: PartialMessage<Schema>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.Schema";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Schema;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Schema;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Schema;

  static equals(
    a: Schema | PlainMessage<Schema> | undefined,
    b: Schema | PlainMessage<Schema> | undefined,
  ): boolean;
}
