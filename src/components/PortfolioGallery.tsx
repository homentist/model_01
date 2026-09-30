import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData.ts';
import {
  ExternalLink,
  Search,
  TrendingUp,
  Award,
  ChevronRight,
  Eye,
  CheckCircle2,
  Quote,
  Sparkles,
} from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'industrial' | 'seo_geo' | 'medical_food' | 'editorial' | 'social'>('all');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const filteredCases = filter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === filter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>CASE STUDIES · 實戰案例庫</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            真實數據與搜尋霸榜案例
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            無論是從零佈局還是舊文更新，我們的專業整合力都是轉換率的保障。涵蓋上市櫃科技製造、生活消費、醫療衛教與品牌排版。
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121622] border border-slate-800 rounded-xl shrink-0">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            全部案例
          </button>
          <button
            onClick={() => setFilter('industrial')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'industrial' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            工業科技
          </button>
          <button
            onClick={() => setFilter('seo_geo')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'seo_geo' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            流量暴衝
          </button>
          <button
            onClick={() => setFilter('medical_food')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'medical_food' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            醫療與食品
          </button>
          <button
            onClick={() => setFilter('editorial')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'editorial' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            電子書與DM
          </button>
          <button
            onClick={() => setFilter('social')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'social' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            社群圖文
          </button>
        </div>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalCase(item)}
            className="bg-[#121622] border border-slate-800/90 hover:border-indigo-500/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/20 group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-950/70 text-indigo-300 border border-indigo-800/60">
                  {item.categoryLabel}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {item.industry}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-400 mt-1">
                  合作對象：{item.client}
                </div>
              </div>

              {/* Highlight Metric Card */}
              <div className="bg-[#0b0e14] border border-slate-800/80 rounded-xl p-3.5 space-y-1">
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wide">
                  實戰關鍵成效
                </div>
                <div className="text-base sm:text-lg font-bold text-white font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
                  {item.highlightMetric}
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {item.metricLabel}
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {item.summary}
              </p>

              {/* Keyword rankings pill list if available */}
              {item.rankings && (
                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  <div className="text-[11px] text-slate-400">Google 實測排名：</div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.rankings.slice(0, 2).map((r, rIdx) => (
                      <span
                        key={rIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 flex items-center gap-1"
                      >
                        <span className="text-amber-400 font-bold">#{r.rank}</span>
                        <span>{r.keyword}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-medium text-indigo-400 group-hover:text-indigo-300">
              <span>點擊查看完整案例與策略</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Case Detail Modal */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#121622] border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  {activeModalCase.categoryLabel} · {activeModalCase.industry}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeModalCase.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  服務品牌：{activeModalCase.client}
                </p>
              </div>
              <button
                onClick={() => setActiveModalCase(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Metric Highlight Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/70 to-slate-900 border border-indigo-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-indigo-300">核心亮點成果</span>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                  {activeModalCase.highlightMetric}
                </div>
              </div>
              <div className="text-xs text-slate-300 max-w-xs sm:text-right">
                {activeModalCase.metricLabel}
              </div>
            </div>

            {/* Google Ranking Proof Simulator */}
            {activeModalCase.rankings && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                  Google 實測搜尋排名 & AI Overviews 成果：
                </h4>
                <div className="space-y-2">
                  {activeModalCase.rankings.map((r, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#0b0e14] border border-slate-800 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center font-mono text-xs">
                          {r.rank}
                        </span>
                        <span className="text-white font-semibold">{r.keyword}</span>
                      </div>
                      <span className="text-slate-400 text-[11px]">{r.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Summary */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white">案例背景與痛點：</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeModalCase.summary}
              </p>
            </div>

            {/* Strategy Executed */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white">採用的整合策略：</h4>
              <ul className="space-y-1.5">
                {activeModalCase.strategy.map((st, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Quote */}
            {activeModalCase.quote && (
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Quote className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-indigo-200 italic">
                  {activeModalCase.quote}
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setActiveModalCase(null)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white"
              >
                關閉
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModalCase(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
              >
                預約類似案例規劃
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
