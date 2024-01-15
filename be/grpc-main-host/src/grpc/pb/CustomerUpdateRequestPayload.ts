// Original file: src/grpc/proto/tech-market.proto

import type { Long } from '@grpc/proto-loader';

export interface CustomerUpdateRequestPayload {
  'email'?: (string);
  'name'?: (string);
  'surname'?: (string);
  'age'?: (number | string | Long);
}

export interface CustomerUpdateRequestPayload__Output {
  'email': (string);
  'name': (string);
  'surname': (string);
  'age': (string);
}
