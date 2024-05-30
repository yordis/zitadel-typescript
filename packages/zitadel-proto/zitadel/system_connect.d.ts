// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/system.proto (package zitadel.system.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  AddDomainRequest,
  AddDomainResponse,
  AddInstanceRequest,
  AddInstanceResponse,
  AddQuotaRequest,
  AddQuotaResponse,
  BulkSetLimitsRequest,
  BulkSetLimitsResponse,
  ClearViewRequest,
  ClearViewResponse,
  CreateInstanceRequest,
  CreateInstanceResponse,
  ExistsDomainRequest,
  ExistsDomainResponse,
  GetInstanceRequest,
  GetInstanceResponse,
  HealthzRequest,
  HealthzResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListFailedEventsRequest,
  ListFailedEventsResponse,
  ListIAMMembersRequest,
  ListIAMMembersResponse,
  ListInstancesRequest,
  ListInstancesResponse,
  ListViewsRequest,
  ListViewsResponse,
  RemoveDomainRequest,
  RemoveDomainResponse,
  RemoveFailedEventRequest,
  RemoveFailedEventResponse,
  RemoveInstanceRequest,
  RemoveInstanceResponse,
  RemoveQuotaRequest,
  RemoveQuotaResponse,
  ResetLimitsRequest,
  ResetLimitsResponse,
  SetInstanceFeatureRequest,
  SetInstanceFeatureResponse,
  SetLimitsRequest,
  SetLimitsResponse,
  SetPrimaryDomainRequest,
  SetPrimaryDomainResponse,
  SetQuotaRequest,
  SetQuotaResponse,
  UpdateInstanceRequest,
  UpdateInstanceResponse,
} from "./system_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.system.v1.SystemService
 */
