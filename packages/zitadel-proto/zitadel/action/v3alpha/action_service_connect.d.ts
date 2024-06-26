// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/action/v3alpha/action_service.proto (package zitadel.action.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  CreateTargetRequest,
  CreateTargetResponse,
  DeleteExecutionRequest,
  DeleteExecutionResponse,
  DeleteTargetRequest,
  DeleteTargetResponse,
  GetTargetByIDRequest,
  GetTargetByIDResponse,
  ListExecutionFunctionsRequest,
  ListExecutionFunctionsResponse,
  ListExecutionMethodsRequest,
  ListExecutionMethodsResponse,
  ListExecutionServicesRequest,
  ListExecutionServicesResponse,
  ListExecutionsRequest,
  ListExecutionsResponse,
  ListTargetsRequest,
  ListTargetsResponse,
  SetExecutionRequest,
  SetExecutionResponse,
  UpdateTargetRequest,
  UpdateTargetResponse,
} from "./action_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.action.v3alpha.ActionService
 */
export declare const ActionService: {
  readonly typeName: "zitadel.action.v3alpha.ActionService";
  readonly methods: {
    /**
     * Create a target
     *
     * Create a new target, which can be used in executions.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.CreateTarget
     */
    readonly createTarget: {
      readonly name: "CreateTarget";
      readonly I: typeof CreateTargetRequest;
      readonly O: typeof CreateTargetResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Update a target
     *
     * Update an existing target.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.UpdateTarget
     */
    readonly updateTarget: {
      readonly name: "UpdateTarget";
      readonly I: typeof UpdateTargetRequest;
      readonly O: typeof UpdateTargetResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Delete a target
     *
     * Delete an existing target. This will remove it from any configured execution as well.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.DeleteTarget
     */
    readonly deleteTarget: {
      readonly name: "DeleteTarget";
      readonly I: typeof DeleteTargetRequest;
      readonly O: typeof DeleteTargetResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * List targets
     *
     * List all matching targets. By default, we will return all targets of your instance.
     * Make sure to include a limit and sorting for pagination.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListTargets
     */
    readonly listTargets: {
      readonly name: "ListTargets";
      readonly I: typeof ListTargetsRequest;
      readonly O: typeof ListTargetsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Target by ID
     *
     * Returns the target identified by the requested ID.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.GetTargetByID
     */
    readonly getTargetByID: {
      readonly name: "GetTargetByID";
      readonly I: typeof GetTargetByIDRequest;
      readonly O: typeof GetTargetByIDResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Set an execution
     *
     * Set an execution to call a previously defined target or include the targets of a previously defined execution.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.SetExecution
     */
    readonly setExecution: {
      readonly name: "SetExecution";
      readonly I: typeof SetExecutionRequest;
      readonly O: typeof SetExecutionResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Delete an execution
     *
     * Delete an existing execution.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.DeleteExecution
     */
    readonly deleteExecution: {
      readonly name: "DeleteExecution";
      readonly I: typeof DeleteExecutionRequest;
      readonly O: typeof DeleteExecutionResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * List executions
     *
     * List all matching executions. By default, we will return all executions of your instance.
     * Make sure to include a limit and sorting for pagination.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListExecutions
     */
    readonly listExecutions: {
      readonly name: "ListExecutions";
      readonly I: typeof ListExecutionsRequest;
      readonly O: typeof ListExecutionsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * List all available functions
     *
     * List all available functions which can be used as condition for executions.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListExecutionFunctions
     */
    readonly listExecutionFunctions: {
      readonly name: "ListExecutionFunctions";
      readonly I: typeof ListExecutionFunctionsRequest;
      readonly O: typeof ListExecutionFunctionsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * List all available methods
     *
     * List all available methods which can be used as condition for executions.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListExecutionMethods
     */
    readonly listExecutionMethods: {
      readonly name: "ListExecutionMethods";
      readonly I: typeof ListExecutionMethodsRequest;
      readonly O: typeof ListExecutionMethodsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * List all available service
     *
     * List all available services which can be used as condition for executions.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListExecutionServices
     */
    readonly listExecutionServices: {
      readonly name: "ListExecutionServices";
      readonly I: typeof ListExecutionServicesRequest;
      readonly O: typeof ListExecutionServicesResponse;
      readonly kind: MethodKind.Unary;
    };
  };
};
