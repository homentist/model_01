import React from 'react';
import { AUTHOR_INFO } from '../data/portfolioData.ts';
import { ArrowUp, Sparkles, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenSocialStudio: () => void;
  onOpenFeedback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSocialStudio, onOpenFeedback }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080b11] border-t border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-white font-bold text-base tracking-tight flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>{AUTHOR_INFO.name}</span>
            <span className="text-xs font-normal text-slate-400">· 江慧喬</span>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            {AUTHOR_INFO.chineseName} · 2026 SEO & GEO 內容行銷策略 ✕ 品牌視覺美學設計
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">關於我</a>
          <a href="#why-me" className="hover:text-white transition-colors">核心優勢</a>
          <a href="#services" className="hover:text-white transition-colors">服務方案</a>
          <a href="#portfolio" className="hover:text-white transition-colors">實戰案例</a>
          <button
            onClick={onOpenSocialStudio}
            className="hover:text-indigo-400 transition-colors cursor-pointer text-indigo-300"
          >
            社群圖文產生器
          </button>
          <button
            onClick={onOpenFeedback}
            className="hover:text-indigo-400 transition-colors cursor-pointer text-slate-400"
          >
            體驗回饋
          </button>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} {AUTHOR_INFO.name}. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="回到頁面頂部"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
