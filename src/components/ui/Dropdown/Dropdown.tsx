'use client';

import { useEffect, useRef } from 'react';

import type { UserAccountDropdownProps, UserAccountMenuItem } from './Dropdown.type';
import { UserIcon, OrderIcon, CancelIcon, ReviewIcon, LogoutIcon } from './DropdownIcons';

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
    onClick: () => {
      // Handle logout logic
    //   console.log('Logout clicked');
    },
  },
];

export default function UserAccountDropdown({
  className = '',
  isOpen,
  onClose,
  menuItems = DEFAULT_MENU_ITEMS,
  ...props
}: UserAccountDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item: UserAccountMenuItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      window.location.href = item.href;
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`relative right-0 top-full mt-2 w-64 bg-black/80 backdrop-blur-sm rounded-lg shadow-xl z-50 overflow-hidden transition-all duration-200 ${
      isOpen
        ? 'opacity-100 scale-100 translate-y-0'
        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
    } ${className}`}
    {...props}
    >
      <div className="py-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
              item.variant === 'danger'
                ? 'text-red-300 hover:bg-red-900/20'
                : 'text-white hover:bg-white/10'
            }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
