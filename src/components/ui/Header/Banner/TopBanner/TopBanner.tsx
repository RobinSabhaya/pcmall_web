'use client';

import { useState, useEffect } from 'react';

export default function TopBanner() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    {
      text: '🔥 Summer Sale - Up to 50% OFF on All Products!',
      cta: 'Shop Now',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      text: '🚚 FREE Express Delivery on Orders Over $50',
      cta: 'Order Now',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      text: '⚡ Flash Sale - Limited Time Only!',
      cta: 'Grab Deal',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer(prev => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [offers.length]);

  if (!isVisible) return null;

  return (
    <div
      className={`bg-gradient-to-r ${offers[currentOffer]?.gradient} text-white text-sm py-3 px-4 relative transition-all duration-500`}
    >
      <div className="relative flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex-1 flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-3">
            <span className="font-medium animate-pulse">
              {offers[currentOffer]?.text}
            </span>
            <button className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full font-semibold transition-all duration-200 hover:scale-105 backdrop-blur-sm hidden md:flex">
              {offers[currentOffer]?.cta}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 4h2.764L13 9.236 11.618 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium">EN</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-32 z-[9999]">
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-sm">
                  🇺🇸 English
                </button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-sm">
                  🇪🇸 Español
                </button>
                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-sm">
                  🇫🇷 Français
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white/60 transition-all duration-1000 ease-linear"
          style={{ width: `${((currentOffer + 1) / offers.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
