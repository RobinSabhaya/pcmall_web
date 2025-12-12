import { OrderList } from '../../Order';
import WishlistSection from '../../Wishlist/WishlistSection';
import AddressBook from '../AddressBook';
import ProfileForm from '../ProfileForm/ProfileForm';

export const COMPONENTS_MAP = {
  profile: ProfileForm,
  'address-book': () => <AddressBook />,
  'payment-options': () => <div>Coming soon...</div>,
  returns: () => <OrderList />,
  wishlist: () => <WishlistSection />,
};

export const breadCrumbList = [
  { label: 'Home', href: '/' },
  { label: 'My Account', href: '/account' },
];
