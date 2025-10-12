import type { paths } from '../../../../types/api/generated';

type addressTypes =
  paths['/v1/user/details']['get']['responses']['200']['content']['application/json']['data']['userData']['addresses'][0];

export const generateAddressFormat = (address: addressTypes): string => {
  const requiredFields = ['line1', 'city', 'state', 'country'] as const;

  // Validate required fields
  for (const field of requiredFields) {
    const value = address[field];
    if (typeof value !== 'string' || !value.trim()) {
      return 'Invalid address';
    }
  }

  const { line1, city, state, country } = address;

  return [
    line1.trim(),
    `\n${city.trim()}, ${state.trim()}`,
    country.trim(),
  ].join(', ');
};
