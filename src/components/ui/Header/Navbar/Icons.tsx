import Image from 'next/image';
import Link from 'next/link';

import type { CartIconProp } from './icon.type';

export function CartIcon({ count }: CartIconProp) {
  return (
    <Link
      className="p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110 relative"
      href="/cart"
    >
      <Image src="/svg/general/cart.svg" alt="cart" height={30} width={30} />
      <span className="absolute top-1 right-1 bg-brand-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {count}
      </span>
    </Link>
  );
}

export function WishlistIcon() {
  return (
    <Link
      className="p-2.5 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110 group"
      href="/wishlist"
    >
      <Image src="/svg/general/like.svg" alt="like" height={30} width={30} />
    </Link>
  );
}

export function SearchIcon() {
  return (
    <Image src="/svg/general/search.svg" alt="search" height={20} width={20} />
  );
}

export function UserIcon() {
  return (
    <Image src="/svg/general/user.svg" alt="user" height={30} width={30} />
  );
}
