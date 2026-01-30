import { type RefreshTokensResponse } from '../../hooks';
// eslint-disable-next-line import/no-cycle
import { axiosInstance } from '../api';

export const authService = {
  refreshTokens: async () => {
    const res: RefreshTokensResponse = await axiosInstance.post(
      '/auth/refresh-tokens'
    );
    return res;
  },
};
