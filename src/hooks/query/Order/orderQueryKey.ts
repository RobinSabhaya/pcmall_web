export const orderQueryKeys = {
  orders: {
    all: ['orders'] as const,
    lists: () => [...orderQueryKeys.orders.all, 'list'] as const,
    list: (filters?: Record<string, unknown>) =>
      [...orderQueryKeys.orders.lists(), filters] as const,
  },
} as const;
