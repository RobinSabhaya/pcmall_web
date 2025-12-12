import type { ReadonlyURLSearchParams } from 'next/navigation';

export const GENDERS = ['men', 'women', 'unisex'] as const;
export const SIZES = ['XS', 'S', 'M', 'L', 'XL'] as const;
export const COLORS = [
  'black',
  'white',
  'red',
  'green',
  'blue',
  'grey',
] as const;

export const PRICES = [
  { id: '0-1000', label: '₹0 - ₹1,000' },
  { id: '1000-5000', label: '₹1,000 - ₹5,000' },
  { id: '5000-10000', label: '₹5,000 - ₹10,000' },
  { id: '10000-1000000', label: 'Over ₹10,000' },
] as const;

export const SORT_OPTIONS = [
  { label: 'Title (A → Z)', value: 'title:asc' },
  { label: 'Title (Z → A)', value: 'title:desc' },
  {
    label: 'Price (High → Low)',
    value: 'product_variants.product_skus.price:desc',
  },
  {
    label: 'Price (Low → High)',
    value: 'product_variants.product_skus.price:asc',
  },
] as const;

export const addQuery = (
  key: string,
  value: string,
  searchParams: ReadonlyURLSearchParams,
  pathname: string
) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(key, value); // add or update query param
  return `${pathname}?${params.toString()}`;
};

export const getArrayParam = (
  searchParams: ReadonlyURLSearchParams,
  key: string,
  value: string
) => !!searchParams.has(key, value);
