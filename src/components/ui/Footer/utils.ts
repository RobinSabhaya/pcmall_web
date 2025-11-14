import type { FooterSection } from './Footer.type';

export const footerSections: FooterSection[] = [
  {
    title: 'Support',
    links: [
      { label: 'address,', href: '#' },
      { label: 'address', href: '#' },
      {
        label: 'pcmall@gmail.com',
        href: 'mailto:pcmall@gmail.com',
      },
      { label: '+1234567891', href: 'tel:+1234567891' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'My Account', href: '/account' },
      { label: 'Login / Register', href: '/auth/sign-in' },
      { label: 'Cart', href: '/cart' },
      { label: 'Wishlist', href: '/wishlist' },
      { label: 'Shop', href: '/' },
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
