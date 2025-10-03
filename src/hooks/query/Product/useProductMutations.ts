import { axiosInstance } from '@/services/api/axios';

import { useBaseQuery } from '../useBaseQuery';

import type { GetProductsParams, GetProductsResponse } from './product.type';
import { queryKeys } from './productQueryKey';

// Query
export function useGetAllProducts(params?: GetProductsParams) {
  return useBaseQuery<GetProductsResponse>({
    queryKey: queryKeys.products.list(params),
    queryFn: () => axiosInstance.get(`/product/all`, { params }),
  });
}
