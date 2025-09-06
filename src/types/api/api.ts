export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  success: boolean;
}

export interface PaginationResponse<T> {
  results: T[];
  page: number;
  limit: number;
  totalResults: number;
  totalPages: number;
}

// Query key factory type
export type QueryKeyFactory<
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  [K in keyof T]: (...args: unknown[]) => readonly unknown[];
};
