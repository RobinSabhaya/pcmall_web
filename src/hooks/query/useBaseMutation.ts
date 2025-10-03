import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from '@tanstack/react-query';

import type { ApiResponse } from '@/types/api/api';

export function useBaseMutation<TData, TError, TVariables>(
  options: UseMutationOptions<ApiResponse<TData>, TError, TVariables>
): UseMutationResult<ApiResponse<TData>, TError, TVariables> {
  return useMutation(options);
}
