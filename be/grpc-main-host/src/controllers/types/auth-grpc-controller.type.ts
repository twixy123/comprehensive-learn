import * as grpc from "@grpc/grpc-js";
import {CustomerAuthRequestPayload__Output} from "../../grpc/pb/CustomerAuthRequestPayload";
import {AuthResponse__Output} from "../../grpc/pb/AuthResponse";

export type RegistrationRequest = grpc.ServerUnaryCall<CustomerAuthRequestPayload__Output, AuthResponse__Output>
export type RegistrationResponse = grpc.sendUnaryData<AuthResponse__Output>
