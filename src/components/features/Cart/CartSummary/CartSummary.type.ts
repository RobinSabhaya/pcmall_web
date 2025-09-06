import type { CartSummary } from '../Cart/Cart.type';

export interface CartSummaryProps {
  summary: CartSummary;
  onApplyCoupon: (code: string) => void;
  onProceedToCheckout: () => void;
}
