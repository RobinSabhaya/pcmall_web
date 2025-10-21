import WishlistSection from '../../Wishlist/WishlistSection';
import ProfileForm from '../ProfileForm/ProfileForm';

export const COMPONENTS_MAP = {
  profile: ProfileForm,
  'address-book': () => <div>Coming soon...</div>,
  'payment-options': () => <div>Coming soon...</div>,
  returns: () => <div>Coming soon...</div>,
  cancellations: () => <div>Coming soon...</div>,
  wishlist: () => <WishlistSection />,
};

export const breadCrumbList = [
  { label: 'Home', href: '/' },
  { label: 'My Account', href: '/account' },
];
