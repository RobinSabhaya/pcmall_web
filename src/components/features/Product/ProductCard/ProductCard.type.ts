import type { ViewLayoutProp } from '../../../../app/(main)/product/product.type';
import type { paths } from '../../../../types/api/generated';

export type productType =
  paths['/v1/product/all']['get']['responses']['200']['content']['application/json']['productData']['results'][0];

export interface ProductCardProps {
  product: productType;
  authenticated: boolean;
  viewLayout?: ViewLayoutProp;
  className?: string;
}
