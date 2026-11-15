import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

type Tab = 'marketing' | 'visual';
const marketing = [
  { title: 'SEO／GEO 新文章撰寫', desc: '從受眾需求、關鍵字與搜尋意圖出發，完成具研究脈絡的原創專業文章。', price: 'NT$ 3,000／篇', note: '非工業文章；工業技術文章 NT$ 4,000／篇', features: ['前期需求訪談與搜尋意圖分析', '關鍵字篩選、資料整合與考證', '原創文章撰寫，平均 2,000–3,000 字', 'SEO／GEO 關鍵字自然布局'] },
  { title: '既有文章優化', desc: '重新檢視舊文章的搜尋意圖、內容架構與關鍵字布局，讓既有內容重新發揮價值。', price: 'NT$ 3,000／篇', note: '平均字數 2,000–3,000 字', features: ['前期訪談與搜尋意圖分析', '關鍵字重新篩選', '文章架構、標題與段落重整', '內部連結與關鍵字布局建議'] },
  { title: 'SEO／GEO 策略規劃', desc: '依照品牌目標與網站現況，整理關鍵字方向、搜尋需求、內容主題與執行優先順序。', price: '依需求評估報價', note: '依網站規模、研究範圍與交付內容確認', features: ['關鍵字與搜尋意圖分析', '內容主題與架構規劃', '網站內容盤點與優化方向', '階段性執行建議'] },
  { title: 'SEO／GEO 顧問與內容健檢', desc: '針對現有內容或執行問題提供診斷與建議，協助釐清下一步優化方向。', price: '依需求評估報價', note: '先確認諮詢範圍與交付方式', features: ['網站與內容現況討論', '搜尋內容問題盤點', '優化建議與執行方向', '依專案需求安排後續合作'] },
];
const visual = [
  { title: '電子書、白皮書與型錄', desc: '將專業文章、產品資訊與數據重新梳理，建立清楚的資訊層次與閱讀動線。', price: 'NT$ 800／頁', note: '電子書及 DM 型錄設計', features: ['資訊分類與主次整理', '客製化版面與閱讀動線', '電子書、白皮書、產品型錄與 DM', '依確認規格交付檔案'] },
  { title: '社群圖文設計', desc: '從主題與痛點企劃、貼文文案到主視覺，建立清楚且一致的社群溝通。', price: 'NT$ 850／式', note: '含文案＋主圖一張；純圖片設計 NT$ 500／張', features: ['貼文主題與痛點企劃', '社群文案撰寫', '主圖視覺設計', '品牌色彩與版型延伸'] },
  { title: '品牌簡報與資訊排版', desc: '整理簡報內容、圖表與資訊層級，讓專業資料更容易理解與傳達。', price: '依需求評估報價', note: '依頁數、素材與設計複雜度確認', features: ['資訊架構與頁面編排', '圖表與重點資訊視覺化', '簡報版型與整體視覺統整'] },
  { title: '平面設計與客製排版', desc: '依品牌需求延伸海報、名片、菜單及其他客製化視覺項目。', price: '依客製範圍報價', note: '先確認需求與交付規格', features: ['品牌海報與活動視覺', '菜單、名片等平面設計', '依專案範圍提供階段性報價'] },
];
const steps = [
  ['01', '需求洽詢', '確認產業、專案目標、需求內容與預算。'],
  ['02', '需求分析與方向規劃', '釐清搜尋需求、內容方向、設計目的與執行範圍。'],
  ['03', '報價與合作確認', '確認服務項目、交付內容、時程與費用。'],
  ['04', '專案執行', '依確認方向進行研究、撰寫、優化或視覺設計。'],
  ['05', '交付與後續建議', '完成校對與檔案交付，依專案性質提供後續建議。'],
];

export const ServicesCatalog: React.FC = () => {
  const [tab, setTab] = useState<Tab>('marketing');
  const items = tab === 'marketing' ? marketing : visual;
  return <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/70">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-9">
      <div><p className="text-xs tracking-[0.2em] text-indigo-300 font-semibold mb-4">SERVICES</p><h2 className="text-3xl sm:text-4xl font-bold text-white">從搜尋策略到視覺呈現，<br className="hidden sm:block" />一站整合。</h2><p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl">以 SEO／GEO 文章撰寫與內容優化為核心，策略規劃與顧問服務為延伸；視覺設計則提供另一項完整的專業服務。</p></div>
      <div className="inline-flex self-start p-1 rounded-xl border border-slate-800 bg-[#111827]">
        <button onClick={() => setTab('marketing')} className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${tab === 'marketing' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`} aria-pressed={tab === 'marketing'}>行銷服務</button>
        <button onClick={() => setTab('visual')} className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${tab === 'visual' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`} aria-pressed={tab === 'visual'}>視覺設計</button>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((item, i) => <article key={item.title} className="rounded-2xl border border-slate-800 bg-[#111827]/85 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4"><span className="font-mono text-sm text-indigo-300">0{i + 1}</span><span className="text-xs text-indigo-200 bg-indigo-950/60 border border-indigo-900/80 rounded-full px-3 py-1">{tab === 'marketing' ? 'MARKETING' : 'VISUAL DESIGN'}</span></div>
        <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{item.desc}</p>
        <div className="mt-5 border-y border-slate-800 py-4"><p className="text-lg font-semibold text-indigo-200">{item.price}</p><p className="mt-1 text-xs text-slate-400">{item.note}</p></div>
        <ul className="mt-5 space-y-2.5">{item.features.map(f => <li key={f} className="flex gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />{f}</li>)}</ul>
        <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white transition-colors">洽詢這項服務 <ArrowUpRight className="w-4 h-4" /></a>
      </article>)}
    </div>
    <div className="mt-16 pt-12 border-t border-slate-800">
      <p className="text-xs tracking-[0.2em] text-indigo-300 font-semibold mb-3">HOW WE WORK</p><h3 className="text-2xl sm:text-3xl font-bold text-white">合作流程</h3><p className="mt-3 text-sm text-slate-400">行銷與設計的執行細節不同，合作確認與交付邏輯則保持清楚透明。</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">{steps.map(([n, title, desc]) => <div key={n} className="border-l-2 border-indigo-500/70 pl-4 py-1"><span className="font-mono text-xs text-indigo-300">{n}</span><h4 className="mt-2 text-sm font-semibold text-white">{title}</h4><p className="mt-2 text-xs leading-relaxed text-slate-400">{desc}</p></div>)}</div>
    </div>
  </section>;
};
