import { useState } from 'react';

import { Button } from '..';

import type { FilterTabProps } from './FilterTab.type';

const FilterTab = ({
  filterList,
  preSelectFilter,
  onFilterChange,
}: FilterTabProps) => {
  const [selectFilter, setSelectFilter] = useState<string>(preSelectFilter);
  return (
    <div className="flex space-x-1 bg-light-200 p-1 rounded-lg w-fit">
      {filterList.map(({ key, label }) => (
        <Button
          key={key}
          variant={selectFilter === key ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => {
            setSelectFilter(key as typeof selectFilter);
            onFilterChange(key);
          }}
          className={`${
            selectFilter === key
              ? 'text-white shadow-sm'
              : 'text-dark-700 hover:text-dark-900 hover:bg-light-100'
          } transition-all duration-200`}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default FilterTab;
