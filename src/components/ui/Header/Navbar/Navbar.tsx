'use client';

import { useState } from 'react';

import type { NavbarProps } from './Navbar.type';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
  { label: 'About', href: '/about' },
  { label: 'Sign Up', href: '/signup' },
];

export default function Navbar({ className = '' }: NavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex-1 text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <button className="underline font-medium">ShopNow</button>
        </div>
        <div className="relative">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1"
          >
            English
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {isLangOpen && (
            <div className="absolute right-0 mt-1 bg-white text-black rounded shadow-lg py-1 min-w-24">
              <button className="block px-3 py-1 hover:bg-gray-100 w-full text-left">English</button>
              <button className="block px-3 py-1 hover:bg-gray-100 w-full text-left">Spanish</button>
            </div>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white border-b px-4 py-4 ${className}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-col gap-2 md:flex-row">
          {/* Logo */}
          <div className="text-2xl font-bold">Exclusive</div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </a>
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
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <div className='flex'>
                        <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 005 16h12M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4" />
              </svg>
            </button>
            </div>            

          </div>
        </div>
      </nav>
    </>
  );
}
