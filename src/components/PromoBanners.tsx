import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { toPersianNum } from '../utils/formatters';
export function PromoBanners() {
  return (
    <section className="py-8 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Banner 1 */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          className="relative rounded-3xl overflow-hidden bg-[#FFF3E9] flex items-center p-8 min-h-[240px]">
          
          <div className="relative z-10 w-1/2">
            <span className="text-orange-500 font-bold text-sm mb-2 block">
              پیشنهاد ویژه
            </span>
            <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
              تا {toPersianNum(30)}٪ تخفیف <br /> روی غذای گربه
            </h3>
            <button className="bg-white text-gray-900 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors group">
              خرید کنید
              <ChevronLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform" />
              
            </button>
          </div>
          <div className="absolute left-0 bottom-0 w-1/2 h-full">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600"
              alt="گربه"
              className="w-full h-full object-cover object-left"
              style={{
                maskImage:
                'linear-gradient(to right, black 50%, transparent 100%)',
                WebkitMaskImage:
                'linear-gradient(to right, black 50%, transparent 100%)'
              }} />
            
          </div>
        </motion.div>

        {/* Banner 2 */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}
          className="relative rounded-3xl overflow-hidden bg-[#E9E4FF] flex items-center p-8 min-h-[240px]">
          
          <div className="relative z-10 w-1/2">
            <span className="text-violet-600 font-bold text-sm mb-2 block">
              مجموعه جدید
            </span>
            <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
              اسباب‌بازی‌های <br /> سرگرم‌کننده سگ
            </h3>
            <button className="bg-white text-gray-900 hover:bg-violet-600 hover:text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors group">
              خرید کنید
              <ChevronLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform" />
              
            </button>
          </div>
          <div className="absolute left-0 bottom-0 w-1/2 h-full">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600"
              alt="سگ"
              className="w-full h-full object-cover object-left"
              style={{
                maskImage:
                'linear-gradient(to right, black 50%, transparent 100%)',
                WebkitMaskImage:
                'linear-gradient(to right, black 50%, transparent 100%)'
              }} />
            
          </div>
        </motion.div>
      </div>
    </section>);

}