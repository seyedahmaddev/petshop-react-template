import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Categories } from './components/Categories';
import { PromoBanners } from './components/PromoBanners';
import { BestSellers } from './components/BestSellers';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <TopBar />
      <Header />

      <main className="flex-1">
        <Hero />
        <Features />
        <Categories />
        <PromoBanners />
        <BestSellers />
        <Newsletter />
      </main>

      <Footer />
    </div>);

}