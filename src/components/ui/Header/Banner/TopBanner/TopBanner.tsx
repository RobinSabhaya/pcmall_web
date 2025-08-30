'use client';
import { useState } from 'react';

export default function TopBanner() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
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
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isLangOpen && (
          <div className="absolute right-0 mt-1 bg-white text-black rounded shadow-lg py-1 min-w-24">
            <button className="block px-3 py-1 hover:bg-gray-100 w-full text-left">
              English
            </button>
            <button className="block px-3 py-1 hover:bg-gray-100 w-full text-left">
              Spanish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
