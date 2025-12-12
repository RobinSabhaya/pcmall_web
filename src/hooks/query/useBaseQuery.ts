import {
  useInfiniteQuery,
  useQuery,
  type UseInfiniteQueryOptions,
  type UseInfiniteQueryResult,
  type UseQueryOptions,
  type UseQueryResult,
} from '@tanstack/react-query';

import type { ApiError, ApiResponse } from '@/types/api/api';

export function useBaseQuery<TData, TError = ApiError>(
  options: UseQueryOptions<ApiResponse<TData>, TError, TData>
): UseQueryResult<TData, TError> {
  return useQuery({
    ...options,
    select: data => data.data,
  });
}

export function useBaseInfiniteQuery<TData, TError = ApiError>(
  options: UseInfiniteQueryOptions<ApiResponse<TData>, TError, TData>
): UseInfiniteQueryResult<TData, TError> {
  return useInfiniteQuery({
    ...options,
  });
}
