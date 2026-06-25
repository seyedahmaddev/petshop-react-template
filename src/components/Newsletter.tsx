import React from 'react';
import { Mail } from 'lucide-react';
export function Newsletter() {
  return (
    <section className="bg-violet-600 py-16 relative overflow-hidden">
      {/* Decorative background paw prints (simplified as circles for now) */}
      <div className="absolute top-0 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-6">
          <Mail size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          عضویت در خبرنامه زیگی
        </h2>
        <p className="text-violet-200 mb-8 max-w-lg mx-auto">
          با عضویت در خبرنامه ما، از جدیدترین محصولات، تخفیف‌های ویژه و مقالات
          آموزشی مطلع شوید.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}>
          
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید..."
            className="flex-1 bg-white rounded-full px-6 py-3.5 text-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-violet-400 transition-all"
            required />
          
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-orange-500/30">
            
            عضویت
          </button>
        </form>
      </div>
    </section>);

}