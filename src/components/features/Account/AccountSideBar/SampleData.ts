import type { SidebarItem } from './AccountSidebar.type';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'manage-account',
    label: 'Manage My Account',
    children: [
      { id: 'profile', label: 'My Profile' },
      { id: 'address-book', label: 'Address Book' },
      { id: 'payment-options', label: 'My Payment Options' },
    ],
  },
  {
    id: 'orders',
    label: 'My Orders',
    children: [
      { id: 'returns', label: 'My Returns' },
      { id: 'cancellations', label: 'My Cancellations' },
    ],
  },
  { id: 'wishlist', label: 'My WishList' },
];
