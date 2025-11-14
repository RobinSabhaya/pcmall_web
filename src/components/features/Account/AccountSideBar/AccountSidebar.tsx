'use client';

import { useState } from 'react';

import type { AccountSidebarProps, SidebarItem } from './AccountSidebar.type';
import { SIDEBAR_ITEMS } from './SampleData';

export default function AccountSidebar({
  activeItem = 'profile',
  onItemSelect,
}: AccountSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    'manage-account',
  ]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleItemClick = (item: SidebarItem) => {
    if (item.children) {
      toggleExpanded(item.id);
    } else {
      onItemSelect?.(item.id);
    }
  };

  const renderItem = (item: SidebarItem, level = 0) => (
    <div key={item.id}>
      <button
        onClick={() => handleItemClick(item)}
        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
          activeItem === item.id
            ? 'text-brand-primary font-medium'
            : 'text-gray-700'
        } ${level > 0 ? 'pl-8' : ''}`}
      >
        {item.label}
      </button>
      {item.children && expandedItems.includes(item.id) && (
        <div className="ml-4">
          {item.children.map(child => renderItem(child, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <aside className="w-64 bg-white">
      <nav className="py-4">{SIDEBAR_ITEMS.map(item => renderItem(item))}</nav>
    </aside>
  );
}
