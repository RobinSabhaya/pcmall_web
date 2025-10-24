import type { paths } from '../../../../types';

export type OrderItem =
  paths['/v1/order/all']['get']['responses']['200']['content']['application/json']['data']['ordersData']['results'][0];

export interface OrderItemProps {
  order: OrderItem;
}
