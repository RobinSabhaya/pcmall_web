import type { UserAccountMenuItem } from './Dropdown.type';
import {
  CancelIcon,
  LogoutIcon,
  OrderIcon,
  ReviewIcon,
  UserIcon,
} from './DropdownIcons';

export const DEFAULT_MENU_ITEMS: UserAccountMenuItem[] = [
  {
    id: 'account',
    label: 'Manage My Account',
    icon: UserIcon,
    href: '/account',
  },
  {
    id: 'orders',
    label: 'My Order',
    icon: OrderIcon,
    href: '/orders',
  },
  {
    id: 'cancellations',
    label: 'My Cancellations',
    icon: CancelIcon,
    href: '/cancellations',
  },
  {
    id: 'reviews',
    label: 'My Reviews',
    icon: ReviewIcon,
    href: '/reviews',
  },
  {
    id: 'logout',
    label: 'Logout',
    icon: LogoutIcon,
    variant: 'danger' as const,
    onClick: () => {},
  },
];
