import Filters from '@/components/features/Product/ProductFilter/Filters';
import Sort from '@/components/features/Product/ProductFilter/Sort';

// type SearchParams = Record<string, string | string[] | undefined>;

export default async function ProductsPage() {
  const activeBadges = ['men', 'woman'];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between py-6">
        <h1 className="text-heading-3 text-dark-900">New ({10})</h1>
        <Sort />
      </header>

      {activeBadges.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {activeBadges.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="rounded-full border border-light-300 px-3 py-1 text-caption text-dark-900"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      <section className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
        <Filters />
      </section>
    </main>
  );
}
