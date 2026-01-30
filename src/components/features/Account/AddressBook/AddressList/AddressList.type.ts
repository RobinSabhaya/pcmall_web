import type { Dispatch, SetStateAction } from 'react';

import type { Address } from '../AddressCard/AddressCard.type';

export interface AddressListProp {
  showAddAddressModal: boolean;
  setShowAddAddressModal: Dispatch<SetStateAction<boolean>>;
  addressList: Address[];
  isLoading: boolean;
}
