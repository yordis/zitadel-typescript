// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/action/v3alpha/query.proto (package zitadel.action.v3alpha, syntax proto3)
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
import type { Condition } from "./execution_pb.js";
import type { TextQueryMethod } from "../../object/v2beta/object_pb.js";

/**
 * @generated from enum zitadel.action.v3alpha.ExecutionType
 */
export declare enum ExecutionType {
  /**
   * @generated from enum value: EXECUTION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: EXECUTION_TYPE_REQUEST = 1;
   */
  REQUEST = 1,

  /**
   * @generated from enum value: EXECUTION_TYPE_RESPONSE = 2;
   */
  RESPONSE = 2,

  /**
   * @generated from enum value: EXECUTION_TYPE_EVENT = 3;
   */
  EVENT = 3,

  /**
   * @generated from enum value: EXECUTION_TYPE_FUNCTION = 4;
   */
  FUNCTION = 4,
}

/**
 * @generated from enum zitadel.action.v3alpha.TargetFieldName
 */
export declare enum TargetFieldName {
  /**
   * @generated from enum value: FIELD_NAME_UNSPECIFIED = 0;
   */
  FIELD_NAME_UNSPECIFIED = 0,

  /**
   * @generated from enum value: FIELD_NAME_ID = 1;
   */
  FIELD_NAME_ID = 1,

  /**
   * @generated from enum value: FIELD_NAME_CREATION_DATE = 2;
   */
  FIELD_NAME_CREATION_DATE = 2,

  /**
   * @generated from enum value: FIELD_NAME_CHANGE_DATE = 3;
   */
  FIELD_NAME_CHANGE_DATE = 3,

  /**
   * @generated from enum value: FIELD_NAME_NAME = 4;
   */
  FIELD_NAME_NAME = 4,

  /**
   * @generated from enum value: FIELD_NAME_TARGET_TYPE = 5;
   */
  FIELD_NAME_TARGET_TYPE = 5,

  /**
   * @generated from enum value: FIELD_NAME_URL = 6;
   */
  FIELD_NAME_URL = 6,

  /**
   * @generated from enum value: FIELD_NAME_TIMEOUT = 7;
   */
  FIELD_NAME_TIMEOUT = 7,

  /**
   * @generated from enum value: FIELD_NAME_ASYNC = 8;
   */
  FIELD_NAME_ASYNC = 8,

  /**
   * @generated from enum value: FIELD_NAME_INTERRUPT_ON_ERROR = 9;
   */
  FIELD_NAME_INTERRUPT_ON_ERROR = 9,
}

/**
 * @generated from message zitadel.action.v3alpha.SearchQuery
 */
export declare class SearchQuery extends Message<SearchQuery> {
  /**
   * @generated from oneof zitadel.action.v3alpha.SearchQuery.query
   */
  query:
    | {
        /**
         * @generated from field: zitadel.action.v3alpha.InConditionsQuery in_conditions_query = 1;
         */
        value: InConditionsQuery;
        case: "inConditionsQuery";
      }
    | {
        /**
         * @generated from field: zitadel.action.v3alpha.ExecutionTypeQuery execution_type_query = 2;
         */
        value: ExecutionTypeQuery;
        case: "executionTypeQuery";
      }
    | {
        /**
         * @generated from field: zitadel.action.v3alpha.TargetQuery target_query = 3;
         */
        value: TargetQuery;
        case: "targetQuery";
      }
    | {
        /**
         * @generated from field: zitadel.action.v3alpha.IncludeQuery include_query = 4;
         */
        value: IncludeQuery;
        case: "includeQuery";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SearchQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.SearchQuery";
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
 * @generated from message zitadel.action.v3alpha.InConditionsQuery
 */
export declare class InConditionsQuery extends Message<InConditionsQuery> {
  /**
   * Defines the conditions to query for.
   *
   * @generated from field: repeated zitadel.action.v3alpha.Condition conditions = 1;
   */
  conditions: Condition[];

  constructor(data?: PartialMessage<InConditionsQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.InConditionsQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): InConditionsQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): InConditionsQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): InConditionsQuery;

