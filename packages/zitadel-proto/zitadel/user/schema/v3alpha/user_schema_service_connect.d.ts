// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/user/schema/v3alpha/user_schema_service.proto (package zitadel.user.schema.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  CreateUserSchemaRequest,
  CreateUserSchemaResponse,
  DeactivateUserSchemaRequest,
  DeactivateUserSchemaResponse,
  DeleteUserSchemaRequest,
  DeleteUserSchemaResponse,
  GetUserSchemaByIDRequest,
  GetUserSchemaByIDResponse,
  ListUserSchemasRequest,
  ListUserSchemasResponse,
  ReactivateUserSchemaRequest,
  ReactivateUserSchemaResponse,
  UpdateUserSchemaRequest,
  UpdateUserSchemaResponse,
} from "./user_schema_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.user.schema.v3alpha.UserSchemaService
 */
export declare const UserSchemaService: {
  readonly typeName: "zitadel.user.schema.v3alpha.UserSchemaService";
  readonly methods: {
    /**
     * List user schemas
     *
     * List all matching user schemas. By default, we will return all user schema of your instance. Make sure to include a limit and sorting for pagination.
     *
     * @generated from rpc zitadel.user.schema.v3alpha.UserSchemaService.ListUserSchemas
     */
    readonly listUserSchemas: {
      readonly name: "ListUserSchemas";
      readonly I: typeof ListUserSchemasRequest;
      readonly O: typeof ListUserSchemasResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * User schema by ID
     *
     * Returns the user schema identified by the requested ID.
     *
     * @generated from rpc zitadel.user.schema.v3alpha.UserSchemaService.GetUserSchemaByID
     */
    readonly getUserSchemaByID: {
      readonly name: "GetUserSchemaByID";
      readonly I: typeof GetUserSchemaByIDRequest;
      readonly O: typeof GetUserSchemaByIDResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Create a user schema
     *
     * Create the first revision of a new user schema. The schema can then be used on users to store and validate their data.
     *
     * @generated from rpc zitadel.user.schema.v3alpha.UserSchemaService.CreateUserSchema
     */
    readonly createUserSchema: {
      readonly name: "CreateUserSchema";
      readonly I: typeof CreateUserSchemaRequest;
      readonly O: typeof CreateUserSchemaResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Update a user schema
     *
     * Update an existing user schema to a new revision. Users based on the current revision will not be affected until they are updated.
     *
     * @generated from rpc zitadel.user.schema.v3alpha.UserSchemaService.UpdateUserSchema
     */
    readonly updateUserSchema: {
      readonly name: "UpdateUserSchema";
      readonly I: typeof UpdateUserSchemaRequest;
      readonly O: typeof UpdateUserSchemaResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Deactivate a user schema
     *
     * Deactivate an existing user schema and change it into a read-only state. Users based on this schema cannot be updated anymore, but are still able to authenticate.
     *
     * @generated from rpc zitadel.user.schema.v3alpha.UserSchemaService.DeactivateUserSchema
     */
    readonly deactivateUserSchema: {
      readonly name: "DeactivateUserSchema";
      readonly I: typeof DeactivateUserSchemaRequest;
      readonly O: typeof DeactivateUserSchemaResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Reactivate a user schema
     *
     * Reactivate an previously deactivated user schema and change it into an active state again.
     *
     * @generated from rpc zitadel.user.schema.v3alpha.UserSchemaService.ReactivateUserSchema
     */
    readonly reactivateUserSchema: {
      readonly name: "ReactivateUserSchema";
      readonly I: typeof ReactivateUserSchemaRequest;
      readonly O: typeof ReactivateUserSchemaResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Delete a user schema
     *
     * Delete an existing user schema. This operation is only allowed if there are no associated users to it.
     *
     * @generated from rpc zitadel.user.schema.v3alpha.UserSchemaService.DeleteUserSchema
     */
    readonly deleteUserSchema: {
      readonly name: "DeleteUserSchema";
      readonly I: typeof DeleteUserSchemaRequest;
      readonly O: typeof DeleteUserSchemaResponse;
      readonly kind: MethodKind.Unary;
    };
  };
};
