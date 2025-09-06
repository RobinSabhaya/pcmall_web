import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from '@tanstack/react-query';

import type { ApiResponse, ApiError } from '@/types/api/api';

export function useBaseQuery<TData, TError = ApiError>(
  options: UseQueryOptions<ApiResponse<TData>, TError, TData>
): UseQueryResult<TData, TError> {
  return useQuery({
    ...options,
    select: data => data.data,
  });
}
