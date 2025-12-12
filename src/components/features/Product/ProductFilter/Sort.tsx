import type { ChangeEvent } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { SORT_OPTIONS } from './utils';

export default function Sort() {
  const searchParams = useSearchParams();
  const selected = searchParams.get('sort') ?? '';
  const params = new URLSearchParams();
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    params.set('sort', value);

    return router.push(`?${params}`, {
      scroll: false,
    });
  };

  return (
    <label className="inline-flex items-center gap-2">
      <select
        className="rounded-md border border-light-300 bg-light-100 px-3 py-2 text-body"
        value={selected}
        onChange={onChange}
        aria-label="Sort products"
      >
        {SORT_OPTIONS.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
