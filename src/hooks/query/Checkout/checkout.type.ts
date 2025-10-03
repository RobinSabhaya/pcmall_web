import type { paths } from '../../../types/api/generated';

export type CheckoutRequest =
  paths['/v1/checkout/']['post']['requestBody']['content']['application/json'];
export type CheckoutResponse =
  paths['/v1/checkout/']['post']['responses']['200']['content']['application/json']['data'];
