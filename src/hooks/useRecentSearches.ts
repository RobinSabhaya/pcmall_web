'use client';

import { useEffect, useState } from 'react';

const RECENT_SEARCHES_KEY = 'recent_searches';
const MAX_RECENT_SEARCHES = 10;

export function useRecentSearches(searchQuery: string) {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(RECENT_SEARCHES_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const regex = new RegExp(searchQuery, 'i');
          setRecentSearches(
            Array.isArray(parsed) ? parsed.filter(ele => regex.test(ele)) : []
          );
        } catch {
          setRecentSearches([]);
        }
      }
    }
  }, [searchQuery]);

  const addSearch = (query: string) => {
    if (!query.trim()) return;

    const trimmedQuery = query.trim();
    setRecentSearches(prev => {
      const filtered = prev.filter(
        search => search.toLowerCase() !== trimmedQuery.toLowerCase()
      );
      const updated = [trimmedQuery, ...filtered].slice(0, MAX_RECENT_SEARCHES);

      if (typeof window !== 'undefined') {
        sessionStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      }

      return updated;
    });
  };

  const removeSearch = (query: string) => {
    setRecentSearches(prev => {
      const updated = prev.filter(search => search !== query);

      if (typeof window !== 'undefined') {
        sessionStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      }

      return updated;
    });
  };

  const clearAll = () => {
    setRecentSearches([]);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(RECENT_SEARCHES_KEY);
    }
  };

  return {
    recentSearches,
    addSearch,
    removeSearch,
    clearAll,
  };
}
