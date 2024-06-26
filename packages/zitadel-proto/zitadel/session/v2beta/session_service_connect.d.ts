// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/session/v2beta/session_service.proto (package zitadel.session.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  CreateSessionRequest,
  CreateSessionResponse,
  DeleteSessionRequest,
  DeleteSessionResponse,
  GetSessionRequest,
  GetSessionResponse,
  ListSessionsRequest,
  ListSessionsResponse,
  SetSessionRequest,
  SetSessionResponse,
} from "./session_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.session.v2beta.SessionService
 */
export declare const SessionService: {
  readonly typeName: "zitadel.session.v2beta.SessionService";
  readonly methods: {
    /**
     * Search sessions
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.ListSessions
     */
    readonly listSessions: {
      readonly name: "ListSessions";
      readonly I: typeof ListSessionsRequest;
      readonly O: typeof ListSessionsResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * GetSession a session
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.GetSession
     */
    readonly getSession: {
      readonly name: "GetSession";
      readonly I: typeof GetSessionRequest;
      readonly O: typeof GetSessionResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Create a new session
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.CreateSession
     */
    readonly createSession: {
      readonly name: "CreateSession";
      readonly I: typeof CreateSessionRequest;
      readonly O: typeof CreateSessionResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Update a session
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.SetSession
     */
    readonly setSession: {
      readonly name: "SetSession";
      readonly I: typeof SetSessionRequest;
      readonly O: typeof SetSessionResponse;
      readonly kind: MethodKind.Unary;
    };
    /**
     * Terminate a session
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.DeleteSession
     */
    readonly deleteSession: {
      readonly name: "DeleteSession";
      readonly I: typeof DeleteSessionRequest;
      readonly O: typeof DeleteSessionResponse;
      readonly kind: MethodKind.Unary;
    };
  };
};
