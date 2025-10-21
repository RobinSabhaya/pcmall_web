import { queryClient } from '../../../lib/queryClient';
import { axiosInstance } from '../../../services/api/axios';
import { successMessage } from '../../useToaster';
import { productQueryKeys } from '../Product';
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
import { cartQueryKeys } from './cartQueryKey';

// Mutations
export function useAddToCart() {
  return useBaseMutation<AddToCartResponse, Error, AddToCartRequest>({
    mutationFn: data => axiosInstance.post('/cart/add', data),
    onSuccess: () => {
      const keysToInvalidate = [
        cartQueryKeys.cart.all,
        productQueryKeys.products.list(),
      ];

      keysToInvalidate.map(key =>
        queryClient.invalidateQueries({ queryKey: key })
      );
      successMessage('Cart added successfully');
    },
  });
}

export function useUpdateToCart() {
  return useBaseMutation<UpdateCartResponse, Error, UpdateCartRequest>({
    mutationFn: data => axiosInstance.put('/cart/update', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartQueryKeys.cart.all });
    },
  });
}

export function useRemoveToCart() {
  return useBaseMutation<RemoveToCartResponse, Error, RemoveToCartRequest>({
    mutationFn: data => axiosInstance.delete(`/cart/remove/${data.cartId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartQueryKeys.cart.all });
      successMessage('Cart removed successfully');
    },
  });
}

export function useGetAllCart() {
  return useBaseQuery<GetCartResponse>({
    queryKey: cartQueryKeys.cart.all,
    queryFn: () => axiosInstance.get(`/cart/all`),
  });
}
