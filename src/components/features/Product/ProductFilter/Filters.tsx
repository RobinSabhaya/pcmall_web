'use client';

import { useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type { GroupKey } from './Filter.type';
import {
  addQuery,
  COLORS,
  GENDERS,
  getArrayParam,
  PRICES,
  SIZES,
} from './utils';

export default function Filters() {
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
  const onToggle = (key: GroupKey, value: string) => {
    const path = addQuery(key, value, searchParams, pathname);
    router.push(path, { scroll: false });
  };

  const clearAll = () => {
    router.push(`${pathname}?category=${searchParams.get('category')}`, {
      scroll: false,
    });
  };

  const Group = ({
    title,
    children,
    k,
  }: {
    title: string;
    children: import('react').ReactNode;
    k: GroupKey;
  }) => (
    <div className="border-b border-light-300 py-4">
      <button
        className="flex w-full items-center justify-between text-body-medium text-dark-900"
        onClick={() => setExpanded(s => ({ ...s, [k]: !s[k] }))}
        aria-expanded={expanded[k]}
        aria-controls={`${k}-section`}
      >
        <span>{title}</span>
        <span className="text-caption text-dark-700">
          {expanded[k] ? '−' : '+'}
        </span>
      </button>
      <div
        id={`${k}-section`}
        className={`${expanded[k] ? 'mt-3 block' : 'hidden'}`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <>
      <div className="mb-4 flex items-center justify-between md:hidden">
        <button
          className="rounded-md border border-light-300 px-3 py-2 text-body-medium"
          aria-haspopup="dialog"
        >
          Filters
        </button>
        <button
          className="text-caption text-dark-700 underline"
          onClick={clearAll}
        >
          Clear all
        </button>
      </div>

      <aside className="sticky top-20 hidden h-fit min-w-60 rounded-lg border border-light-300 bg-light-100 p-4 md:block">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-body-medium text-dark-900">Filters</h3>
          <button
            className="text-caption text-dark-700 underline"
            onClick={clearAll}
          >
            Clear all
          </button>
        </div>

        <Group
          title={`Gender ${
            activeCounts.gender ? `(${activeCounts.gender})` : ''
          }`}
          k="gender"
        >
          <ul className="space-y-2">
            {GENDERS.map(g => {
              const checked = getArrayParam(searchParams, g);
              return (
                <li key={g} className="flex items-center gap-2">
                  <input
                    id={`gender-${g}`}
                    type="checkbox"
                    className="h-4 w-4 accent-dark-900"
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

        <Group
          title={`Size ${activeCounts.size ? `(${activeCounts.size})` : ''}`}
          k="size"
        >
          <ul className="grid grid-cols-5 gap-2">
            {SIZES.map(s => {
              const checked = getArrayParam(searchParams, s);
              return (
                <li key={s}>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-dark-900"
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

        <Group
          title={`Color ${activeCounts.color ? `(${activeCounts.color})` : ''}`}
          k="color"
        >
          <ul className="grid grid-cols-2 gap-2">
            {COLORS.map(c => {
              const checked = getArrayParam(searchParams, c);
              return (
                <li key={c} className="flex items-center gap-2">
                  <input
                    id={`color-${c}`}
                    type="checkbox"
                    className="h-4 w-4 accent-dark-900"
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

        <Group
          title={`Price ${activeCounts.price ? `(${activeCounts.price})` : ''}`}
          k="price"
        >
          <ul className="space-y-2">
            {PRICES.map(p => {
              // const checked = getArrayParam(searchParams, p);
              return (
                <li key={p.id} className="flex items-center gap-2">
                  <input
                    id={`price-${p.id}`}
                    type="checkbox"
                    className="h-4 w-4 accent-dark-900"
                    // checked={checked}
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
      </aside>
    </>
  );
}
