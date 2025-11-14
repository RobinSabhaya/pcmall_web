import Image from 'next/image';
import Link from 'next/link';

import { Button, Title } from '../Common';

import { newArrivalData } from './sampleData';
import { getGridClasses, getTextColor } from './utils';

export default function NewArrival() {
  return (
    <>
      <div className="mb-8">
        <Title title="Featured" />
        <h2 className="text-3xl font-semibold">New Arrival</h2>
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
                src={item.image}
                alt={item.title}
                fill
                className="transition-transform duration-300 group-hover:scale-105"
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
                  <p className="text-sm opacity-80 mb-4">{item.description}</p>
                )}
                <Button
                  className="text-sm font-medium underline hover:no-underline transition-all bg-transparent text-white hover:bg-transparent"
                  disabled
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
