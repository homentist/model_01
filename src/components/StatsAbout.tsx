import React from 'react';
import { CORE_METRICS, CLIENT_LOGOS, AUTHOR_INFO } from '../data/portfolioData.ts';
import { ShieldCheck, Award, Layers } from 'lucide-react';

export const StatsAbout: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/60">
      {/* 2-Column Layout matching Reference Image "About Us" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: About Hui-Chiao */}
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>ABOUT HUI-CHIAO · 關於我</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            行銷策略與視覺美學的
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-white block sm:inline sm:ml-2">
              雙核心整合大腦
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            長年深耕 SEO/GEO 自然搜尋引擎布局、產業專業撰文與商業視覺排版。秉持「行銷策略與視覺美學的雙核心整合」，致力解決品牌在內容行銷上的痛點斷層——既有頂尖
            SEO 排名的邏輯與精準度，又具備留住訪客眼球的高端視覺呼吸感。
          </p>

          <p className="text-slate-400 text-sm leading-relaxed">
            從受眾痛點分析、搜尋意圖挖深，到 2,000~3,000 字高價值原創文章產出，再到電子書型錄與社群圖文高張力排版，一條龍親力親為，創造無可取代的品牌競爭壁壘。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>實名客戶真實認證</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>上市公司與新創實績</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>全流程零斷層貫徹</span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Key Metrics (2x2 Grid exactly as Reference Image) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-6 sm:gap-8 bg-[#121622]/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          {CORE_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono tabular-nums text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-100 to-indigo-300">
                {metric.number}
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-200">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 leading-normal">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Logos Bar matching reference image Logoipsum row */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-800/60">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center mb-6">
          服務客戶與實績案例合作夥伴 · TRUSTED BY INNOVATIVE BRANDS
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-items-center opacity-85">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="w-full text-center px-2 py-2 rounded-lg bg-slate-900/40 border border-slate-800/40 hover:border-indigo-500/40 transition-colors"
            >
              <div className="font-semibold text-xs sm:text-sm text-slate-200 tracking-tight">
                {client.name}
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">
                {client.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
