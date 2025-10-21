'use client';

import { useState } from 'react';

import Link from 'next/link';

import { useGetAllCart } from '../../../../hooks/query/Cart/useCartMutation';
import { UserIcon } from '../../Common/Dropdown';
import UserAccountDropdown from '../../Common/Dropdown/Dropdown';
import { DEFAULT_MENU_ITEMS } from '../../Common/Dropdown/utils';
import Input from '../../Common/Input/Input';
import TopBanner from '../Banner/TopBanner/TopBanner';

import type { NavbarProps } from './Navbar.type';
import { NAV_ITEMS } from './utils';

export default function Navbar({ className = '' }: NavbarProps) {
  // Tanstack query
  const { data } = useGetAllCart();
  const items = data?.items?.results;

  // state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <>
      <TopBanner />

      <nav
        className={`bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm transition-all duration-300 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                PCMall
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2" />
                </Link>
              ))}
            </div>

            {/* Desktop Search & Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <div
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? 'scale-105' : ''
                }`}
              >
                <Input
                  type="text"
                  placeholder="Search products..."
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`bg-gray-50 border-2 px-4 py-2.5 pr-12 rounded-xl text-sm w-72 transition-all duration-300 focus:outline-none focus:bg-white ${
                    isSearchFocused
                      ? 'border-blue-400 shadow-lg shadow-blue-100'
                      : 'border-transparent hover:border-gray-200'
                  }`}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-blue-600 transition-colors"
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

              <div className="flex items-center space-x-1">
                {/* Wishlist Icon  */}
                <Link
                  className="p-2.5 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110 group"
                  href="/wishlist"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors"
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
                </Link>

                {/* Cart Icon */}
                <Link
                  className="p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110 relative"
                  href="/cart"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {items?.length ?? 0}
                  </span>
                </Link>

                {/* User Icon */}
                <button
                  className="p-2.5 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:scale-110"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <UserIcon />
                </button>
              </div>
            </div>

            {/* Mobile Icons & Menu */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Cart Icon */}
              <Link
                className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200"
                href="/cart"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
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
              </Link>
              {/*   User Icon */}
              <button
                className="p-2 hover:bg-blue-50 rounded-xl transition-all duration-200"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <UserIcon />
              </button>

              {/* Hamburger menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200"
              >
                <svg
                  className="w-6 h-6 text-gray-600 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    transform: isMobileMenuOpen
                      ? 'rotate(90deg)'
                      : 'rotate(0deg)',
                  }}
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="border-t border-gray-100 bg-gray-50/50 backdrop-blur-sm">
              <div className="px-4 py-4 space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-xl transition-all duration-200 transform hover:translate-x-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile search */}
              <div className="px-4 pb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-white border-2 border-gray-200 px-4 py-3 pr-12 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all duration-300"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-gray-400"
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

                <div className="flex justify-center space-x-4 mt-4">
                  <button className="p-3 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110">
                    <svg
                      className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors"
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
                  <button className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110 relative">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
                      />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      2
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User dropdown */}
        <div
          className={`absolute right-4 top-full mt-2 z-50 transition-all duration-300 ${
            isDropdownOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <UserAccountDropdown
            menuItems={DEFAULT_MENU_ITEMS}
            isOpen={isDropdownOpen}
            onClose={() => {
              if (isDropdownOpen) {
                setIsDropdownOpen(true);
              } else {
                setIsDropdownOpen(false);
              }
            }}
          />
        </div>
      </nav>
    </>
  );
}
