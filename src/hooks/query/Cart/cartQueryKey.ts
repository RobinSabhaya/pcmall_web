export const cartQueryKeys = {
  cart: {
    all: ['cart'] as const,
    items: () => [...cartQueryKeys.cart.all, 'items'] as const,
  },
} as const;
