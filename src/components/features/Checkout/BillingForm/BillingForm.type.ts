import type { Dispatch, SetStateAction } from 'react';

export interface BillingFormDetails {
  line1: string;
  line2: string;
  state: string;
  city: string;
  country: string;
}

export interface BillingFormProps {
  setSelectedAddress: Dispatch<SetStateAction<string>>;
  selectedAddress: string;
}
