import type { paths } from '../../../types/api/generated';

// User types
export type UpdateUserRequest =
  paths['/v1/user/update']['put']['requestBody']['content']['application/json'];

export type UpdateUserResponse =
  paths['/v1/user/update']['put']['responses']['200']['content']['application/json'];

export type UpdateAddressRequest =
  paths['/v1/user/address/update']['put']['requestBody']['content']['application/json'];
export type UpdateAddressResponse =
  paths['/v1/user/address/update']['put']['responses']['200']['content']['application/json'];
