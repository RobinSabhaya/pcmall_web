"use client";

import { useCountdown } from '@/hooks/useCountdown';
import type { CountdownDisplayProps } from '@/hooks/useCountdown.type';

import type { FlashSalesProps} from './FlashSale.type';

const CountdownDisplay = ({ time }: CountdownDisplayProps) => (
  <div className="flex items-center gap-4 text-black">
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-600">Days</span>
      <span className="text:xl lg:text-3xl font-bold">{String(time.days).padStart(2, '0')}</span>
    </div>
    <span className="text-2xl font-bold text-red-500">:</span>
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-600">Hours</span>
      <span className="text:xl lg:text-3xl font-bold">{String(time.hours).padStart(2, '0')}</span>
    </div>
    <span className="text-2xl font-bold text-red-500">:</span>
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-600">Minutes</span>
      <span className="text:xl lg:text-3xl font-bold">{String(time.minutes).padStart(2, '0')}</span>
    </div>
    <span className="text-2xl font-bold text-red-500">:</span>
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-600">Seconds</span>
      <span className="text:xl lg:text-3xl font-bold">{String(time.seconds).padStart(2, '0')}</span>
    </div>
  </div>
);

export default function FlashSales({ endDate, className = ""}: FlashSalesProps) {

  function onExpire() {
  }

  const time = useCountdown(endDate, onExpire);

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-start gap-4 flex-col md:flex-row md:items-center">
        <h2 className="text-2xl font-bold text-black lg:text-4xl">Flash Sales</h2>
        <CountdownDisplay time={time} />
      </div>
    </div>
  );
}
