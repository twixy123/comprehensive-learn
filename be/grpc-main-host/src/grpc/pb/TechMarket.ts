// Original file: src/grpc/proto/tech-market.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthResponse as _AuthResponse, AuthResponse__Output as _AuthResponse__Output } from './AuthResponse';
import type { Customer as _Customer, Customer__Output as _Customer__Output } from './Customer';
import type { CustomerAuthRequestPayload as _CustomerAuthRequestPayload, CustomerAuthRequestPayload__Output as _CustomerAuthRequestPayload__Output } from './CustomerAuthRequestPayload';
import type { CustomerUpdateRequestPayload as _CustomerUpdateRequestPayload, CustomerUpdateRequestPayload__Output as _CustomerUpdateRequestPayload__Output } from './CustomerUpdateRequestPayload';

export interface TechMarketClient extends grpc.Client {
  Authentication(argument: _CustomerAuthRequestPayload, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  Authentication(argument: _CustomerAuthRequestPayload, metadata: grpc.Metadata, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  Authentication(argument: _CustomerAuthRequestPayload, options: grpc.CallOptions, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  Authentication(argument: _CustomerAuthRequestPayload, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  authentication(argument: _CustomerAuthRequestPayload, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  authentication(argument: _CustomerAuthRequestPayload, metadata: grpc.Metadata, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  authentication(argument: _CustomerAuthRequestPayload, options: grpc.CallOptions, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  authentication(argument: _CustomerAuthRequestPayload, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  
  Registration(argument: _CustomerAuthRequestPayload, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  Registration(argument: _CustomerAuthRequestPayload, metadata: grpc.Metadata, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  Registration(argument: _CustomerAuthRequestPayload, options: grpc.CallOptions, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  Registration(argument: _CustomerAuthRequestPayload, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  registration(argument: _CustomerAuthRequestPayload, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  registration(argument: _CustomerAuthRequestPayload, metadata: grpc.Metadata, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  registration(argument: _CustomerAuthRequestPayload, options: grpc.CallOptions, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  registration(argument: _CustomerAuthRequestPayload, callback: grpc.requestCallback<_AuthResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateCustomer(argument: _CustomerUpdateRequestPayload, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Customer__Output>): grpc.ClientUnaryCall;
  UpdateCustomer(argument: _CustomerUpdateRequestPayload, metadata: grpc.Metadata, callback: grpc.requestCallback<_Customer__Output>): grpc.ClientUnaryCall;
  UpdateCustomer(argument: _CustomerUpdateRequestPayload, options: grpc.CallOptions, callback: grpc.requestCallback<_Customer__Output>): grpc.ClientUnaryCall;
  UpdateCustomer(argument: _CustomerUpdateRequestPayload, callback: grpc.requestCallback<_Customer__Output>): grpc.ClientUnaryCall;
  updateCustomer(argument: _CustomerUpdateRequestPayload, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Customer__Output>): grpc.ClientUnaryCall;
  updateCustomer(argument: _CustomerUpdateRequestPayload, metadata: grpc.Metadata, callback: grpc.requestCallback<_Customer__Output>): grpc.ClientUnaryCall;
  updateCustomer(argument: _CustomerUpdateRequestPayload, options: grpc.CallOptions, callback: grpc.requestCallback<_Customer__Output>): grpc.ClientUnaryCall;
  updateCustomer(argument: _CustomerUpdateRequestPayload, callback: grpc.requestCallback<_Customer__Output>): grpc.ClientUnaryCall;
  
}

export interface TechMarketHandlers extends grpc.UntypedServiceImplementation {
  Authentication: grpc.handleUnaryCall<_CustomerAuthRequestPayload__Output, _AuthResponse>;
  
  Registration: grpc.handleUnaryCall<_CustomerAuthRequestPayload__Output, _AuthResponse>;
  
  UpdateCustomer: grpc.handleUnaryCall<_CustomerUpdateRequestPayload__Output, _Customer>;
  
}

export interface TechMarketDefinition extends grpc.ServiceDefinition {
  Authentication: MethodDefinition<_CustomerAuthRequestPayload, _AuthResponse, _CustomerAuthRequestPayload__Output, _AuthResponse__Output>
  Registration: MethodDefinition<_CustomerAuthRequestPayload, _AuthResponse, _CustomerAuthRequestPayload__Output, _AuthResponse__Output>
  UpdateCustomer: MethodDefinition<_CustomerUpdateRequestPayload, _Customer, _CustomerUpdateRequestPayload__Output, _Customer__Output>
}
