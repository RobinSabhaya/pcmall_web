import { axiosInstance } from '@/services/api/axios';

import { queryClient } from '../../../lib/queryClient';
import { successMessage } from '../../useToaster';
import { productQueryKeys } from '../Product';
import { useBaseMutation } from '../useBaseMutation';

import type {
  CreateWishlistRequest,
  CreateWishlistResponse,
} from './wishlist.type';

export function useCreateWishlist() {
  return useBaseMutation<CreateWishlistResponse, Error, CreateWishlistRequest>({
    mutationFn: ({ productId }) =>
      axiosInstance.post(`/wishlist/create-update`, {
        productId,
      }),
    onSuccess: data => {
      successMessage(data.message as string);
      queryClient.invalidateQueries({
        queryKey: productQueryKeys.products.list(),
      });
    },
  });
}
