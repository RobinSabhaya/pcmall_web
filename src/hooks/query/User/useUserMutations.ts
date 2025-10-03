import { axiosInstance } from '../../../services/api/axios';
import { useBaseMutation } from '../useBaseMutation';

import type { UpdateUserRequest, UpdateUserResponse } from './user.type';

// Mutations
export function useUpdateAddress() {
  return useBaseMutation<UpdateUserResponse, Error, UpdateUserRequest>({
    mutationFn: data => axiosInstance.put('/user/update', data),
  });
}
