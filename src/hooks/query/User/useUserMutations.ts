import { queryClient } from '../../../lib/queryClient';
import { axiosInstance } from '../../../services/api/axios';
import { useBaseMutation } from '../useBaseMutation';
import { useBaseQuery } from '../useBaseQuery';

import type {
  UpdateUserRequest,
  UpdateUserResponse,
  UserDetailsResponse,
} from './user.type';
import { userQueryKeys } from './userQueryKey';

// Mutations
export function useUpdateUser() {
  return useBaseMutation<UpdateUserResponse, Error, UpdateUserRequest>({
    mutationFn: data => axiosInstance.put('/user/update', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.users.details });
    },
  });
}

export function useUserDetail() {
  return useBaseQuery<UserDetailsResponse>({
    queryKey: userQueryKeys.users.details,
    queryFn: () => axiosInstance.get(`/user/details`),
  });
}
