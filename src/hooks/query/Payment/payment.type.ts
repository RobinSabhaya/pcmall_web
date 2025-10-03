import type { paths } from '../../../types/api/generated';

export type CreateRefundRequest =
  paths['/v1/payment/create-refund']['post']['requestBody']['content']['application/json'];
export type CreateRefundResponse =
  paths['/v1/payment/create-refund']['post']['responses']['200']['content']['application/json'];
