export interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
  variant?: 'default' | 'primary';
}

export interface StatsProps {
  stats: StatItem[];
}
