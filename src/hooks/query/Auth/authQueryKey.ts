export const queryKeys = {
  auth: {
    all: ['auth'] as const,
    user: () => [...queryKeys.auth.all, 'user'] as const,
    signup: ['sign-up'] as const,
    login: ['login'] as const,
    logout: ['logout'] as const,
    refreshTokens: ['refresh-tokens'] as const,
  },
} as const;
