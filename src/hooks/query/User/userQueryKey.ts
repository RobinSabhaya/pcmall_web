export const queryKeys = {
  users: {
    all: ['users'] as const,
    details: () => [...queryKeys.users.all, 'detail'] as const,
    addresses: () => [...queryKeys.users.all, 'addresses'] as const,
  },
} as const;