export declare const SystemService: {
  readonly typeName: "zitadel.system.v1.SystemService";
  readonly methods: {
    /**
     * Indicates if ZITADEL is running.
     * It respondes as soon as ZITADEL started
     *
     * @generated from rpc zitadel.system.v1.SystemService.Healthz
     */
    readonly healthz: {
      readonly name: "Healthz";
      readonly I: typeof HealthzRequest;
      readonly O: typeof HealthzResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Returns a list of ZITADEL instances
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListInstances
     */
    readonly listInstances: {
      readonly name: "ListInstances";
      readonly I: typeof ListInstancesRequest;
      readonly O: typeof ListInstancesResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Returns the detail of an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.GetInstance
     */
    readonly getInstance: {
      readonly name: "GetInstance";
      readonly I: typeof GetInstanceRequest;
      readonly O: typeof GetInstanceResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Deprecated: Use CreateInstance instead
     * Creates a new instance with all needed setup data
     * This might take some time
     *
     * @generated from rpc zitadel.system.v1.SystemService.AddInstance
     */
    readonly addInstance: {
      readonly name: "AddInstance";
      readonly I: typeof AddInstanceRequest;
      readonly O: typeof AddInstanceResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Updates name of an existing instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.UpdateInstance
     */
    readonly updateInstance: {
      readonly name: "UpdateInstance";
      readonly I: typeof UpdateInstanceRequest;
      readonly O: typeof UpdateInstanceResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Creates a new instance with all needed setup data
     * This might take some time
     *
     * @generated from rpc zitadel.system.v1.SystemService.CreateInstance
     */
    readonly createInstance: {
      readonly name: "CreateInstance";
      readonly I: typeof CreateInstanceRequest;
      readonly O: typeof CreateInstanceResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Removes an instance
     * This might take some time
     *
     * @generated from rpc zitadel.system.v1.SystemService.RemoveInstance
     */
    readonly removeInstance: {
      readonly name: "RemoveInstance";
      readonly I: typeof RemoveInstanceRequest;
      readonly O: typeof RemoveInstanceResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Returns all instance members matching the request
     * all queries need to match (ANDed)
     * Deprecated: Use the Admin APIs ListIAMMembers instead
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListIAMMembers
     */
    readonly listIAMMembers: {
      readonly name: "ListIAMMembers";
      readonly I: typeof ListIAMMembersRequest;
      readonly O: typeof ListIAMMembersResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Checks if a domain exists
     *
     * @generated from rpc zitadel.system.v1.SystemService.ExistsDomain
     */
    readonly existsDomain: {
      readonly name: "ExistsDomain";
      readonly I: typeof ExistsDomainRequest;
      readonly O: typeof ExistsDomainResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Returns the custom domains of an instance
     * Checks if a domain exists
     * Deprecated: Use the Admin APIs ListInstanceDomains on the admin API instead
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListDomains
     */
    readonly listDomains: {
      readonly name: "ListDomains";
      readonly I: typeof ListDomainsRequest;
      readonly O: typeof ListDomainsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Adds a domain to an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.AddDomain
     */
    readonly addDomain: {
      readonly name: "AddDomain";
      readonly I: typeof AddDomainRequest;
      readonly O: typeof AddDomainResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Removes the domain of an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.RemoveDomain
     */
    readonly removeDomain: {
      readonly name: "RemoveDomain";
      readonly I: typeof RemoveDomainRequest;
      readonly O: typeof RemoveDomainResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Sets the primary domain of an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.SetPrimaryDomain
     */
    readonly setPrimaryDomain: {
      readonly name: "SetPrimaryDomain";
      readonly I: typeof SetPrimaryDomainRequest;
      readonly O: typeof SetPrimaryDomainResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Returns all stored read models of ZITADEL
     * views are used for search optimisation and optimise request latencies
     * they represent the delta of the event happend on the objects
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListViews
     */
    readonly listViews: {
      readonly name: "ListViews";
      readonly I: typeof ListViewsRequest;
      readonly O: typeof ListViewsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Truncates the delta of the change stream
     * be carefull with this function because ZITADEL has to
     * recompute the deltas after they got cleared.
     * Search requests will return wrong results until all deltas are recomputed
     *
     * @generated from rpc zitadel.system.v1.SystemService.ClearView
     */
    readonly clearView: {
      readonly name: "ClearView";
      readonly I: typeof ClearViewRequest;
      readonly O: typeof ClearViewResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Returns event descriptions which cannot be processed.
     * It's possible that some events need some retries.
     * For example if the SMTP-API wasn't able to send an email at the first time
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListFailedEvents
     */
    readonly listFailedEvents: {
      readonly name: "ListFailedEvents";
      readonly I: typeof ListFailedEventsRequest;
      readonly O: typeof ListFailedEventsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Deletes the event from failed events view.
     * the event is not removed from the change stream
     * This call is usefull if the system was able to process the event later.
     * e.g. if the second try of sending an email was successful. the first try produced a
     * failed event. You can find out if it worked on the `failure_count`
     *
     * @generated from rpc zitadel.system.v1.SystemService.RemoveFailedEvent
     */
    readonly removeFailedEvent: {
      readonly name: "RemoveFailedEvent";
      readonly I: typeof RemoveFailedEventRequest;
      readonly O: typeof RemoveFailedEventResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Creates a new quota
     * Returns an error if the quota already exists for the specified unit
     * Deprecated: use SetQuota instead
     *
     * @generated from rpc zitadel.system.v1.SystemService.AddQuota
     */
    readonly addQuota: {
      readonly name: "AddQuota";
      readonly I: typeof AddQuotaRequest;
      readonly O: typeof AddQuotaResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Sets quota configuration properties
     * Creates a new quota if it doesn't exist for the specified unit
     *
     * @generated from rpc zitadel.system.v1.SystemService.SetQuota
     */
    readonly setQuota: {
      readonly name: "SetQuota";
      readonly I: typeof SetQuotaRequest;
      readonly O: typeof SetQuotaResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Removes a quota
     *
     * @generated from rpc zitadel.system.v1.SystemService.RemoveQuota
     */
    readonly removeQuota: {
      readonly name: "RemoveQuota";
      readonly I: typeof RemoveQuotaRequest;
      readonly O: typeof RemoveQuotaResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Set a feature flag on an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.SetInstanceFeature
     */
    readonly setInstanceFeature: {
      readonly name: "SetInstanceFeature";
      readonly I: typeof SetInstanceFeatureRequest;
      readonly O: typeof SetInstanceFeatureResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Sets instance level limits
     *
     * @generated from rpc zitadel.system.v1.SystemService.SetLimits
     */
    readonly setLimits: {
      readonly name: "SetLimits";
      readonly I: typeof SetLimitsRequest;
      readonly O: typeof SetLimitsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Sets many instance level limits
     *
     * @generated from rpc zitadel.system.v1.SystemService.BulkSetLimits
     */
    readonly bulkSetLimits: {
      readonly name: "BulkSetLimits";
      readonly I: typeof BulkSetLimitsRequest;
      readonly O: typeof BulkSetLimitsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Resets instance level limits
     *
     * @generated from rpc zitadel.system.v1.SystemService.ResetLimits
     */
    readonly resetLimits: {
      readonly name: "ResetLimits";
      readonly I: typeof ResetLimitsRequest;
      readonly O: typeof ResetLimitsResponse;
      readonly kind: MethodKind.Unary;
    };
  };
};
