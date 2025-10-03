import type { paths } from '@/types/api/generated';

export type GetOrdersParams =
  paths['/v1/order/all']['get']['parameters']['query'];
export type GetOrdersResponse =
  paths['/v1/order/all']['get']['responses']['200']['content']['application/json'];
