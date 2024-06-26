// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/event.proto (package zitadel.event.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct, Timestamp } from "@bufbuild/protobuf";
import { LocalizedMessage } from "./message_pb.js";

/**
 * @generated from message zitadel.event.v1.Event
 */
export const Event = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.event.v1.Event",
  () => [
    { no: 1, name: "editor", kind: "message", T: Editor },
    { no: 2, name: "aggregate", kind: "message", T: Aggregate },
    { no: 3, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "creation_date", kind: "message", T: Timestamp },
    { no: 5, name: "payload", kind: "message", T: Struct },
    { no: 6, name: "type", kind: "message", T: EventType },
  ],
);

/**
 * @generated from message zitadel.event.v1.Editor
 */
export const Editor = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.event.v1.Editor",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.event.v1.Aggregate
 */
export const Aggregate = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.event.v1.Aggregate",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "message", T: AggregateType },
    { no: 3, name: "resource_owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.event.v1.EventType
 */
export const EventType = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.event.v1.EventType",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "localized", kind: "message", T: LocalizedMessage },
  ],
);

/**
 * @generated from message zitadel.event.v1.AggregateType
 */
export const AggregateType = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.event.v1.AggregateType",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "localized", kind: "message", T: LocalizedMessage },
  ],
);

