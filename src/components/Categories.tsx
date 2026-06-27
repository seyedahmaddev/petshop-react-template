import React from 'react';
import { motion } from 'framer-motion';
const CATEGORIES = [
{
  name: 'غذای سگ',
  image:
  'assets/dog-food.jpeg'
},
{
  name: 'غذای گربه',
  image:
  'assets/cat-food.png'
},
{
  name: 'اسباب‌بازی',
  image:
  'assets/photo-running-dog.avif'
},
{
  name: 'لوازم بهداشتی',
  image:
  'assets/photo-backdog.avif'
},
{
  name: 'قلاده و بند',
  image:
  'assets/rakhmat-suwandi.jpg'
},
{
  name: 'تشویقی',
  image:
  'assets/photo-dog.avif'
}];

export function Categories() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900">
          دسته‌بندی‌ها
        </h2>
        <a
          href="#"
          className="text-orange-500 font-bold hover:text-orange-600 transition-colors">
          
          مشاهده همه
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CATEGORIES.map((cat, idx) =>
        <motion.div
          key={idx}
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: idx * 0.1
          }}
          className="flex flex-col items-center gap-4 group cursor-pointer">
          
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-violet-200 transition-all duration-300 relative">
              <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <span className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors text-center">
              {cat.name}
            </span>
          </motion.div>
        )}
      </div>
    </section>);

}