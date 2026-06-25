import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatPrice, toPersianNum } from '../utils/formatters';
const PRODUCTS = [
{
  id: 1,
  name: 'غذای خشک سگ بالغ رویال کنین',
  category: 'غذای سگ',
  price: 2500000,
  oldPrice: 2800000,
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=600',
  sale: true
},
{
  id: 2,
  name: 'کنسرو گربه با طعم مرغ و ماهی',
  category: 'غذای گربه',
  price: 120000,
  rating: 4,
  image:
  'https://images.unsplash.com/photo-1623366302587-bcaeb8ca3629?auto=format&fit=crop&q=80&w=600'
},
{
  id: 3,
  name: 'اسباب‌بازی طناب گره‌دار سگ',
  category: 'اسباب‌بازی',
  price: 85000,
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=600'
},
{
  id: 4,
  name: 'قلاده چرمی سگ سایز بزرگ',
  category: 'قلاده و بند',
  price: 450000,
  oldPrice: 500000,
  rating: 4,
  image:
  'https://images.unsplash.com/photo-1602165123985-58040682283e?auto=format&fit=crop&q=80&w=600',
  sale: true
},
{
  id: 5,
  name: 'شامپو ضد کک و کنه مخصوص سگ',
  category: 'لوازم بهداشتی',
  price: 180000,
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600'
},
{
  id: 6,
  name: 'تشویقی مدادی گربه با طعم سالمون',
  category: 'تشویقی',
  price: 65000,
  rating: 4,
  image:
  'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=600'
},
{
  id: 7,
  name: 'ظرف استیل دوقلو سگ و گربه',
  category: 'ظروف',
  price: 220000,
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?auto=format&fit=crop&q=80&w=600'
},
{
  id: 8,
  name: 'جای خواب نرم و گرم گربه',
  category: 'جای خواب',
  price: 850000,
  oldPrice: 950000,
  rating: 5,
  image:
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=600',
  sale: true
}];

export function BestSellers() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-gray-900 mb-4">
          محصولات پرفروش
        </h2>
        <p className="text-gray-500">
          محبوب‌ترین محصولات ما را برای حیوانات خانگی خود کشف کنید.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product, idx) =>
        <motion.div
          key={product.id}
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: idx * 0.1
          }}
          className="group relative bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-xl transition-all duration-300">
          
            {/* Badges */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
              {product.sale &&
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                  تخفیف
                </span>
            }
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-4 left-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-orange-50 shadow-sm transition-colors">
              <Heart size={16} />
            </button>

            {/* Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
              <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            

              {/* Add to Cart Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg">
                  <ShoppingCart size={16} />
                  افزودن به سبد
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <div className="text-xs text-gray-500">{product.category}</div>
              <h3 className="font-bold text-gray-900 text-sm line-clamp-2 hover:text-violet-600 transition-colors cursor-pointer">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) =>
              <Star
                key={i}
                size={12}
                fill={i < product.rating ? 'currentColor' : 'none'}
                className={i >= product.rating ? 'text-gray-300' : ''} />

              )}
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 pt-1">
                <span className="font-black text-violet-600 text-lg">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice &&
              <span className="text-xs text-gray-400 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
              }
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}