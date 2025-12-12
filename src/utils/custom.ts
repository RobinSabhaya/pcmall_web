import { APP_ROUTES } from './routes';

const { account, orders } = APP_ROUTES;

export const formatPrice = (
  price: number,
  fractionDigits: number = 2
): number => +price.toFixed(fractionDigits);

export const calculateDiscount = (
  originalPrice: number,
  discount: number
): number => (originalPrice * discount) / 100;

export const capitalizeString = (str: string): string => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

export const formatCategoryName = (categoryName: string) => {
  return capitalizeString(categoryName).replaceAll('-', ' ');
};

export const calculateCacheTime = (second: number) => second * 60 * 100;

export const generateNElemArr = (length: number) =>
  Array.from({ length }, (_, i) => i);

export const shouldAuthenticatedRoutes = [account, orders].map(
  route => `/${route}`
);
