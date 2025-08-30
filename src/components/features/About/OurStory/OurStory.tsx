import Image from 'next/image';

import type { OurStoryProps } from './OurStory.type';

const defaultContent = {
  title: 'Our Story',
  descriptions: [
    "Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.",
    'Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.',
  ],
};

const defaultImage = {
  url: '/our-story-image.jpg',
  alt: 'Two women shopping with colorful bags',
};

export default function OurStory({
  className = '',
  style = {},
  title = defaultContent.title,
  descriptions = defaultContent.descriptions,
  imageUrl = defaultImage.url,
  imageAlt = defaultImage.alt,
}: OurStoryProps) {
  return (
    <section className={`py-16 px-6 lg:px-20 ${className}`} style={style}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              {title}
            </h2>
            <div className="space-y-6">
              {descriptions.map((description, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed text-base lg:text-lg"
                >
                  {description}
                </p>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500">
              <Image
                src={imageUrl}
                alt={imageAlt}
                height={600}
                width={800}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
