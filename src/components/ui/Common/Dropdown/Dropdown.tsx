'use client';

import { useEffect, useRef } from 'react';

import Link from 'next/link';

import type { UserAccountDropdownProps } from './Dropdown.type';

export default function UserAccountDropdown({
  className = '',
  isOpen,
  onClose,
  menuItems,
  ...props
}: UserAccountDropdownProps) {
  // state
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tanstack query
  // const {mutate : onLogout} = useLogout()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (onClose) onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

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
        {menuItems?.map(item => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href ?? '#'}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                item.variant === 'danger'
                  ? 'text-brand-primary-hover hover:bg-brand-primary'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => {
                if (item?.onClick && item.label == 'Logout') {
                  // onLogout({
                  //   refreshToken :
                  // })
                }
              }}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
