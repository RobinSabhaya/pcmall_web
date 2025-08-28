export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface NavbarProps {
  className?: string;
}

export interface LanguageOption {
  code: string;
  label: string;
}
