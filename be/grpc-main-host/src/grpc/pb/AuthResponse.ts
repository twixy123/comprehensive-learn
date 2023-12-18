// Original file: src/grpc/proto/tech-market.proto

import type { Customer as _Customer, Customer__Output as _Customer__Output } from './Customer';

export interface AuthResponse {
  'customer'?: (_Customer | null);
  'accessToken'?: (string);
  'refreshToken'?: (string);
}

export interface AuthResponse__Output {
  'customer': (_Customer__Output | null);
  'accessToken': (string);
  'refreshToken': (string);
}
