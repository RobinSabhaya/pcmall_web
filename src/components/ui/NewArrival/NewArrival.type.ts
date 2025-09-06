export interface NewArrivalItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  link: string;
  size: 'large' | 'medium' | 'small';
  theme: 'dark' | 'light';
}

export interface NewArrivalProps {
  className?: string;
}
