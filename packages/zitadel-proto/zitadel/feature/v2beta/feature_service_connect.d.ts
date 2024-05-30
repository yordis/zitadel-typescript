// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/feature/v2beta/feature_service.proto (package zitadel.feature.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  GetSystemFeaturesRequest,
  GetSystemFeaturesResponse,
  ResetSystemFeaturesRequest,
  ResetSystemFeaturesResponse,
  SetSystemFeaturesRequest,
  SetSystemFeaturesResponse,
} from "./system_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import {
  GetInstanceFeaturesRequest,
  GetInstanceFeaturesResponse,
  ResetInstanceFeaturesRequest,
  ResetInstanceFeaturesResponse,
  SetInstanceFeaturesRequest,
  SetInstanceFeaturesResponse,
} from "./instance_pb.js";
import {
  GetOrganizationFeaturesRequest,
  GetOrganizationFeaturesResponse,
  ResetOrganizationFeaturesRequest,
  ResetOrganizationFeaturesResponse,
  SetOrganizationFeaturesRequest,
  SetOrganizationFeaturesResponse,
} from "./organization_pb.js";
import {
  GetUserFeaturesRequest,
  GetUserFeaturesResponse,
  ResetUserFeaturesRequest,
  ResetUserFeaturesResponse,
  SetUserFeatureRequest,
  SetUserFeaturesResponse,
} from "./user_pb.js";

/**
 * FeatureService is intended to manage features for ZITADEL.
 *
 * Feature settings that are available on multiple "levels", such as instance and organization.
 * The higher level (instance) acts as a default for the lower level (organization).
 * When a feature is set on multiple levels, the lower level takes precedence.
 *
 * Features can be experimental where ZITADEL will assume a sane default, such as disabled.
 * When over time confidence in such a feature grows, ZITADEL can default to enabling the feature.
 * As a final step we might choose to always enable a feature and remove the setting from this API,
 * reserving the proto field number. Such removal is not considered a breaking change.
 * Setting a removed field will effectively result in a no-op.
 *
 * @generated from service zitadel.feature.v2beta.FeatureService
 */
export declare const FeatureService: {
  readonly typeName: "zitadel.feature.v2beta.FeatureService";
  readonly methods: {
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.SetSystemFeatures
     */
    readonly setSystemFeatures: {
      readonly name: "SetSystemFeatures";
      readonly I: typeof SetSystemFeaturesRequest;
      readonly O: typeof SetSystemFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.ResetSystemFeatures
     */
    readonly resetSystemFeatures: {
      readonly name: "ResetSystemFeatures";
      readonly I: typeof ResetSystemFeaturesRequest;
      readonly O: typeof ResetSystemFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.GetSystemFeatures
     */
    readonly getSystemFeatures: {
      readonly name: "GetSystemFeatures";
      readonly I: typeof GetSystemFeaturesRequest;
      readonly O: typeof GetSystemFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.SetInstanceFeatures
     */
    readonly setInstanceFeatures: {
      readonly name: "SetInstanceFeatures";
      readonly I: typeof SetInstanceFeaturesRequest;
      readonly O: typeof SetInstanceFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.ResetInstanceFeatures
     */
    readonly resetInstanceFeatures: {
      readonly name: "ResetInstanceFeatures";
      readonly I: typeof ResetInstanceFeaturesRequest;
      readonly O: typeof ResetInstanceFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.GetInstanceFeatures
     */
    readonly getInstanceFeatures: {
      readonly name: "GetInstanceFeatures";
      readonly I: typeof GetInstanceFeaturesRequest;
      readonly O: typeof GetInstanceFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.SetOrganizationFeatures
     */
    readonly setOrganizationFeatures: {
      readonly name: "SetOrganizationFeatures";
      readonly I: typeof SetOrganizationFeaturesRequest;
      readonly O: typeof SetOrganizationFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.ResetOrganizationFeatures
     */
    readonly resetOrganizationFeatures: {
      readonly name: "ResetOrganizationFeatures";
      readonly I: typeof ResetOrganizationFeaturesRequest;
      readonly O: typeof ResetOrganizationFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.GetOrganizationFeatures
     */
    readonly getOrganizationFeatures: {
      readonly name: "GetOrganizationFeatures";
      readonly I: typeof GetOrganizationFeaturesRequest;
      readonly O: typeof GetOrganizationFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.SetUserFeatures
     */
    readonly setUserFeatures: {
      readonly name: "SetUserFeatures";
      readonly I: typeof SetUserFeatureRequest;
      readonly O: typeof SetUserFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.ResetUserFeatures
     */
    readonly resetUserFeatures: {
      readonly name: "ResetUserFeatures";
      readonly I: typeof ResetUserFeaturesRequest;
      readonly O: typeof ResetUserFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * @generated from rpc zitadel.feature.v2beta.FeatureService.GetUserFeatures
     */
    readonly getUserFeatures: {
      readonly name: "GetUserFeatures";
      readonly I: typeof GetUserFeaturesRequest;
      readonly O: typeof GetUserFeaturesResponse;
      readonly kind: MethodKind.Unary;
    };
  };
};
