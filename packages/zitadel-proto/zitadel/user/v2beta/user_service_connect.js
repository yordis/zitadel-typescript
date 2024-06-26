// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/user/v2beta/user_service.proto (package zitadel.user.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddHumanUserRequest, AddHumanUserResponse, AddIDPLinkRequest, AddIDPLinkResponse, AddOTPEmailRequest, AddOTPEmailResponse, AddOTPSMSRequest, AddOTPSMSResponse, CreatePasskeyRegistrationLinkRequest, CreatePasskeyRegistrationLinkResponse, DeactivateUserRequest, DeactivateUserResponse, DeleteUserRequest, DeleteUserResponse, GetUserByIDRequest, GetUserByIDResponse, ListAuthenticationMethodTypesRequest, ListAuthenticationMethodTypesResponse, ListUsersRequest, ListUsersResponse, LockUserRequest, LockUserResponse, PasswordResetRequest, PasswordResetResponse, ReactivateUserRequest, ReactivateUserResponse, RegisterPasskeyRequest, RegisterPasskeyResponse, RegisterTOTPRequest, RegisterTOTPResponse, RegisterU2FRequest, RegisterU2FResponse, RemoveOTPEmailRequest, RemoveOTPEmailResponse, RemoveOTPSMSRequest, RemoveOTPSMSResponse, ResendEmailCodeRequest, ResendEmailCodeResponse, ResendPhoneCodeRequest, ResendPhoneCodeResponse, RetrieveIdentityProviderIntentRequest, RetrieveIdentityProviderIntentResponse, SetEmailRequest, SetEmailResponse, SetPasswordRequest, SetPasswordResponse, SetPhoneRequest, SetPhoneResponse, StartIdentityProviderIntentRequest, StartIdentityProviderIntentResponse, UnlockUserRequest, UnlockUserResponse, UpdateHumanUserRequest, UpdateHumanUserResponse, VerifyEmailRequest, VerifyEmailResponse, VerifyPasskeyRegistrationRequest, VerifyPasskeyRegistrationResponse, VerifyPhoneRequest, VerifyPhoneResponse, VerifyTOTPRegistrationRequest, VerifyTOTPRegistrationResponse, VerifyU2FRegistrationRequest, VerifyU2FRegistrationResponse } from "./user_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.user.v2beta.UserService
 */
