export interface RecentSearchDropdownProps {
  isOpen: boolean;
  searchQuery: string;
  onSelect: (query: string) => void;
  onClose: () => void;
}
