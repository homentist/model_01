import React from 'react';
import { AUTHOR_INFO } from '../data/portfolioData.ts';
export const Footer: React.FC = () => (
  <footer className="border-t border-slate-800 bg-[#080b12] py-9 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div><p className="text-white font-semibold">{AUTHOR_INFO.name} <span className="text-slate-500 font-normal">· {AUTHOR_INFO.chineseName}</span></p><p className="mt-1">SEO／GEO 內容策略 × 品牌視覺整合</p></div>
      <nav className="flex flex-wrap justify-center gap-5 text-slate-400"><a href="#services">服務方案</a><a href="#cases">成功案例</a><a href="#about">關於我</a><a href="#contact">聯絡我</a></nav>
      <span>© {new Date().getFullYear()} {AUTHOR_INFO.name}. All rights reserved.</span>
    </div>
  </footer>
);
