import Image from 'next/image';

import { services } from '../../ui/Services';

import type { ServicesProps } from './Services.type';

export default function Services({ className = 'py-16' }: ServicesProps) {
  return (
    <div
      className={`flex justify-center items-center flex-col gap-20 ${className} lg:flex-row `}
    >
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6 relative">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
              />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
