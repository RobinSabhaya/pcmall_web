import { axiosInstance } from '@/services/api/axios';

import { useBaseQuery } from '../useBaseQuery';

import type { GetAllOrdersParams, GetOrdersResponse } from './order.type';
import { orderQueryKeys } from './orderQueryKey';

// Query
export function useGetAllOrders(params?: GetAllOrdersParams) {
  return useBaseQuery<GetOrdersResponse>({
    queryKey: orderQueryKeys.orders.list(params),
    queryFn: () => axiosInstance.get(`/order/all`, { params }),
  });
}
