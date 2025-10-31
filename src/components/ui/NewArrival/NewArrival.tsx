import Image from 'next/image';
import Link from 'next/link';

import Image1 from '@/public/svg/banners/iphone14.svg';

import type { NewArrivalProps } from './NewArrival.type';
import { newArrivalData } from './sampleData';

const NewArrival = ({ className = '' }: NewArrivalProps) => {
  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getTextColor = (theme: string) =>
    theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-5 h-10 bg-red-500 rounded" />
            <span className="text-red-500 font-medium">Featured</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">New Arrival</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 h-[600px]">
          {newArrivalData.map(item => (
            <Link
              key={item.id}
              href={item.link}
              className={`
                relative overflow-hidden rounded-lg group cursor-pointer
                ${getGridClasses(item.size)}
              `}
            >
              <div className="relative w-full h-full bg-black">
                <Image
                  src={Image1}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div
                  className={`
                  absolute bottom-6 left-6 right-6 z-10
                  ${getTextColor(item.theme)}
                `}
                >
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-sm opacity-90 mb-3">{item.subtitle}</p>
                  )}
                  {item.description && (
                    <p className="text-sm opacity-80 mb-4">
                      {item.description}
                    </p>
                  )}
                  <button className="text-sm font-medium underline hover:no-underline transition-all">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
