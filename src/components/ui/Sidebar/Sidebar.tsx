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
              <svg
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
