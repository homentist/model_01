import React from 'react';
import { CLIENT_REVIEWS } from '../data/portfolioData.ts';
import { Star, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export const ClientReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/60">
      <div className="space-y-3 mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>REAL REVIEWS · 客戶真實回饋</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          客戶的信任，是最好的實力證明
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          不論是高難度生硬的工業規格，還是溫暖動人的生活美學，每一篇交付都贏得客戶高度肯定與後續持續續約。
        </p>
      </div>

      {/* LINE-Style & Editorial Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {CLIENT_REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="bg-[#121622] border border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-indigo-500/50 transition-colors shadow-lg shadow-black/20"
          >
            {/* Top Bar: Reviewer profile */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-900/60 border border-indigo-700/60 flex items-center justify-center font-bold text-sm text-indigo-200">
                  {rev.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {rev.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {rev.industry} · {rev.time}
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-0.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Simulated LINE Chat Message Bubble (faithful to slide 8) */}
            <div className="bg-[#182133] border border-slate-700/60 rounded-2xl p-4 sm:p-5 relative">
              <div className="flex items-center gap-1.5 text-xs text-indigo-300 mb-2 font-mono">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>真實對話截圖摘錄</span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed tracking-wide">
                「{rev.text}」
              </p>
            </div>

            {/* Tag / Key highlight */}
            <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-indigo-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{rev.tag}</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                100% 真實合作回饋
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
