import type { Address } from '../AddressCard/AddressCard.type';

export interface AddNewAddressModalProp {
  showAddAddressModal: boolean;
  handleClose: () => void;
  address: Address | null;
}

export interface AddNewAddressForm {
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
}
