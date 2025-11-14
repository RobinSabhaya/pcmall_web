import Image from 'next/image';

import type { SidebarProps } from './Sidebar.type';
import { SIDEBAR_ITEMS } from './utils';

export default function Sidebar({ className = '' }: SidebarProps) {
  return (
    <aside className={`w-64 bg-white ${className}`}>
      <nav className="py-4">
        {SIDEBAR_ITEMS.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
          >
            <span className="text-gray-700">{item.label}</span>
            {item.hasDropdown && (
              <Image
                src="/svg/general/right.svg"
                alt="Right arrow"
                width={6}
                height={6}
              />
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
