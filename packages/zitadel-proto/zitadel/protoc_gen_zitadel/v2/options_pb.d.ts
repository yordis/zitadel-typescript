// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/protoc_gen_zitadel/v2/options.proto (package zitadel.protoc_gen_zitadel.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  Extension,
  FieldList,
  JsonReadOptions,
  JsonValue,
  MethodOptions,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message zitadel.protoc_gen_zitadel.v2.Options
 */
export declare class Options extends Message<Options> {
  /**
   * @generated from field: zitadel.protoc_gen_zitadel.v2.AuthOption auth_option = 1;
   */
  authOption?: AuthOption;

  /**
   * @generated from field: zitadel.protoc_gen_zitadel.v2.CustomHTTPResponse http_response = 2;
   */
  httpResponse?: CustomHTTPResponse;

  constructor(data?: PartialMessage<Options>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.protoc_gen_zitadel.v2.Options";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Options;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Options;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Options;

  static equals(
    a: Options | PlainMessage<Options> | undefined,
    b: Options | PlainMessage<Options> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.protoc_gen_zitadel.v2.AuthOption
 */
export declare class AuthOption extends Message<AuthOption> {
  /**
   * @generated from field: string permission = 1;
   */
  permission: string;

  /**
   * @generated from field: string org_field = 3;
   */
  orgField: string;

  constructor(data?: PartialMessage<AuthOption>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.protoc_gen_zitadel.v2.AuthOption";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): AuthOption;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): AuthOption;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): AuthOption;

  static equals(
    a: AuthOption | PlainMessage<AuthOption> | undefined,
    b: AuthOption | PlainMessage<AuthOption> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.protoc_gen_zitadel.v2.CustomHTTPResponse
 */
export declare class CustomHTTPResponse extends Message<CustomHTTPResponse> {
  /**
   * @generated from field: int32 success_code = 1;
   */
  successCode: number;

  constructor(data?: PartialMessage<CustomHTTPResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.protoc_gen_zitadel.v2.CustomHTTPResponse";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): CustomHTTPResponse;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): CustomHTTPResponse;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): CustomHTTPResponse;

  static equals(
    a: CustomHTTPResponse | PlainMessage<CustomHTTPResponse> | undefined,
    b: CustomHTTPResponse | PlainMessage<CustomHTTPResponse> | undefined,
  ): boolean;
}

/**
 * @generated from extension: zitadel.protoc_gen_zitadel.v2.Options options = 50001;
 */
export declare const options: Extension<MethodOptions, Options>;
