import * as jspb from 'google-protobuf'



export class Customer extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Customer;

  getEmail(): string;
  setEmail(value: string): Customer;

  getName(): string;
  setName(value: string): Customer;

  getSurname(): string;
  setSurname(value: string): Customer;

  getAge(): number;
  setAge(value: number): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    uuid: string,
    email: string,
    name: string,
    surname: string,
    age: number,
  }
}

export class AuthResponse extends jspb.Message {
  getCustomer(): Customer | undefined;
  setCustomer(value?: Customer): AuthResponse;
  hasCustomer(): boolean;
  clearCustomer(): AuthResponse;

  getAccesstoken(): string;
  setAccesstoken(value: string): AuthResponse;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): AuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
  static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResponse;
  static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
  export type AsObject = {
    customer?: Customer.AsObject,
    accesstoken: string,
    refreshtoken: string,
  }
}

export class CustomerAuthRequestPayload extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CustomerAuthRequestPayload;

  getPassword(): string;
  setPassword(value: string): CustomerAuthRequestPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAuthRequestPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAuthRequestPayload): CustomerAuthRequestPayload.AsObject;
  static serializeBinaryToWriter(message: CustomerAuthRequestPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAuthRequestPayload;
  static deserializeBinaryFromReader(message: CustomerAuthRequestPayload, reader: jspb.BinaryReader): CustomerAuthRequestPayload;
}

export namespace CustomerAuthRequestPayload {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class CustomerUpdateRequestPayload extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CustomerUpdateRequestPayload;

  getName(): string;
  setName(value: string): CustomerUpdateRequestPayload;

  getSurname(): string;
  setSurname(value: string): CustomerUpdateRequestPayload;

  getAge(): number;
  setAge(value: number): CustomerUpdateRequestPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerUpdateRequestPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerUpdateRequestPayload): CustomerUpdateRequestPayload.AsObject;
  static serializeBinaryToWriter(message: CustomerUpdateRequestPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerUpdateRequestPayload;
  static deserializeBinaryFromReader(message: CustomerUpdateRequestPayload, reader: jspb.BinaryReader): CustomerUpdateRequestPayload;
}

export namespace CustomerUpdateRequestPayload {
  export type AsObject = {
    email: string,
    name: string,
    surname: string,
    age: number,
  }
}

