export interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
}