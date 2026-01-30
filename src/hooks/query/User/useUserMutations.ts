import { queryClient } from '../../../lib/queryClient';
import { axiosInstance } from '../../../services/api/axios';
import { successMessage } from '../../useToaster';
import { useBaseMutation } from '../useBaseMutation';
import { useBaseQuery } from '../useBaseQuery';

import type {
  DeleteAddressParams,
  DeleteAddressResponse,
  UpdateAddressRequest,
  UpdateAddressResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  UserDetailsResponse,
} from './user.type';
import { userQueryKeys } from './userQueryKey';

// Mutations
export function useUpdateUser() {
  return useBaseMutation<UpdateUserResponse, Error, UpdateUserRequest>({
    mutationFn: data => axiosInstance.put('/user/update', data),
    onSuccess: ({ message }) => {
      successMessage(message ?? 'User updated successfully');

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

// Address
export function useUpdateAddress() {
  return useBaseMutation<UpdateAddressResponse, Error, UpdateAddressRequest>({
    mutationFn: data => axiosInstance.put('/user/address/update', data),
    onSuccess: ({ message }) => {
      successMessage(message ?? 'Address updated successfully');

      queryClient.invalidateQueries({ queryKey: userQueryKeys.users.details });
    },
  });
}

// Address
export function useDeleteAddress() {
  return useBaseMutation<DeleteAddressResponse, Error, DeleteAddressParams>({
    mutationFn: (params: DeleteAddressParams) =>
      axiosInstance.delete('/user/address/delete', {
        params,
      }),
    onSuccess: ({ message }) => {
      successMessage(message ?? 'Address deleted successfully');

      queryClient.invalidateQueries({ queryKey: userQueryKeys.users.details });
    },
  });
}
