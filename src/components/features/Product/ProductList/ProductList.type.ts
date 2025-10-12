import type { paths } from '../../../../types/api/generated';

export interface ProductListProps {
  start: number;
  end: number;
}

export type Products =
  paths['/v1/product/all']['get']['responses']['200']['content']['application/json']['productData']['results'];
