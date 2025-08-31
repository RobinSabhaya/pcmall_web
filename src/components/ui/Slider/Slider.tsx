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
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* Right Arrow */}
      <button
        onClick={next}
        disabled={currentIndex >= maxIndex}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
