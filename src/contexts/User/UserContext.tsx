import { createContext, useContext } from 'react';

import type { UserDetails, UserProviderProp } from './UserContext.type';

const UserContext = createContext<UserDetails | null>(null);

export const UserProvider = ({ children, value }: UserProviderProp) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('User context must be in wrap with User Provider');
  }

  return context;
};
