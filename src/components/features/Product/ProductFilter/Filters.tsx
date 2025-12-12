'use client';

import { useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '../../../ui/Common';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../ui/Common/Shadcn/dialog';
import { ScrollArea } from '../../../ui/Common/Shadcn/scroll-area';

import type { FilterProps, GroupKey } from './Filter.type';
import { Group } from './Group';
import { COLORS, GENDERS, getArrayParam, PRICES, SIZES } from './utils';

export default function Filters({
  isOpenFilter,
  setIsOpenFilter,
}: FilterProps) {
  const activeCounts = {
    gender: 10,
    size: 20,
    color: 30,
    price: 40,
  };

  // state
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [expanded, setExpanded] = useState<Record<GroupKey, boolean>>({
    gender: true,
    size: true,
    color: true,
    price: true,
  });

  const initialSelectFilter = {
    gender: '',
    size: '',
    color: '',
    price: '',
  };
  const [selectFilters, setSelectFilters] =
    useState<Record<GroupKey, string>>(initialSelectFilter);

  const onToggle = (key: GroupKey, value: string) => {
    setSelectFilters(() => ({ ...selectFilters, [key]: value }));
  };

  const clearAll = () => {
    router.push(pathname, {
      scroll: false,
    });
  };

  const handleClose = () => setIsOpenFilter(false);

  const onApplyFilter = () => {
    const params = new URLSearchParams();

    Object.keys(selectFilters).map(f => {
      const filter = selectFilters[f as GroupKey];
      if (filter) {
        params.set(f, filter);
      }
    });

    router.push(`?${params}`, { scroll: false });

    // Cleanup
    setIsOpenFilter(false);
  };

  return (
    <>
      <Dialog open={isOpenFilter} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-body-medium text-dark-900">
              Filters
            </DialogTitle>
            <DialogDescription className="text-body-medium text-dark-900 justify-end">
              {/* Clear all */}
              <button
                className="flex justify-self-end text-caption text-dark-700 underline cursor-pointer"
                onClick={clearAll}
              >
                Clear all
              </button>
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="overflow-y-auto max-h-[60vh]">
            {/* Gender */}
            <Group
              title={`Gender ${
                activeCounts.gender ? `(${activeCounts.gender})` : ''
              }`}
              k="gender"
              expanded={expanded}
              setExpanded={setExpanded}
            >
              <ul className="space-y-2">
                {GENDERS.map(g => {
                  const checked =
                    getArrayParam(searchParams, 'gender', g) ||
                    selectFilters.gender === g;
                  return (
                    <li key={g} className="flex items-center gap-2">
                      <input
                        id={`gender-${g}`}
                        type="checkbox"
                        className="h-4 w-4 accent-dark-900 cursor-pointer"
                        checked={checked}
                        onChange={() => onToggle('gender' as GroupKey, g)}
                      />
                      <label
                        htmlFor={`gender-${g}`}
                        className="text-body text-dark-900"
                      >
                        {g[0]?.toUpperCase() + g.slice(1)}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </Group>

            {/* Size */}
            <Group
              title={`Size ${
                activeCounts.size ? `(${activeCounts.size})` : ''
              }`}
              k="size"
              expanded={expanded}
              setExpanded={setExpanded}
            >
              <ul className="grid grid-cols-2 gap-2">
                {SIZES.map(s => {
                  const checked =
                    getArrayParam(searchParams, 'size', s) ||
                    selectFilters.size === s;
                  return (
                    <li key={s}>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-dark-900 cursor-pointer"
                          checked={checked}
                          onChange={() => onToggle('size', s)}
                        />
                        <span className="text-body">{s}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </Group>

            {/* Color */}
            <Group
              title={`Color ${
                activeCounts.color ? `(${activeCounts.color})` : ''
              }`}
              k="color"
              expanded={expanded}
              setExpanded={setExpanded}
            >
              <ul className="grid grid-cols-2 gap-2">
                {COLORS.map(c => {
                  const checked =
                    getArrayParam(searchParams, 'color', c) ||
                    selectFilters.color === c;
                  return (
                    <li key={c} className="flex items-center gap-2">
                      <input
                        id={`color-${c}`}
                        type="checkbox"
                        className="h-4 w-4 accent-dark-900 cursor-pointer"
                        checked={checked}
                        onChange={() => onToggle('color', c)}
                      />
                      <label
                        htmlFor={`color-${c}`}
                        className="text-body capitalize"
                      >
                        {c}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </Group>

            {/* Price */}
            <Group
              title={`Price ${
                activeCounts.price ? `(${activeCounts.price})` : ''
              }`}
              k="price"
              expanded={expanded}
              setExpanded={setExpanded}
            >
              <ul className="space-y-2">
                {PRICES.map(p => {
                  const checked =
                    getArrayParam(searchParams, 'price', p.id) ||
                    selectFilters.price === p.id;
                  return (
                    <li key={p.id} className="flex items-center gap-2">
                      <input
                        id={`price-${p.id}`}
                        type="checkbox"
                        className="h-4 w-4 accent-dark-900 cursor-pointer"
                        checked={checked}
                        onChange={() => onToggle('price', p.id)}
                      />
                      <label htmlFor={`price-${p.id}`} className="text-body">
                        {p.label}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </Group>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={onApplyFilter}>
              Apply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