export const UserService = {
  typeName: "zitadel.user.v2beta.UserService",
  methods: {
    /**
     * Create a new human user
     *
     * @generated from rpc zitadel.user.v2beta.UserService.AddHumanUser
     */
    addHumanUser: {
      name: "AddHumanUser",
      I: AddHumanUserRequest,
      O: AddHumanUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.GetUserByID
     */
    getUserByID: {
      name: "GetUserByID",
      I: GetUserByIDRequest,
      O: GetUserByIDResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.ListUsers
     */
    listUsers: {
      name: "ListUsers",
      I: ListUsersRequest,
      O: ListUsersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Change the email of a user
     *
     * @generated from rpc zitadel.user.v2beta.UserService.SetEmail
     */
    setEmail: {
      name: "SetEmail",
      I: SetEmailRequest,
      O: SetEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Resend code to verify user email
     *
     * @generated from rpc zitadel.user.v2beta.UserService.ResendEmailCode
     */
    resendEmailCode: {
      name: "ResendEmailCode",
      I: ResendEmailCodeRequest,
      O: ResendEmailCodeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Verify the email with the provided code
     *
     * @generated from rpc zitadel.user.v2beta.UserService.VerifyEmail
     */
    verifyEmail: {
      name: "VerifyEmail",
      I: VerifyEmailRequest,
      O: VerifyEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Change the phone of a user
     *
     * @generated from rpc zitadel.user.v2beta.UserService.SetPhone
     */
    setPhone: {
      name: "SetPhone",
      I: SetPhoneRequest,
      O: SetPhoneResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.ResendPhoneCode
     */
    resendPhoneCode: {
      name: "ResendPhoneCode",
      I: ResendPhoneCodeRequest,
      O: ResendPhoneCodeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Verify the phone with the provided code
     *
     * @generated from rpc zitadel.user.v2beta.UserService.VerifyPhone
     */
    verifyPhone: {
      name: "VerifyPhone",
      I: VerifyPhoneRequest,
      O: VerifyPhoneResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.UpdateHumanUser
     */
    updateHumanUser: {
      name: "UpdateHumanUser",
      I: UpdateHumanUserRequest,
      O: UpdateHumanUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.DeactivateUser
     */
    deactivateUser: {
      name: "DeactivateUser",
      I: DeactivateUserRequest,
      O: DeactivateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.ReactivateUser
     */
    reactivateUser: {
      name: "ReactivateUser",
      I: ReactivateUserRequest,
      O: ReactivateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.LockUser
     */
    lockUser: {
      name: "LockUser",
      I: LockUserRequest,
      O: LockUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.UnlockUser
     */
    unlockUser: {
      name: "UnlockUser",
      I: UnlockUserRequest,
      O: UnlockUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.DeleteUser
     */
    deleteUser: {
      name: "DeleteUser",
      I: DeleteUserRequest,
      O: DeleteUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.RegisterPasskey
     */
    registerPasskey: {
      name: "RegisterPasskey",
      I: RegisterPasskeyRequest,
      O: RegisterPasskeyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.VerifyPasskeyRegistration
     */
    verifyPasskeyRegistration: {
      name: "VerifyPasskeyRegistration",
      I: VerifyPasskeyRegistrationRequest,
      O: VerifyPasskeyRegistrationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.CreatePasskeyRegistrationLink
     */
    createPasskeyRegistrationLink: {
      name: "CreatePasskeyRegistrationLink",
      I: CreatePasskeyRegistrationLinkRequest,
      O: CreatePasskeyRegistrationLinkResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.RegisterU2F
     */
    registerU2F: {
      name: "RegisterU2F",
      I: RegisterU2FRequest,
      O: RegisterU2FResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.VerifyU2FRegistration
     */
    verifyU2FRegistration: {
      name: "VerifyU2FRegistration",
      I: VerifyU2FRegistrationRequest,
      O: VerifyU2FRegistrationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.RegisterTOTP
     */
    registerTOTP: {
      name: "RegisterTOTP",
      I: RegisterTOTPRequest,
      O: RegisterTOTPResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.VerifyTOTPRegistration
     */
    verifyTOTPRegistration: {
      name: "VerifyTOTPRegistration",
      I: VerifyTOTPRegistrationRequest,
      O: VerifyTOTPRegistrationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.AddOTPSMS
     */
    addOTPSMS: {
      name: "AddOTPSMS",
      I: AddOTPSMSRequest,
      O: AddOTPSMSResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.RemoveOTPSMS
     */
    removeOTPSMS: {
      name: "RemoveOTPSMS",
      I: RemoveOTPSMSRequest,
      O: RemoveOTPSMSResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.AddOTPEmail
     */
    addOTPEmail: {
      name: "AddOTPEmail",
      I: AddOTPEmailRequest,
      O: AddOTPEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.RemoveOTPEmail
     */
    removeOTPEmail: {
      name: "RemoveOTPEmail",
      I: RemoveOTPEmailRequest,
      O: RemoveOTPEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Start an IDP authentication (for external login, registration or linking)
     *
     * @generated from rpc zitadel.user.v2beta.UserService.StartIdentityProviderIntent
     */
    startIdentityProviderIntent: {
      name: "StartIdentityProviderIntent",
      I: StartIdentityProviderIntentRequest,
      O: StartIdentityProviderIntentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.user.v2beta.UserService.RetrieveIdentityProviderIntent
     */
    retrieveIdentityProviderIntent: {
      name: "RetrieveIdentityProviderIntent",
      I: RetrieveIdentityProviderIntentRequest,
      O: RetrieveIdentityProviderIntentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Link an IDP to an existing user
     *
     * @generated from rpc zitadel.user.v2beta.UserService.AddIDPLink
     */
    addIDPLink: {
      name: "AddIDPLink",
      I: AddIDPLinkRequest,
      O: AddIDPLinkResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Request password reset
     *
     * @generated from rpc zitadel.user.v2beta.UserService.PasswordReset
     */
    passwordReset: {
      name: "PasswordReset",
      I: PasswordResetRequest,
      O: PasswordResetResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Change password
     *
     * @generated from rpc zitadel.user.v2beta.UserService.SetPassword
     */
    setPassword: {
      name: "SetPassword",
      I: SetPasswordRequest,
      O: SetPasswordResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List all possible authentication methods of a user
     *
     * @generated from rpc zitadel.user.v2beta.UserService.ListAuthenticationMethodTypes
     */
    listAuthenticationMethodTypes: {
      name: "ListAuthenticationMethodTypes",
      I: ListAuthenticationMethodTypesRequest,
      O: ListAuthenticationMethodTypesResponse,
      kind: MethodKind.Unary,
    },
  }
};

