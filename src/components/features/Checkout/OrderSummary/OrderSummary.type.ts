import type { CartItem } from '../../Cart/Cart/Cart.type';
import type { PaymentMethod } from '../Checkout/Checkout.type';

export interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  onApplyCoupon: (code?: string) => void;
  paymentMethods: PaymentMethod[];
  selectedPayment: string;
  onPaymentChange: (method: string) => void;
  onPlaceOrder: () => void;
  isLoading?: boolean;
}
