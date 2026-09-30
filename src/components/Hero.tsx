import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/images/hero_modern_architecture_1790361355775.jpg';

interface HeroProps {
  onOpenSocialStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSocialStudio }) => {
  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Massive Rounded Architecture Hero Card inspired by reference image */}
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-800/80 bg-[#10141e] shadow-2xl shadow-indigo-950/20 min-h-[480px] sm:min-h-[560px] lg:min-h-[600px] flex items-center">
        {/* Background Image with Cinematic Architectural Contrast */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Modern architectural structure representing high-level strategy and aesthetic foundations"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
            referrerPolicy="no-referrer"
          />
          {/* Measured Scrim & Gradients matching SEO/GEO deck deep tones */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14]/95 via-[#0c1017]/85 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-3xl">
          {/* Editorial Kicker / Tags */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-4 sm:mb-6">
            <span className="px-2.5 py-1 rounded-md bg-indigo-950/70 border border-indigo-700/60 text-indigo-300">
              REVENUE GROWTH
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300 font-mono tracking-normal">SEO & GEO AGENCY 2026</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">Kung, Hui-Chiao</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] text-balance">
            搜尋力變現：
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200">
              AI與新搜尋時代的SEO/GEO精準布局
            </span>
          </h1>

          {/* Subtitle from the two presentations */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            不走彎路的 SEO/GEO 全方位一條龍整合策略 ✕ 用排版美學留住你的精準客戶。
            消除 AI 帶來的隱性時間成本，由同一個「行銷大腦」貫徹受眾痛點分析到高轉換排版美學。
          </p>

          {/* Value points ticker */}
          <div className="mt-6 flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>消除 AI 公式化隱性成本</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>策略與內容零斷層</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>排版美學提升信任度</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-lg hover:shadow-white/10 flex items-center gap-2 group cursor-pointer"
            >
              <span>立即預約諮詢</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenSocialStudio}
              className="px-5 py-3.5 text-sm font-medium text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>接案社群宣傳套件</span>
            </button>

            <a
              href="#portfolio"
              className="px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              瀏覽實戰案例
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
