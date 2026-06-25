import React from 'react';
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Cat,
  ChevronDown,
  Menu } from
'lucide-react';
import { toPersianNum } from '../utils/formatters';
export function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 p-2">
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-black text-gray-900">
          <div className="relative">
            <Cat size={32} className="text-orange-500" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] text-orange-500 font-bold tracking-wider">
              پت‌شاپ
            </span>
            <span>زیگی</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
          <a
            href="#"
            className="text-orange-500 flex items-center gap-1 border-b-2 border-orange-500 pb-1">
            
            خانه <ChevronDown size={14} />
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition-colors flex items-center gap-1">
            
            فروشگاه <ChevronDown size={14} />
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition-colors flex items-center gap-1">
            
            صفحات <ChevronDown size={14} />
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition-colors flex items-center gap-1">
            
            وبلاگ <ChevronDown size={14} />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            تماس با ما
          </a>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-violet-200 transition-all">
            <input
              type="text"
              placeholder="جستجوی محصولات..."
              className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-500" />
            
            <button className="text-violet-600 bg-violet-100 p-1.5 rounded-full hover:bg-violet-600 hover:text-white transition-colors">
              <Search size={16} />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <button className="hover:text-violet-600 transition-colors hidden sm:block">
              <User size={22} />
            </button>
            <button className="hover:text-violet-600 transition-colors relative">
              <Heart size={22} />
              <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {toPersianNum(0)}
              </span>
            </button>
            <button className="hover:text-violet-600 transition-colors flex items-center gap-2 group">
              <div className="relative">
                <ShoppingCart size={22} />
                <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {toPersianNum(0)}
                </span>
              </div>
              <span className="hidden sm:block font-bold text-sm group-hover:text-violet-600 transition-colors">
                {toPersianNum(0)} تومان
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>);

}