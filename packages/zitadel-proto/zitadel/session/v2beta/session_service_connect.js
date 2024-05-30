// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/session/v2beta/session_service.proto (package zitadel.session.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateSessionRequest, CreateSessionResponse, DeleteSessionRequest, DeleteSessionResponse, GetSessionRequest, GetSessionResponse, ListSessionsRequest, ListSessionsResponse, SetSessionRequest, SetSessionResponse } from "./session_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.session.v2beta.SessionService
 */
export const SessionService = {
  typeName: "zitadel.session.v2beta.SessionService",
  methods: {
    /**
     * Search sessions
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.ListSessions
     */
    listSessions: {
      name: "ListSessions",
      I: ListSessionsRequest,
      O: ListSessionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetSession a session
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.GetSession
     */
    getSession: {
      name: "GetSession",
      I: GetSessionRequest,
      O: GetSessionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Create a new session
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.CreateSession
     */
    createSession: {
      name: "CreateSession",
      I: CreateSessionRequest,
      O: CreateSessionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update a session
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.SetSession
     */
    setSession: {
      name: "SetSession",
      I: SetSessionRequest,
      O: SetSessionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Terminate a session
     *
     * @generated from rpc zitadel.session.v2beta.SessionService.DeleteSession
     */
    deleteSession: {
      name: "DeleteSession",
      I: DeleteSessionRequest,
      O: DeleteSessionResponse,
      kind: MethodKind.Unary,
    },
  }
};

