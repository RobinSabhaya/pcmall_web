import { axiosInstance } from '../../../services/api/axios';
import { useBaseMutation } from '../useBaseMutation';

import type {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from './auth.type';
import { queryKeys } from './authQueryKey';

// Mutations
export function useSignup() {
  return useBaseMutation<SignupResponse, Error, SignupRequest>({
    mutationFn: data => axiosInstance.post('/auth/signup', data),
    mutationKey: queryKeys.auth.signup,
  });
}

export function useLogin() {
  return useBaseMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: data => axiosInstance.post('/auth/login', data),
    mutationKey: queryKeys.auth.login,
  });
}
