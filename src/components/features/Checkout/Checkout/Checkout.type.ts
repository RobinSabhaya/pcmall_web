import type { CartItem } from '../../Cart/Cart/Cart.type';
import type { BillingFormData } from '../BillingForm/BillingForm.type';

export interface PaymentMethod {
  id: 'bank' | 'cash';
  label: string;
}

export interface CheckoutProps {
  cartItems: CartItem[];
  onSubmit: (
    data: BillingFormData & { paymentMethod: string; couponCode?: string }
  ) => void;
  isLoading?: boolean;
}
