// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/feature/v2beta/system.proto (package zitadel.feature.v2beta, syntax proto3)
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
import type {
  FeatureFlag,
  ImprovedPerformance,
  ImprovedPerformanceFeatureFlag,
} from "./feature_pb.js";
import type { Details } from "../../object/v2beta/object_pb.js";

/**
 * @generated from message zitadel.feature.v2beta.SetSystemFeaturesRequest
 */
export declare class SetSystemFeaturesRequest extends Message<SetSystemFeaturesRequest> {
  /**
   * @generated from field: optional bool login_default_org = 1;
   */
  loginDefaultOrg?: boolean;

  /**
   * @generated from field: optional bool oidc_trigger_introspection_projections = 2;
   */
  oidcTriggerIntrospectionProjections?: boolean;

  /**
   * @generated from field: optional bool oidc_legacy_introspection = 3;
   */
  oidcLegacyIntrospection?: boolean;

  /**
   * @generated from field: optional bool user_schema = 4;
   */
  userSchema?: boolean;

  /**
   * @generated from field: optional bool oidc_token_exchange = 5;
   */
  oidcTokenExchange?: boolean;

  /**
   * @generated from field: optional bool actions = 6;
   */
  actions?: boolean;

  /**
   * @generated from field: repeated zitadel.feature.v2beta.ImprovedPerformance improved_performance = 7;
   */
  improvedPerformance: ImprovedPerformance[];

  constructor(data?: PartialMessage<SetSystemFeaturesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.SetSystemFeaturesRequest";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SetSystemFeaturesRequest;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SetSystemFeaturesRequest;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SetSystemFeaturesRequest;

  static equals(
    a:
      | SetSystemFeaturesRequest
      | PlainMessage<SetSystemFeaturesRequest>
      | undefined,
    b:
      | SetSystemFeaturesRequest
      | PlainMessage<SetSystemFeaturesRequest>
      | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.SetSystemFeaturesResponse
 */
export declare class SetSystemFeaturesResponse extends Message<SetSystemFeaturesResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<SetSystemFeaturesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.SetSystemFeaturesResponse";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SetSystemFeaturesResponse;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SetSystemFeaturesResponse;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SetSystemFeaturesResponse;

  static equals(
    a:
      | SetSystemFeaturesResponse
      | PlainMessage<SetSystemFeaturesResponse>
      | undefined,
    b:
      | SetSystemFeaturesResponse
      | PlainMessage<SetSystemFeaturesResponse>
      | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.ResetSystemFeaturesRequest
 */
export declare class ResetSystemFeaturesRequest extends Message<ResetSystemFeaturesRequest> {
  constructor(data?: PartialMessage<ResetSystemFeaturesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName =
    "zitadel.feature.v2beta.ResetSystemFeaturesRequest";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ResetSystemFeaturesRequest;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ResetSystemFeaturesRequest;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ResetSystemFeaturesRequest;

  static equals(
    a:
      | ResetSystemFeaturesRequest
      | PlainMessage<ResetSystemFeaturesRequest>
      | undefined,
    b:
      | ResetSystemFeaturesRequest
      | PlainMessage<ResetSystemFeaturesRequest>
      | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.ResetSystemFeaturesResponse
 */
export declare class ResetSystemFeaturesResponse extends Message<ResetSystemFeaturesResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<ResetSystemFeaturesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName =
    "zitadel.feature.v2beta.ResetSystemFeaturesResponse";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ResetSystemFeaturesResponse;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ResetSystemFeaturesResponse;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ResetSystemFeaturesResponse;

  static equals(
    a:
      | ResetSystemFeaturesResponse
      | PlainMessage<ResetSystemFeaturesResponse>
      | undefined,
    b:
      | ResetSystemFeaturesResponse
      | PlainMessage<ResetSystemFeaturesResponse>
      | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.GetSystemFeaturesRequest
 */
export declare class GetSystemFeaturesRequest extends Message<GetSystemFeaturesRequest> {
  constructor(data?: PartialMessage<GetSystemFeaturesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.GetSystemFeaturesRequest";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): GetSystemFeaturesRequest;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): GetSystemFeaturesRequest;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): GetSystemFeaturesRequest;

  static equals(
    a:
      | GetSystemFeaturesRequest
      | PlainMessage<GetSystemFeaturesRequest>
      | undefined,
    b:
      | GetSystemFeaturesRequest
      | PlainMessage<GetSystemFeaturesRequest>
      | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.GetSystemFeaturesResponse
 */
export declare class GetSystemFeaturesResponse extends Message<GetSystemFeaturesResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag login_default_org = 2;
   */
  loginDefaultOrg?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag oidc_trigger_introspection_projections = 3;
   */
  oidcTriggerIntrospectionProjections?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag oidc_legacy_introspection = 4;
   */
  oidcLegacyIntrospection?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag user_schema = 5;
   */
  userSchema?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag oidc_token_exchange = 6;
   */
  oidcTokenExchange?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag actions = 7;
   */
  actions?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.ImprovedPerformanceFeatureFlag improved_performance = 8;
   */
  improvedPerformance?: ImprovedPerformanceFeatureFlag;

  constructor(data?: PartialMessage<GetSystemFeaturesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.GetSystemFeaturesResponse";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): GetSystemFeaturesResponse;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): GetSystemFeaturesResponse;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): GetSystemFeaturesResponse;

  static equals(
    a:
      | GetSystemFeaturesResponse
      | PlainMessage<GetSystemFeaturesResponse>
      | undefined,
    b:
      | GetSystemFeaturesResponse
      | PlainMessage<GetSystemFeaturesResponse>
      | undefined,
  ): boolean;
}
