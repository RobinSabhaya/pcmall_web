import type { UserAccountMenuItem } from './Dropdown.type';
import { LogoutIcon, OrderIcon, ReviewIcon, UserIcon } from './DropdownIcons';

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
