'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

import type { ProfilePickerProps } from './ProfilePicker.type';
import { sizeClasses } from './utils';

export default function ProfilePicker({
  name,
  currentImage,
  size = 'md',
  onImageChange,
  className = '',
}: ProfilePickerProps) {
  // state
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
      onImageChange?.(file);
    }
  };

  const displayImage = preview ?? currentImage;

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden bg-light-200 shadow-lg`}
      >
        {displayImage ? (
          <Image
            src={displayImage}
            alt={name}
            fill
            className="object-cover"
            loading="lazy"
            fetchPriority="auto"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-semibold text-3xl">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        onClick={() => fileInputRef.current?.click()}
        className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
    </div>
  );
}
