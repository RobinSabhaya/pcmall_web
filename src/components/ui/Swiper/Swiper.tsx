'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';

import type { SwiperProps } from './Swiper.type';

export default function Swiper({
  slides,
  className = '',
  autoplay = true,
  autoplayDelay = 5000,
}: SwiperProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  // const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  // const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map(slide => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative"
            style={{ backgroundColor: slide.backgroundColor ?? '#000' }}
          >
            <div className="flex items-center justify-between h-[35vh] p-3 py-5 md:p-12 md:min-h-[400px]">
              <div className="text-white max-w-md">
                {slide.subtitle && (
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span className="text-sm">{slide.subtitle}</span>
                  </div>
                )}
                <h2 className="text-sm lg:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-sm lg:text-lg md:mb-6">{slide.description}</p>
                <button className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-80 transition-opacity">
                  {slide.buttonText}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 justify-end hidden md:visible md:flex">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  height={800}
                  width={800}
                  className="max-w-md h-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-red-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
    </div>
  );
}
