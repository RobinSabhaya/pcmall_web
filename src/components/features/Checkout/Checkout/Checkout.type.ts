import type { CartItem } from '../../Cart/Cart/Cart.type';
import type { BillingFormDetails } from '../BillingForm/BillingForm.type';

export interface PaymentMethod {
  id: 'bank' | 'cash';
  label: string;
}

export interface CheckoutProps {
  cartItems: CartItem[];
  onSubmit: (
    data: BillingFormDetails & { paymentMethod: string; couponCode?: string }
  ) => void;
  isLoading?: boolean;
}
