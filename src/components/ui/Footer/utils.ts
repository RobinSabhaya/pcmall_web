import type { FooterSection } from './Footer.type';

export const footerSections: FooterSection[] = [
  {
    title: 'Support',
    links: [
      { label: 'test address,', href: '#' },
      { label: 'test address', href: '#' },
      {
        label: 'test_address@gmail.com',
        href: 'mailto:test_address@gmail.com',
      },
      { label: '+1234567891', href: 'tel:+1234567891' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'My Account', href: '/account' },
      { label: 'Login / Register', href: '/auth' },
      { label: 'Cart', href: '/cart' },
      { label: 'Wishlist', href: '/wishlist' },
      { label: 'Shop', href: '/shop' },
    ],
  },
  {
    title: 'Quick Link',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms Of Use', href: '/terms' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
