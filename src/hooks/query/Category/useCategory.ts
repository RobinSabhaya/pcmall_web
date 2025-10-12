import { axiosInstance } from '../../../services/api/axios';
import { useBaseQuery } from '../useBaseQuery';

import type { GetCategoryResponse } from './category.type';
import { categoriesQueryKeys } from './categoryQueryKey';

export function useGetAllCategories() {
  return useBaseQuery<GetCategoryResponse>({
    queryKey: categoriesQueryKeys.categories.all,
    queryFn: () => axiosInstance.get(`/category/all`),
  });
}
