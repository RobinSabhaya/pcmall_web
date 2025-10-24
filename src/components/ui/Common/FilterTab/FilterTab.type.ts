export interface FilterItem {
  key: string;
  label: string;
}

export interface FilterTabProps {
  filterList: FilterItem[];
  preSelectFilter: string;
  onFilterChange: (key: string) => void;
}
