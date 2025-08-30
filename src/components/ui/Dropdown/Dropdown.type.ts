export interface UserAccountMenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'danger';
}

export interface UserAccountDropdownProps {
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  menuItems?: UserAccountMenuItem[];
}

export interface UserAccountButtonProps {
  className?: string;
  onClick: () => void;
  isActive?: boolean;
}
