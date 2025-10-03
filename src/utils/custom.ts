export const formatPrice = (
  price: number,
  fractionDigits: number = 2
): number => +price.toFixed(fractionDigits);

export const calculateDiscount = (
  originalPrice: number,
  discount: number
): number => (originalPrice * discount) / 100;
