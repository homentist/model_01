import React from 'react';
import { AUTHOR_INFO } from '../data/portfolioData.ts';
import { Search, PenTool, PanelsTopLeft } from 'lucide-react';

export const StatsAbout: React.FC = () => (
  <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/70">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-7"><p className="text-xs tracking-[0.2em] text-indigo-300 font-semibold mb-4">ABOUT HUI-CHIAO</p><h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">策略思考與視覺執行，<br />來自同一個工作者。</h2><p className="mt-6 text-slate-300 leading-relaxed">{AUTHOR_INFO.bio}</p><p className="mt-4 text-sm text-slate-400 leading-relaxed">約三年的 SEO 內容接案經驗，合作內容涵蓋工業科技、食品與生活消費、醫療健康等不同領域；從資料研究、搜尋意圖與文章架構，到資訊整理與視覺排版，讓內容策略與最終呈現能在同一個合作流程中被照顧。</p></div>
      <div className="lg:col-span-5 space-y-4">
        {[{icon:Search,title:'搜尋策略',desc:'從關鍵字、搜尋意圖與受眾問題找到內容方向。'},{icon:PenTool,title:'專業內容',desc:'將產業資訊與複雜知識整理成清楚、有價值的內容。'},{icon:PanelsTopLeft,title:'視覺溝通',desc:'透過資訊層級、版面節奏與視覺一致性提升閱讀體驗。'}].map(({icon:Icon,title,desc}) => <div key={title} className="flex gap-4 p-5 rounded-xl border border-slate-800 bg-[#111827]/80"><Icon className="w-5 h-5 text-indigo-300 shrink-0 mt-1" /><div><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-1 text-xs leading-relaxed text-slate-400">{desc}</p></div></div>)}
      </div>
    </div>
  </section>
);
