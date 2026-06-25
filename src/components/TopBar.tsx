import React from 'react';
import { MapPin, Truck, ChevronDown } from 'lucide-react';
import { toPersianNum } from '../utils/formatters';
export function TopBar() {
  return (
    <div className="bg-violet-600 text-white text-xs py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Right side (Start in RTL) */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-orange-300 transition-colors">
            
            <MapPin size={14} />
            <span>یافتن فروشگاه</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-orange-300 transition-colors">
            
            <Truck size={14} />
            <span>پیگیری سفارش</span>
          </a>
        </div>

        {/* Center */}
        <div className="flex items-center gap-2">
          <span className="bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold text-[10px]">
            {toPersianNum(15)}٪ تخفیف
          </span>
          <span>
            هنگام خرید آنلاین و تحویل حضوری برای خرید بالای {toPersianNum(50)}{' '}
            هزار تومان
          </span>
        </div>

        {/* Left side (End in RTL) */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-orange-300 transition-colors">
            تومان <ChevronDown size={12} />
          </button>
          <button className="flex items-center gap-1 hover:text-orange-300 transition-colors">
            فارسی <ChevronDown size={12} />
          </button>
        </div>
      </div>
    </div>);

}