import Image from 'next/image';

import type { ProductGalleryProps } from './ProductGallery.type';

export default function ProductGallery({
  productImages,
  setSelectedImage,
  selectedImage,
}: ProductGalleryProps) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
              selectedImage === index ? 'border-red-500' : 'border-transparent'
            }`}
          >
            <Image
              src={image}
              alt={image}
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </>
  );
}
