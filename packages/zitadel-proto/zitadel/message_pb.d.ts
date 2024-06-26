// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/message.proto (package zitadel.v1, syntax proto3)
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

/**
 * @generated from message zitadel.v1.ErrorDetail
 */
export declare class ErrorDetail extends Message<ErrorDetail> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string message = 2;
   */
  message: string;

  constructor(data?: PartialMessage<ErrorDetail>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.v1.ErrorDetail";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ErrorDetail;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ErrorDetail;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ErrorDetail;

  static equals(
    a: ErrorDetail | PlainMessage<ErrorDetail> | undefined,
    b: ErrorDetail | PlainMessage<ErrorDetail> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.v1.LocalizedMessage
 */
export declare class LocalizedMessage extends Message<LocalizedMessage> {
  /**
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from field: string localized_message = 2;
   */
  localizedMessage: string;

  constructor(data?: PartialMessage<LocalizedMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.v1.LocalizedMessage";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): LocalizedMessage;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): LocalizedMessage;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): LocalizedMessage;

  static equals(
    a: LocalizedMessage | PlainMessage<LocalizedMessage> | undefined,
    b: LocalizedMessage | PlainMessage<LocalizedMessage> | undefined,
  ): boolean;
}
