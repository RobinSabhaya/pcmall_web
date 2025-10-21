import type { paths } from '@/types/api/generated';

export type RegisterRequest =
  paths['/v1/auth/register']['post']['requestBody']['content']['application/json'];
export type RegisterResponse =
  paths['/v1/auth/register']['post']['responses']['200']['content']['application/json'];

export type SignupRequest =
  paths['/v1/auth/signup']['post']['requestBody']['content']['application/json'];
export type SignupResponse =
  paths['/v1/auth/signup']['post']['responses']['200']['content']['application/json'];

export type LoginRequest =
  paths['/v1/auth/login']['post']['requestBody']['content']['application/json'];
export type LoginResponse =
  paths['/v1/auth/login']['post']['responses']['200']['content']['application/json']['data'];

export type LogoutRequest =
  paths['/v1/auth/logout']['post']['requestBody']['content']['application/json'];
export type LogoutResponse =
  paths['/v1/auth/logout']['post']['responses']['200']['content'];

export type RefreshTokensRequest =
  paths['/v1/auth/refresh-tokens']['post']['requestBody']['content']['application/json'];
export type RefreshTokensResponse =
  paths['/v1/auth/refresh-tokens']['post']['responses']['200']['content']['application/json'];
