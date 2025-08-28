"use client";

import { useState } from "react";

import type { useSliderProps } from "./useSlider.type";

export default function useSlider({
  maxShowItems = 6,
  itemsLength = 1,
}: useSliderProps){
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectItem, setSelectItem] = useState<number>(1);
  const maxIndex = Math.max(0, itemsLength - maxShowItems);

  const next = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
    
  return {
    selectItem,
    setSelectItem,
    next,
    prev,
    currentIndex,
    maxIndex
  }
}