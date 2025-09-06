import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from '@tanstack/react-query';

import type { ApiResponse, ApiError } from '@/types/api/api';

export function useBaseMutation<TData, TVariables, TError = ApiError>(
  options: UseMutationOptions<ApiResponse<TData>, TError, TVariables>
): UseMutationResult<ApiResponse<TData>, TError, TVariables> {
  return useMutation(options);
}
