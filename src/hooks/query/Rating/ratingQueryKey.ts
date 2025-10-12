export const ratingQueryKeys = {
  ratings: {
    all: ['ratings'] as const,
    lists: () => [...ratingQueryKeys.ratings.all, 'list'] as const,
    list: (filters?: Record<string, unknown>) =>
      [...ratingQueryKeys.ratings.lists(), filters] as const,
    count: (filters?: Record<string, unknown>) =>
      [...ratingQueryKeys.ratings.all, 'count', filters] as const,
  },
} as const;
