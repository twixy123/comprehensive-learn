import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TechMarketClient as _TechMarketClient, TechMarketDefinition as _TechMarketDefinition } from './TechMarket';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  AuthResponse: MessageTypeDefinition
  Customer: MessageTypeDefinition
  CustomerAuthRequestPayload: MessageTypeDefinition
  CustomerUpdateRequestPayload: MessageTypeDefinition
  TechMarket: SubtypeConstructor<typeof grpc.Client, _TechMarketClient> & { service: _TechMarketDefinition }
}

