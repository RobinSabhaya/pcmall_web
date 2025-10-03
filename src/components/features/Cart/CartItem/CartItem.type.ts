import type { Dispatch, SetStateAction } from 'react';

import type { paths } from '../../../../types/api/generated';

export type item =
  paths['/v1/cart/all']['get']['responses']['200']['content']['application/json']['data']['200']['data']['items']['results'][0];

export interface CartItemProps {
  item: item;
  setIsCartItemChange: Dispatch<SetStateAction<number>>;
}
