import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import heroImg from '../assets/images/hero_modern_architecture_1790361355775.jpg';

export const Hero: React.FC = () => (
  <section id="top" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[680px] flex items-center">
    <div className="absolute inset-4 sm:inset-6 top-20 sm:top-24 rounded-[28px] overflow-hidden border border-indigo-950/70">
      <img src={heroImg} alt="以建築結構與光影呈現內容策略和視覺整合概念" className="w-full h-full object-cover brightness-[0.28] saturate-[0.65]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080d18]/95 via-[#0b1020]/80 to-[#111a36]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14]/90 via-transparent to-[#0b0e14]/10" />
      <div className="absolute -right-20 top-0 w-[28rem] h-[28rem] rounded-full bg-indigo-500/15 blur-3xl" />
    </div>
    <div className="relative z-10 max-w-3xl px-3 sm:px-8 py-12">
      <p className="text-xs sm:text-sm tracking-[0.22em] text-indigo-300 font-semibold mb-6">SEO / GEO CONTENT STRATEGY × VISUAL COMMUNICATION</p>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.18] text-white">
        讓好內容<br />被搜尋，也被<span className="text-indigo-300">看見。</span>
      </h1>
      <p className="mt-7 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">從 SEO／GEO 搜尋策略、專業文章撰寫與內容優化，到品牌視覺排版整合，讓內容不只被找到，也能清楚傳遞品牌價值。</p>
      <p className="mt-5 text-sm sm:text-base text-slate-300">行銷策略與視覺美學的雙核心整合大腦</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a href="#services" className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-5 py-3 rounded-lg transition-colors">了解服務方案 <ArrowUpRight className="w-4 h-4" /></a>
        <a href="#cases" className="inline-flex items-center gap-2 border border-slate-400/40 hover:border-indigo-300 text-white px-5 py-3 rounded-lg transition-colors">瀏覽成功案例 <ArrowDown className="w-4 h-4" /></a>
      </div>
    </div>
  </section>
);
