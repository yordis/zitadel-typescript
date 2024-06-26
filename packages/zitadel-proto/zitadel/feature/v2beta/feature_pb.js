// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/feature/v2beta/feature.proto (package zitadel.feature.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.feature.v2beta.Source
 */
export const Source = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.feature.v2beta.Source",
  [
    {no: 0, name: "SOURCE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 2, name: "SOURCE_SYSTEM", localName: "SYSTEM"},
    {no: 3, name: "SOURCE_INSTANCE", localName: "INSTANCE"},
    {no: 4, name: "SOURCE_ORGANIZATION", localName: "ORGANIZATION"},
    {no: 5, name: "SOURCE_PROJECT", localName: "PROJECT"},
    {no: 6, name: "SOURCE_APP", localName: "APP"},
    {no: 7, name: "SOURCE_USER", localName: "USER"},
  ],
);

/**
 * @generated from enum zitadel.feature.v2beta.ImprovedPerformance
 */
export const ImprovedPerformance = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.feature.v2beta.ImprovedPerformance",
  [
    {no: 0, name: "IMPROVED_PERFORMANCE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "IMPROVED_PERFORMANCE_ORG_BY_ID", localName: "ORG_BY_ID"},
  ],
);

/**
 * FeatureFlag is a simple boolean Feature setting, without further payload.
 *
 * @generated from message zitadel.feature.v2beta.FeatureFlag
 */
export const FeatureFlag = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.FeatureFlag",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "source", kind: "enum", T: proto3.getEnumType(Source) },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.ImprovedPerformanceFeatureFlag
 */
export const ImprovedPerformanceFeatureFlag = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.ImprovedPerformanceFeatureFlag",
  () => [
    { no: 1, name: "execution_paths", kind: "enum", T: proto3.getEnumType(ImprovedPerformance), repeated: true },
    { no: 2, name: "source", kind: "enum", T: proto3.getEnumType(Source) },
  ],
);

