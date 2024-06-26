// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/metadata.proto (package zitadel.metadata.v1, syntax proto3)
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

/**
 * @generated from message zitadel.metadata.v1.Metadata
 */
export declare class Metadata extends Message<Metadata> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: string key = 2;
   */
  key: string;

  /**
   * @generated from field: bytes value = 3;
   */
  value: Uint8Array;

  constructor(data?: PartialMessage<Metadata>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.metadata.v1.Metadata";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Metadata;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Metadata;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Metadata;

  static equals(
    a: Metadata | PlainMessage<Metadata> | undefined,
    b: Metadata | PlainMessage<Metadata> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.metadata.v1.MetadataQuery
 */
export declare class MetadataQuery extends Message<MetadataQuery> {
  /**
   * @generated from oneof zitadel.metadata.v1.MetadataQuery.query
   */
  query:
    | {
        /**
         * @generated from field: zitadel.metadata.v1.MetadataKeyQuery key_query = 1;
         */
        value: MetadataKeyQuery;
        case: "keyQuery";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<MetadataQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.metadata.v1.MetadataQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MetadataQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MetadataQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MetadataQuery;

  static equals(
    a: MetadataQuery | PlainMessage<MetadataQuery> | undefined,
    b: MetadataQuery | PlainMessage<MetadataQuery> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.metadata.v1.MetadataKeyQuery
 */
export declare class MetadataKeyQuery extends Message<MetadataKeyQuery> {
  /**
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;

  constructor(data?: PartialMessage<MetadataKeyQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.metadata.v1.MetadataKeyQuery";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MetadataKeyQuery;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MetadataKeyQuery;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MetadataKeyQuery;

  static equals(
    a: MetadataKeyQuery | PlainMessage<MetadataKeyQuery> | undefined,
    b: MetadataKeyQuery | PlainMessage<MetadataKeyQuery> | undefined,
  ): boolean;
}
