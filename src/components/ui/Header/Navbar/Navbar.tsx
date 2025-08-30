'use client';

import { useState } from 'react';

import Link from 'next/link';

import { UserAccountDropdown } from '../../Dropdown';
import { DEFAULT_MENU_ITEMS } from '../../Dropdown/Dropdown';
import TopBanner from '../Banner/TopBanner/TopBanner';

import type { NavbarProps } from './Navbar.type';

export default function Navbar({ className = '' }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
    { label: 'Sign Up', href: '/signup' },
  ];

  return (
    <>
      {/* Top Banner */}
      <TopBanner />

      {/* Main Navbar */}
      <nav className={`bg-white border-b px-4 py-4 ${className}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-col gap-2 md:flex-row">
          {/* Logo */}
          <div className="text-2xl font-bold">Exclusive</div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search & Icons */}
          <div className="flex items-center space-x-4 flex-col md:flex-row">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 px-4 py-2 pr-10 rounded text-sm w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex">
            <button
              className="p-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="flex w-full justify-end items-center z-10 absolute -mt-5">
        {isDropdownOpen && (
          <UserAccountDropdown
            menuItems={DEFAULT_MENU_ITEMS}
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(true)}
            onToggle={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          />
        )}
      </div>
    </>
  );
}
