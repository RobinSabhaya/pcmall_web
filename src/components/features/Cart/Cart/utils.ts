import type { item } from '../CartItem/CartItem.type';

export const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Cart', href: '/cart' },
];

export function calculatePayout(items: item[]) {
  const shipping = 0;
  const subtotal =
    items?.reduce((acc, item) => {
      if (item?.product_variants?.product_skus[0]?.price) {
        return (
          acc + item?.product_variants?.product_skus[0]?.price * item?.quantity
        );
      } else {
        return acc;
      }
    }, 0) ?? 0;

  return {
    shipping,
    subtotal,
    total: shipping + subtotal,
  };
}
