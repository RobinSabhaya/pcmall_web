import { axiosInstance } from '../../../services';
import { useBaseQuery } from '../useBaseQuery';

import type {
  GetPaymentDetailsParams,
  GetPaymentDetailsResponse,
} from './payment.type';
import { paymentQueryKeys } from './paymentQueryKey';

// Query
export function useGetPaymentDetails(params?: GetPaymentDetailsParams) {
  return useBaseQuery<GetPaymentDetailsResponse>({
    queryKey: paymentQueryKeys.details,
    queryFn: () => axiosInstance.get(`/payment/details`, { params }),
  });
}
