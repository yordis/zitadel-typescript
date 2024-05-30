// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/user/v3alpha/communication.proto (package zitadel.user.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message zitadel.user.v3alpha.Contact
 */
export declare class Contact extends Message<Contact> {
  /**
   * Email contact information of the user.
   *
   * @generated from field: zitadel.user.v3alpha.Email email = 1;
   */
  email?: Email;

  /**
   * Phone contact information of the user.
   *
   * @generated from field: zitadel.user.v3alpha.Phone phone = 2;
   */
  phone?: Phone;

  constructor(data?: PartialMessage<Contact>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.Contact";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Contact;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Contact;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Contact;

  static equals(
    a: Contact | PlainMessage<Contact> | undefined,
    b: Contact | PlainMessage<Contact> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.Email
 */
export declare class Email extends Message<Email> {
  /**
   * Email address of the user.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * IsVerified states if the email address has been verified to belong to the user.
   *
   * @generated from field: bool is_verified = 2;
   */
  isVerified: boolean;

  constructor(data?: PartialMessage<Email>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.Email";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Email;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Email;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Email;

  static equals(
    a: Email | PlainMessage<Email> | undefined,
    b: Email | PlainMessage<Email> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.Phone
 */
export declare class Phone extends Message<Phone> {
  /**
   * Phone number of the user.
   *
   * @generated from field: string number = 1;
   */
  number: string;

  /**
   * IsVerified states if the phone number has been verified to belong to the user.
   *
   * @generated from field: bool is_verified = 2;
   */
  isVerified: boolean;

  constructor(data?: PartialMessage<Phone>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.Phone";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Phone;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Phone;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Phone;

  static equals(
    a: Phone | PlainMessage<Phone> | undefined,
    b: Phone | PlainMessage<Phone> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.SetContact
 */
export declare class SetContact extends Message<SetContact> {
  /**
   * @generated from field: optional zitadel.user.v3alpha.SetEmail email = 1;
   */
  email?: SetEmail;

  /**
   * @generated from field: optional zitadel.user.v3alpha.SetPhone phone = 2;
   */
  phone?: SetPhone;

  constructor(data?: PartialMessage<SetContact>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.SetContact";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SetContact;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SetContact;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SetContact;

  static equals(
    a: SetContact | PlainMessage<SetContact> | undefined,
    b: SetContact | PlainMessage<SetContact> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.SetEmail
 */
export declare class SetEmail extends Message<SetEmail> {
  /**
   * Set the email address.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * if no verification is specified, an email is sent with the default url
   *
   * @generated from oneof zitadel.user.v3alpha.SetEmail.verification
   */
  verification:
    | {
        /**
         * Let ZITADEL send the link to the user via email.
         *
         * @generated from field: zitadel.user.v3alpha.SendEmailVerificationCode send_code = 2;
         */
        value: SendEmailVerificationCode;
        case: "sendCode";
      }
    | {
        /**
         * Get the code back to provide it to the user in your preferred mechanism.
         *
         * @generated from field: zitadel.user.v3alpha.ReturnEmailVerificationCode return_code = 3;
         */
        value: ReturnEmailVerificationCode;
        case: "returnCode";
      }
    | {
        /**
         * Set the email as already verified.
         *
         * @generated from field: bool is_verified = 4;
         */
        value: boolean;
        case: "isVerified";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SetEmail>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.SetEmail";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SetEmail;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SetEmail;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SetEmail;

  static equals(
    a: SetEmail | PlainMessage<SetEmail> | undefined,
    b: SetEmail | PlainMessage<SetEmail> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.SendEmailVerificationCode
 */
export declare class SendEmailVerificationCode extends Message<SendEmailVerificationCode> {
  /**
   * Optionally set a url_template, which will be used in the verification mail sent by ZITADEL
   * to guide the user to your verification page.
   * If no template is set, the default ZITADEL url will be used.
   *
   * @generated from field: optional string url_template = 1;
   */
  urlTemplate?: string;

  constructor(data?: PartialMessage<SendEmailVerificationCode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.SendEmailVerificationCode";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SendEmailVerificationCode;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SendEmailVerificationCode;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SendEmailVerificationCode;

  static equals(
    a:
      | SendEmailVerificationCode
      | PlainMessage<SendEmailVerificationCode>
      | undefined,
    b:
      | SendEmailVerificationCode
      | PlainMessage<SendEmailVerificationCode>
      | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.ReturnEmailVerificationCode
 */
export declare class ReturnEmailVerificationCode extends Message<ReturnEmailVerificationCode> {
  constructor(data?: PartialMessage<ReturnEmailVerificationCode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.ReturnEmailVerificationCode";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ReturnEmailVerificationCode;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ReturnEmailVerificationCode;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ReturnEmailVerificationCode;

  static equals(
    a:
      | ReturnEmailVerificationCode
      | PlainMessage<ReturnEmailVerificationCode>
      | undefined,
    b:
      | ReturnEmailVerificationCode
      | PlainMessage<ReturnEmailVerificationCode>
      | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.SetPhone
 */
export declare class SetPhone extends Message<SetPhone> {
  /**
   * Set the user's phone number.
   *
   * @generated from field: string number = 1;
   */
  number: string;

  /**
   * if no verification is specified, a SMS is sent
   *
   * @generated from oneof zitadel.user.v3alpha.SetPhone.verification
   */
  verification:
    | {
        /**
         * Let ZITADEL send the link to the user via SMS.
         *
         * @generated from field: zitadel.user.v3alpha.SendPhoneVerificationCode send_code = 2;
         */
        value: SendPhoneVerificationCode;
        case: "sendCode";
      }
    | {
        /**
         * Get the code back to provide it to the user in your preferred mechanism.
         *
         * @generated from field: zitadel.user.v3alpha.ReturnPhoneVerificationCode return_code = 3;
         */
        value: ReturnPhoneVerificationCode;
        case: "returnCode";
      }
    | {
        /**
         * Set the phone as already verified.
         *
         * @generated from field: bool is_verified = 4;
         */
        value: boolean;
        case: "isVerified";
      }
    | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SetPhone>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.SetPhone";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SetPhone;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SetPhone;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SetPhone;

  static equals(
    a: SetPhone | PlainMessage<SetPhone> | undefined,
    b: SetPhone | PlainMessage<SetPhone> | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.SendPhoneVerificationCode
 */
export declare class SendPhoneVerificationCode extends Message<SendPhoneVerificationCode> {
  constructor(data?: PartialMessage<SendPhoneVerificationCode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.SendPhoneVerificationCode";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): SendPhoneVerificationCode;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): SendPhoneVerificationCode;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): SendPhoneVerificationCode;

  static equals(
    a:
      | SendPhoneVerificationCode
      | PlainMessage<SendPhoneVerificationCode>
      | undefined,
    b:
      | SendPhoneVerificationCode
      | PlainMessage<SendPhoneVerificationCode>
      | undefined,
  ): boolean;
}

/**
 * @generated from message zitadel.user.v3alpha.ReturnPhoneVerificationCode
 */
export declare class ReturnPhoneVerificationCode extends Message<ReturnPhoneVerificationCode> {
  constructor(data?: PartialMessage<ReturnPhoneVerificationCode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v3alpha.ReturnPhoneVerificationCode";
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): ReturnPhoneVerificationCode;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): ReturnPhoneVerificationCode;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): ReturnPhoneVerificationCode;

  static equals(
    a:
      | ReturnPhoneVerificationCode
      | PlainMessage<ReturnPhoneVerificationCode>
      | undefined,
    b:
      | ReturnPhoneVerificationCode
      | PlainMessage<ReturnPhoneVerificationCode>
      | undefined,
  ): boolean;
}