  static equals(
    a: InConditionsQuery | PlainMessage<InConditionsQuery> | undefined,
    b: InConditionsQuery | PlainMessage<InConditionsQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ExecutionTypeQuery
 */
export declare class ExecutionTypeQuery extends Message<ExecutionTypeQuery> {
  /**
   * Defines the type to query for.
   *
   * @generated from field: zitadel.action.v3alpha.ExecutionType execution_type = 1;
   */
  executionType: ExecutionType;

  constructor(data?: PartialMessage<ExecutionTypeQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ExecutionTypeQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ExecutionTypeQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ExecutionTypeQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ExecutionTypeQuery;

  static equals(
    a: ExecutionTypeQuery | PlainMessage<ExecutionTypeQuery> | undefined,
    b: ExecutionTypeQuery | PlainMessage<ExecutionTypeQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.TargetQuery
 */
export declare class TargetQuery extends Message<TargetQuery> {
  /**
   * Defines the id to query for.
   *
   * @generated from field: string target_id = 1;
   */
  targetId: string;

  constructor(data?: PartialMessage<TargetQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.TargetQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): TargetQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): TargetQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): TargetQuery;

  static equals(
    a: TargetQuery | PlainMessage<TargetQuery> | undefined,
    b: TargetQuery | PlainMessage<TargetQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.IncludeQuery
 */
export declare class IncludeQuery extends Message<IncludeQuery> {
  /**
   * Defines the include to query for.
   *
   * @generated from field: zitadel.action.v3alpha.Condition include = 1;
   */
  include?: Condition;

  constructor(data?: PartialMessage<IncludeQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.IncludeQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): IncludeQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): IncludeQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): IncludeQuery;

  static equals(
    a: IncludeQuery | PlainMessage<IncludeQuery> | undefined,
    b: IncludeQuery | PlainMessage<IncludeQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.TargetSearchQuery
 */
export declare class TargetSearchQuery extends Message<TargetSearchQuery> {
  /**
   * @generated from oneof zitadel.action.v3alpha.TargetSearchQuery.query
   */
  query:
    | {
        /**
         * @generated from field: zitadel.action.v3alpha.TargetNameQuery target_name_query = 1;
         */
        value: TargetNameQuery;
        case: "targetNameQuery";
      }
    | {
        /**
         * @generated from field: zitadel.action.v3alpha.InTargetIDsQuery in_target_ids_query = 2;
         */
        value: InTargetIDsQuery;
        case: "inTargetIdsQuery";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<TargetSearchQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.TargetSearchQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): TargetSearchQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): TargetSearchQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): TargetSearchQuery;

  static equals(
    a: TargetSearchQuery | PlainMessage<TargetSearchQuery> | undefined,
    b: TargetSearchQuery | PlainMessage<TargetSearchQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.TargetNameQuery
 */
export declare class TargetNameQuery extends Message<TargetNameQuery> {
  /**
   * Defines the name of the target to query for.
   *
   * @generated from field: string target_name = 1;
   */
  targetName: string;

  /**
   * Defines which text comparison method used for the name query.
   *
   * @generated from field: zitadel.object.v2beta.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;

  constructor(data?: PartialMessage<TargetNameQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.TargetNameQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): TargetNameQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): TargetNameQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): TargetNameQuery;

  static equals(
    a: TargetNameQuery | PlainMessage<TargetNameQuery> | undefined,
    b: TargetNameQuery | PlainMessage<TargetNameQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.InTargetIDsQuery
 */
export declare class InTargetIDsQuery extends Message<InTargetIDsQuery> {
  /**
   * Defines the ids to query for.
   *
   * @generated from field: repeated string target_ids = 1;
   */
  targetIds: string[];

  constructor(data?: PartialMessage<InTargetIDsQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.InTargetIDsQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): InTargetIDsQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): InTargetIDsQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): InTargetIDsQuery;

  static equals(
    a: InTargetIDsQuery | PlainMessage<InTargetIDsQuery> | undefined,
    b: InTargetIDsQuery | PlainMessage<InTargetIDsQuery> | undefined,
  ): boolean;
}
