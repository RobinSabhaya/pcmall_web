export interface SidebarItem {
  id: string;
  label: string;
  children?: SidebarItem[];
}

export interface AccountSidebarProps {
  activeItem?: string;
  onItemSelect?: (itemId: string) => void;
}
