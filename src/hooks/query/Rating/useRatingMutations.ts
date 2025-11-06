import { axiosInstance } from '@/services/api/axios';

import { queryClient } from '../../../lib/queryClient';
import { successMessage } from '../../useToaster';
import { useBaseMutation } from '../useBaseMutation';
import { useBaseQuery } from '../useBaseQuery';

import type {
  CreateUpdateRatingRequest,
  CreateUpdateRatingResponse,
  GetRatingCountParams,
  GetRatingCountResponse,
  GetRatingsParams,
  GetRatingsResponse,
} from './rating.type';
import { ratingQueryKeys } from './ratingQueryKey';

export function useCreateUpdateRating() {
  return useBaseMutation<
    CreateUpdateRatingResponse,
    Error,
    CreateUpdateRatingRequest
  >({
    mutationFn: payload => axiosInstance.post(`/rating/create-update`, payload),
    onSuccess: data => {
      successMessage(data.message as string);

      queryClient.invalidateQueries({
        queryKey: ratingQueryKeys.ratings.all,
      });
    },
  });
}

export function useGetAllRatings(params: GetRatingsParams) {
  return useBaseQuery<GetRatingsResponse>({
    queryKey: ratingQueryKeys.ratings.all,
    queryFn: () => axiosInstance.get(`/rating/all`, { params }),
    refetchOnMount: 'always',
  });
}

export function useGetAllRatingCount(params: GetRatingCountParams) {
  return useBaseQuery<GetRatingCountResponse>({
    queryKey: ratingQueryKeys.ratings.count,
    queryFn: () => axiosInstance.get(`/rating/count`, { params }),
    refetchOnMount: 'always',
  });
}
