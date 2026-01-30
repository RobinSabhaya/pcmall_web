import type { Address } from './AddressCard.type';

export const formatAddress = (address: Address): string => {
  const parts: string[] = [];

  // Add line1 (required)
  if (address.line1?.trim()) {
    parts.push(address.line1.trim());
  }

  // Add line2 if exists
  if (address.line2?.trim()) {
    parts.push(address.line2.trim());
  }

  // Add city and state
  const cityState: string[] = [];
  if (address.city?.trim()) {
    cityState.push(address.city.trim());
  }
  if (address.state?.trim()) {
    cityState.push(address.state.trim());
  }
  if (cityState.length > 0) {
    parts.push(cityState.join(', '));
  }

  // Add country
  if (address.country?.trim()) {
    parts.push(address.country.trim());
  }

  return parts.length > 0 ? parts.join('\n') : 'Invalid address';
};
