import { axiosInstance } from '@/services/api/axios';

import { useBaseInfiniteQuery, useBaseQuery } from '../useBaseQuery';

import type {
  GetProductsParams,
  GetProductsResponse,
  GetProductsResponsePaginated,
} from './product.type';
import { productQueryKeys } from './productQueryKey';

// Query
export function useGetAllProducts(params?: GetProductsParams) {
  return useBaseQuery<GetProductsResponse>({
    queryKey: productQueryKeys.products.list(params),
    queryFn: () => axiosInstance.get(`/product/all`, { params }),
  });
}

export function useGetAllProductsPaginated(params?: GetProductsParams) {
  return useBaseInfiniteQuery<{
    pages: GetProductsResponsePaginated[];
  }>({
    queryKey: productQueryKeys.products.list(),
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      axiosInstance
        .get('/product/all', {
          params: {
            page: pageParam,
            ...params,
          },
        })
        .then(res => {
          return res.data.productData;
        }),
    // TODO: add specific types
    getNextPageParam: (lastPage: any) => {
      if (lastPage.totalPages <= lastPage?.page) return undefined;

      return lastPage?.page + 1;
    },
  });
}
