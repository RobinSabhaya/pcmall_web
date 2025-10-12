import { axiosInstance } from '@/services/api/axios';

import { useBaseQuery } from '../useBaseQuery';

import type { GetProductsParams, GetProductsResponse } from './product.type';
import { productQueryKeys } from './productQueryKey';

// Query
export function useGetAllProducts(params?: GetProductsParams) {
  return useBaseQuery<GetProductsResponse>({
    queryKey: productQueryKeys.products.list(params),
    queryFn: () => axiosInstance.get(`/product/all`, { params }),
  });
}
