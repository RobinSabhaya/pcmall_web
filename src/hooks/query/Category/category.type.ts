import type { paths } from '../../../types/api/generated';

export type GetCategoryResponse =
  paths['/v1/category/all']['get']['responses']['200']['content']['application/json']['data'];
