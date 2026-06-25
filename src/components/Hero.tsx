import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { toPersianNum } from '../utils/formatters';
export function Hero() {
  return (
    <div className="relative bg-[#F4F4F4] overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute bottom-0 left-0 w-[80%] h-[70%] bg-[#FCE8D5] rounded-tr-full rounded-tl-[40%] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="w-full md:w-1/2 text-center md:text-right mb-10 md:mb-0">
          
          <span className="text-orange-500 font-bold tracking-widest text-sm mb-4 block uppercase">
            {toPersianNum(10)}٪ تخفیف بگیرید
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            بهترین دارو برای درمان <br /> گربه شما
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto md:mx-0">
            به گربه خود کمک کنید سلامت خود را زودتر بازیابد. تنها وارد کننده
            داروی مخصوص بیماری گربه
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 mx-auto md:mx-0 transition-colors group shadow-lg shadow-violet-200">
            همین حالا خرید کنید
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform" />
            
          </button>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="w-full md:w-1/2 relative flex justify-center">
          
          {/* Main Product Image (Placeholder for Dog Food Bag & Dogs) */}
          <div className="relative w-full max-w-md aspect-square">
            <img
              src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=800"
              alt="غذای سگ ارگانیک"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white" />
            

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut'
              }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-full shadow-xl border-2 border-orange-100 flex flex-col items-center justify-center w-32 h-32 text-center">
              
              <span className="text-orange-500 font-black text-xl leading-none mb-1">
                {toPersianNum(100)}٪
              </span>
              <span className="text-orange-400 font-bold text-xs leading-tight">
                غذای ارگانیک
                <br />
                حیوانات
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-violet-600 hover:text-white transition-colors z-20 hidden md:flex">
        <ChevronLeft size={24} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-violet-600 hover:text-white transition-colors z-20 hidden md:flex">
        <ChevronRight size={24} />
      </button>
    </div>);

}