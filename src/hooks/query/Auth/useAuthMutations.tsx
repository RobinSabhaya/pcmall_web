import { useRouter } from 'next/navigation';

import { axiosInstance } from '../../../services/api/axios';
import { successMessage } from '../../useToaster';
import { useBaseMutation } from '../useBaseMutation';

import type {
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  LogoutResponse,
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
  const router = useRouter();

  return useBaseMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: data => axiosInstance.post('/auth/login', data),
    mutationKey: queryKeys.auth.login,
    onSuccess: data => {
      successMessage(data.message ?? 'Login successful');
      localStorage.setItem('t', data.data.tokens.access.token);

      setTimeout(() => {
        router.replace('/');
      }, 1000);
    },
  });
}

export function useLogout() {
  return useBaseMutation<LogoutResponse, Error, LogoutRequest>({
    mutationFn: data => axiosInstance.post('/auth/logout', data),
    mutationKey: queryKeys.auth.logout,
    onSuccess: data => {
      successMessage(data.message ?? 'Logged out successful');
    },
  });
}
