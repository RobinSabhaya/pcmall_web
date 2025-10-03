import { axiosInstance } from '../../../services/api/axios';
import { useBaseMutation } from '../useBaseMutation';

import type { CheckoutRequest, CheckoutResponse } from './checkout.type';

// Mutations
export function useCreateCheckout() {
  return useBaseMutation<CheckoutResponse, Error, CheckoutRequest>({
    mutationFn: data => axiosInstance.post('/checkout', data),
  });
}
