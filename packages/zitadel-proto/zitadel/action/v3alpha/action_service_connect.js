// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/action/v3alpha/action_service.proto (package zitadel.action.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateTargetRequest, CreateTargetResponse, DeleteExecutionRequest, DeleteExecutionResponse, DeleteTargetRequest, DeleteTargetResponse, GetTargetByIDRequest, GetTargetByIDResponse, ListExecutionFunctionsRequest, ListExecutionFunctionsResponse, ListExecutionMethodsRequest, ListExecutionMethodsResponse, ListExecutionServicesRequest, ListExecutionServicesResponse, ListExecutionsRequest, ListExecutionsResponse, ListTargetsRequest, ListTargetsResponse, SetExecutionRequest, SetExecutionResponse, UpdateTargetRequest, UpdateTargetResponse } from "./action_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.action.v3alpha.ActionService
 */
export const ActionService = {
  typeName: "zitadel.action.v3alpha.ActionService",
  methods: {
    /**
     * Create a target
     *
     * Create a new target, which can be used in executions.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.CreateTarget
     */
    createTarget: {
      name: "CreateTarget",
      I: CreateTargetRequest,
      O: CreateTargetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update a target
     *
     * Update an existing target.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.UpdateTarget
     */
    updateTarget: {
      name: "UpdateTarget",
      I: UpdateTargetRequest,
      O: UpdateTargetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a target
     *
     * Delete an existing target. This will remove it from any configured execution as well.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.DeleteTarget
     */
    deleteTarget: {
      name: "DeleteTarget",
      I: DeleteTargetRequest,
      O: DeleteTargetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List targets
     *
     * List all matching targets. By default, we will return all targets of your instance.
     * Make sure to include a limit and sorting for pagination.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListTargets
     */
    listTargets: {
      name: "ListTargets",
      I: ListTargetsRequest,
      O: ListTargetsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Target by ID
     *
     * Returns the target identified by the requested ID.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.GetTargetByID
     */
    getTargetByID: {
      name: "GetTargetByID",
      I: GetTargetByIDRequest,
      O: GetTargetByIDResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Set an execution
     *
     * Set an execution to call a previously defined target or include the targets of a previously defined execution.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.SetExecution
     */
    setExecution: {
      name: "SetExecution",
      I: SetExecutionRequest,
      O: SetExecutionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an execution
     *
     * Delete an existing execution.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.DeleteExecution
     */
    deleteExecution: {
      name: "DeleteExecution",
      I: DeleteExecutionRequest,
      O: DeleteExecutionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List executions
     *
     * List all matching executions. By default, we will return all executions of your instance.
     * Make sure to include a limit and sorting for pagination.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListExecutions
     */
    listExecutions: {
      name: "ListExecutions",
      I: ListExecutionsRequest,
      O: ListExecutionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List all available functions
     *
     * List all available functions which can be used as condition for executions.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListExecutionFunctions
     */
    listExecutionFunctions: {
      name: "ListExecutionFunctions",
      I: ListExecutionFunctionsRequest,
      O: ListExecutionFunctionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List all available methods
     *
     * List all available methods which can be used as condition for executions.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListExecutionMethods
     */
    listExecutionMethods: {
      name: "ListExecutionMethods",
      I: ListExecutionMethodsRequest,
      O: ListExecutionMethodsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List all available service
     *
     * List all available services which can be used as condition for executions.
     *
     * @generated from rpc zitadel.action.v3alpha.ActionService.ListExecutionServices
     */
    listExecutionServices: {
      name: "ListExecutionServices",
      I: ListExecutionServicesRequest,
      O: ListExecutionServicesResponse,
      kind: MethodKind.Unary,
    },
  }
};

