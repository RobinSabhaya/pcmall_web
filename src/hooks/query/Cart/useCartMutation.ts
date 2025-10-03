import { queryClient } from '../../../lib/queryClient';
import { axiosInstance } from '../../../services/api/axios';
import { useBaseMutation } from '../useBaseMutation';
import { useBaseQuery } from '../useBaseQuery';

import type {
  AddToCartRequest,
  AddToCartResponse,
  GetCartResponse,
  RemoveToCartRequest,
  RemoveToCartResponse,
  UpdateCartRequest,
  UpdateCartResponse,
} from './cart.type';
import { queryKeys } from './cartQueryKey';

// Mutations
export function useAddToCart() {
  return useBaseMutation<AddToCartResponse, Error, AddToCartRequest>({
    mutationFn: data => axiosInstance.post('/cart/add', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
    },
  });
}

export function useUpdateToCart() {
  return useBaseMutation<UpdateCartResponse, Error, UpdateCartRequest>({
    mutationFn: data => axiosInstance.put('/cart/update', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
    },
  });
}

export function useRemoveToCart() {
  return useBaseMutation<RemoveToCartResponse, Error, RemoveToCartRequest>({
    mutationFn: data => axiosInstance.delete(`/cart/remove/${data.cartId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
    },
  });
}

export function useGetAllCart() {
  return useBaseQuery<GetCartResponse>({
    queryKey: queryKeys.cart.all,
    queryFn: () => axiosInstance.get(`/cart/all`),
  });
}
