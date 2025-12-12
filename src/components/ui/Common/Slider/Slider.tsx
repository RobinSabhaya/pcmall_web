import Image from 'next/image';

import type { SliderProps } from './Slider.type';

export default function Slider({
  className = '',
  style = {},
  currentIndex,
  maxIndex,
  next,
  prev,
}: SliderProps) {
  return (
    <div className={`flex gap-2 ${className}`} style={style}>
      {/* Left Arrow */}
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        <Image
          src="/svg/general/arrowLeft.svg"
          alt="Left arrow"
          height={20}
          width={20}
        />
      </button>
      {/* Right Arrow */}
      <button
        onClick={next}
        disabled={currentIndex >= maxIndex}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        <Image
          src="/svg/general/arrowRight.svg"
          alt="Right arrow"
          height={20}
          width={20}
        />
      </button>
    </div>
  );
}
