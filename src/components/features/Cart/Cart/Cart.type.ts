export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface CartSummaryType {
  subtotal: number;
  shipping: number;
  total: number;
}
