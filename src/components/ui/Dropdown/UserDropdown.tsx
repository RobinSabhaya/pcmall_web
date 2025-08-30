'use client';

import type { UserAccountButtonProps } from './Dropdown.type';

export default function UserAccountButton({
  className = '',
  onClick,
  isActive = false,
}: UserAccountButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative p-2 rounded-full transition-colors ${
        isActive ? 'bg-red-500 text-white' : 'text-gray-700 hover:text-red-500'
      } ${className}`}
      aria-label="User account menu"
    >
      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
    </button>
  );
}
