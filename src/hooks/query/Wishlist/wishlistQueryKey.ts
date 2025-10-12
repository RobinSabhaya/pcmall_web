export const wishlistQueryKeys = {
  wishlist: {
    all: ['wishlist'] as const,
    items: () => [...wishlistQueryKeys.wishlist.all, 'items'] as const,
  },
} as const;
