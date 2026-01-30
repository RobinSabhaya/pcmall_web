import type { paths } from '../../../types/api/generated';

export type CreateRefundRequest =
  paths['/v1/payment/create-refund']['post']['requestBody']['content']['application/json'];
export type CreateRefundResponse =
  paths['/v1/payment/create-refund']['post']['responses']['200']['content']['application/json'];

export type GetPaymentDetailsParams =
  paths['/v1/payment/details']['get']['parameters']['query'];
export type GetPaymentDetailsResponse =
  paths['/v1/payment/details']['get']['responses']['200']['content']['application/json']['data'];
