export const productQueryKeys = {
  // Products
  products: {
    all: ['products'] as const,
    lists: () => [...productQueryKeys.products.all, 'list'] as const,
    list: (filters?: Record<string, unknown>) =>
      [...productQueryKeys.products.lists(), filters] as const,
  },
} as const;
