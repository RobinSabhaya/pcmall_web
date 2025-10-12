/* eslint-disable no-duplicate-imports */
import type { JSX } from 'react';
import { createContext } from 'react';

export interface CheckoutProvider {
  children: JSX.Element;
  value: string;
}

export const CheckoutContext = createContext<string>('');

export const CheckoutProvider = ({ children, value }: CheckoutProvider) => {
  return (
    <>
      <CheckoutContext.Provider value={value}>
        {children}
      </CheckoutContext.Provider>
    </>
  );
};
