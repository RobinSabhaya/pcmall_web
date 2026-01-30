'use client';

import { useRef } from 'react';

import { Clock, X } from 'lucide-react';

import { useRecentSearches } from '../../../../hooks/useRecentSearches';

import type { RecentSearchDropdownProps } from './RecentSearchDropdown.type';

export default function RecentSearchDropdown({
  isOpen,
  searchQuery,
  onSelect,
}: RecentSearchDropdownProps) {
  // state
  const wrapperRef = useRef(null);
  const { recentSearches, removeSearch, clearAll } =
    useRecentSearches(searchQuery);

  if (!isOpen || recentSearches.length === 0) return null;

  const handleSearchClick = (query: string) => {
    onSelect(query);
  };

  const handleRemove = (e: React.MouseEvent, query: string) => {
    e.stopPropagation();
    removeSearch(query);
  };

  return (
    <div
      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200/50 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      ref={wrapperRef}
    >
      <div className="p-2">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 mb-1">
          <h3 className="text-sm font-semibold text-gray-700">
            Recent Searches
          </h3>
          {recentSearches.length > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Search Items */}
        <div className="space-y-1">
          {recentSearches.map((search, index) => (
            <div
              key={`${search}-${index}`}
              className="group flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-all duration-200 cursor-pointer"
              onClick={() => handleSearchClick(search)}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                {/* Clock icon */}
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-700 truncate">{search}</span>
              </div>
              <button
                onClick={e => handleRemove(e, search)}
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 rounded transition-all duration-200 flex-shrink-0 ml-2"
                aria-label="Remove search"
              >
                <X className="w-4 h-4 text-brand-primary" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
