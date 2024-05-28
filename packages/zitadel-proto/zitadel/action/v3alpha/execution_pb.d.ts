// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/action/v3alpha/execution.proto (package zitadel.action.v3alpha, syntax proto3)
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
import type { Details } from "../../object/v2beta/object_pb.js";

/**
 * @generated from message zitadel.action.v3alpha.Execution
 */
export declare class Execution extends Message<Execution> {
  /**
   * @generated from field: zitadel.action.v3alpha.Condition Condition = 1;
   */
  Condition?: Condition;

  /**
   * Details provide some base information (such as the last change date) of the target.
   *
   * @generated from field: zitadel.object.v2beta.Details details = 2;
   */
  details?: Details;

  /**
   * List of ordered list of targets/includes called during the execution.
   *
   * @generated from field: repeated zitadel.action.v3alpha.ExecutionTargetType targets = 3;
   */
  targets: ExecutionTargetType[];

  constructor(data?: PartialMessage<Execution>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.Execution";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Execution;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Execution;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Execution;

  static equals(
    a: Execution | PlainMessage<Execution> | undefined,
    b: Execution | PlainMessage<Execution> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ExecutionTargetType
 */
export declare class ExecutionTargetType extends Message<ExecutionTargetType> {
  /**
   * @generated from oneof zitadel.action.v3alpha.ExecutionTargetType.type
   */
  type:
    | {
        /**
         * Unique identifier of existing target to call.
         *
         * @generated from field: string target = 1;
         */
        value: string;
        case: "target";
      }
    | {
        /**
         * Unique identifier of existing execution to include targets of.
         *
         * @generated from field: zitadel.action.v3alpha.Condition include = 2;
         */
        value: Condition;
        case: "include";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ExecutionTargetType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ExecutionTargetType";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ExecutionTargetType;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ExecutionTargetType;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ExecutionTargetType;

  static equals(
    a: ExecutionTargetType | PlainMessage<ExecutionTargetType> | undefined,
    b: ExecutionTargetType | PlainMessage<ExecutionTargetType> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.Condition
 */
export declare class Condition extends Message<Condition> {
  /**
   * Condition-types under which conditions the execution should happen, only one possible.
   *
   * @generated from oneof zitadel.action.v3alpha.Condition.condition_type
   */
  conditionType:
    | {
        /**
         * Condition-type to execute if a request on the defined API point happens.
         *
         * @generated from field: zitadel.action.v3alpha.RequestExecution request = 1;
         */
        value: RequestExecution;
        case: "request";
      }
    | {
        /**
         * Condition-type to execute on response if a request on the defined API point happens.
         *
         * @generated from field: zitadel.action.v3alpha.ResponseExecution response = 2;
         */
        value: ResponseExecution;
        case: "response";
      }
    | {
        /**
         * Condition-type to execute if function is used, replaces actions v1.
         *
         * @generated from field: zitadel.action.v3alpha.FunctionExecution function = 3;
         */
        value: FunctionExecution;
        case: "function";
      }
    | {
        /**
         * Condition-type to execute if an event is created in the system.
         *
         * @generated from field: zitadel.action.v3alpha.EventExecution event = 4;
         */
        value: EventExecution;
        case: "event";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Condition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.Condition";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Condition;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Condition;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Condition;

  static equals(
    a: Condition | PlainMessage<Condition> | undefined,
    b: Condition | PlainMessage<Condition> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.RequestExecution
 */
export declare class RequestExecution extends Message<RequestExecution> {
  /**
   * Condition for the request execution, only one possible.
   *
   * @generated from oneof zitadel.action.v3alpha.RequestExecution.condition
   */
  condition:
    | {
        /**
         * GRPC-method as condition.
         *
         * @generated from field: string method = 1;
         */
        value: string;
        case: "method";
      }
    | {
        /**
         * GRPC-service as condition.
         *
         * @generated from field: string service = 2;
         */
        value: string;
        case: "service";
      }
    | {
        /**
         * All calls to any available service and endpoint as condition.
         *
         * @generated from field: bool all = 3;
         */
        value: boolean;
        case: "all";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<RequestExecution>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.RequestExecution";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): RequestExecution;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): RequestExecution;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): RequestExecution;

  static equals(
    a: RequestExecution | PlainMessage<RequestExecution> | undefined,
    b: RequestExecution | PlainMessage<RequestExecution> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ResponseExecution
 */
export declare class ResponseExecution extends Message<ResponseExecution> {
  /**
   * Condition for the response execution, only one possible.
   *
   * @generated from oneof zitadel.action.v3alpha.ResponseExecution.condition
   */
  condition:
    | {
        /**
         * GRPC-method as condition.
         *
         * @generated from field: string method = 1;
         */
        value: string;
        case: "method";
      }
    | {
        /**
         * GRPC-service as condition.
         *
         * @generated from field: string service = 2;
         */
        value: string;
        case: "service";
      }
    | {
        /**
         * All calls to any available service and endpoint as condition.
         *
         * @generated from field: bool all = 3;
         */
        value: boolean;
        case: "all";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ResponseExecution>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ResponseExecution";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ResponseExecution;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ResponseExecution;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ResponseExecution;

  static equals(
    a: ResponseExecution | PlainMessage<ResponseExecution> | undefined,
    b: ResponseExecution | PlainMessage<ResponseExecution> | undefined,
  ): boolean;
}

/**
 * Executed on the specified function
 *
 * @generated from message zitadel.action.v3alpha.FunctionExecution
 */
export declare class FunctionExecution extends Message<FunctionExecution> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<FunctionExecution>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.FunctionExecution";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): FunctionExecution;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): FunctionExecution;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): FunctionExecution;

  static equals(
    a: FunctionExecution | PlainMessage<FunctionExecution> | undefined,
    b: FunctionExecution | PlainMessage<FunctionExecution> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.EventExecution
 */
export declare class EventExecution extends Message<EventExecution> {
  /**
   * Condition for the event execution, only one possible.
   *
   * @generated from oneof zitadel.action.v3alpha.EventExecution.condition
   */
  condition:
    | {
        /**
         * Event name as condition.
         *
         * @generated from field: string event = 1;
         */
        value: string;
        case: "event";
      }
    | {
        /**
         * Event group as condition, all events under this group.
         *
         * @generated from field: string group = 2;
         */
        value: string;
        case: "group";
      }
    | {
        /**
         * all events as condition.
         *
         * @generated from field: bool all = 3;
         */
        value: boolean;
        case: "all";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<EventExecution>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.EventExecution";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EventExecution;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EventExecution;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EventExecution;

  static equals(
    a: EventExecution | PlainMessage<EventExecution> | undefined,
    b: EventExecution | PlainMessage<EventExecution> | undefined,
  ): boolean;
}