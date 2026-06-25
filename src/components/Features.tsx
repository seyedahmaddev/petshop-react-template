import React from 'react';
import { Truck, HeadphonesIcon, ShieldCheck, RefreshCcw } from 'lucide-react';
import { toPersianNum } from '../utils/formatters';
const FEATURES = [
{
  icon: <Truck size={32} className="text-orange-500" />,
  title: 'ارسال رایگان',
  desc: 'برای سفارش‌های بالای ۵۰۰ هزار تومان'
},
{
  icon: <HeadphonesIcon size={32} className="text-violet-600" />,
  title: `پشتیبانی ${toPersianNum(24)}/${toPersianNum(7)}`,
  desc: 'پاسخگویی در تمام ساعات شبانه‌روز'
},
{
  icon: <ShieldCheck size={32} className="text-orange-500" />,
  title: 'پرداخت امن',
  desc: 'تضمین امنیت تراکنش‌های شما'
},
{
  icon: <RefreshCcw size={32} className="text-violet-600" />,
  title: `بازگشت کالا ${toPersianNum(7)} روزه`,
  desc: 'در صورت عدم رضایت از محصول'
}];

export function Features() {
  return (
    <section className="py-12 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) =>
          <div
            key={idx}
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
            
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}