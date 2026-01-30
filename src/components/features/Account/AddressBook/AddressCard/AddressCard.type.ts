import type { paths } from '../../../../../types';

export type Address =
  paths['/v1/user/details']['get']['responses']['200']['content']['application/json']['data']['userData']['addresses'][0];

export interface AddressCardProp {
  address: Address;
  onEdit: ({ address }: { address: Address }) => void;
  onDelete: ({ address }: { address: Address }) => void;
}
