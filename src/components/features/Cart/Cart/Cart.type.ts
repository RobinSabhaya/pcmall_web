export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface CartSummary {
  subtotal: number;
  shipping: number;
  total: number;
}

export interface CartProps {
  items: CartItem[];
  summary: CartSummary;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onApplyCoupon: (code: string) => void;
  onUpdateCart: () => void;
  onProceedToCheckout: () => void;
}
