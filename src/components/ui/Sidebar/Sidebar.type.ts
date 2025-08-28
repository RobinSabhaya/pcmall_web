export interface SidebarItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  icon?: React.ReactNode;
}

export interface SidebarProps {
  className?: string;
}
