import type { JSX } from 'react';

import type { paths } from '../../types';

export type UserDetails =
  paths['/v1/user/details']['get']['responses']['200']['content']['application/json']['data']['userData'];

export interface UserProviderProp {
  children: JSX.Element;
  value: UserDetails;
}
