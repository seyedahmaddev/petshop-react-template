import React from 'react';
import {
  Cat,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook } from
'lucide-react';
import { toPersianNum } from '../utils/formatters';
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-black text-white mb-6">
              <Cat size={32} className="text-orange-500" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] text-orange-500 font-bold tracking-wider">
                  پت‌شاپ
                </span>
                <span>زیگی</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              ما بهترین و باکیفیت‌ترین محصولات را برای حیوانات خانگی شما فراهم
              می‌کنیم تا زندگی شادتر و سالم‌تری داشته باشند.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">فروشگاه</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  غذای سگ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  غذای گربه
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  اسباب‌بازی‌ها
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  لوازم بهداشتی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  تخفیف‌های ویژه
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">اطلاعات</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  قوانین و مقررات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  حریم خصوصی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  سوالات متداول
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">تماس با ما</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-violet-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  تهران، خیابان ولیعصر، نرسیده به پارک وی، پلاک{' '}
                  {toPersianNum(123)}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-violet-500 shrink-0" />
                <span dir="ltr" className="text-right w-full">
                  {toPersianNum('021-88888888')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-violet-500 shrink-0" />
                <span>info@ziggy.ir</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {toPersianNum(1403)} تمامی حقوق برای پت‌شاپ زیگی محفوظ است.</p>
          <div className="flex gap-2">
            {/* Payment methods placeholders */}
            <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold">
              شتاب
            </div>
            <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold">
              زرین‌پال
            </div>
          </div>
        </div>
      </div>
    </footer>);

}