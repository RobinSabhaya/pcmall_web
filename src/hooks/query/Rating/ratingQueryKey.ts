export const queryKeys = {
  ratings: {
    all: ['ratings'] as const,
    lists: () => [...queryKeys.ratings.all, 'list'] as const,
    list: (filters?: Record<string, unknown>) =>
      [...queryKeys.ratings.lists(), filters] as const,
    count: (filters?: Record<string, unknown>) =>
      [...queryKeys.ratings.all, 'count', filters] as const,
  },
} as const;
