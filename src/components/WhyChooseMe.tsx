import React from 'react';
import { WHY_CHOOSE_ME } from '../data/portfolioData.ts';
import { Bot, Brain, SearchCheck, CheckCircle2 } from 'lucide-react';

const icons = [Bot, Brain, SearchCheck];

export const WhyChooseMe: React.FC = () => (
  <section id="why-me" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/70">
    <div className="max-w-3xl mb-12">
      <p className="text-xs tracking-[0.2em] text-indigo-300 font-semibold mb-4">WHY WORK WITH A SPECIALIST</p>
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">既然現在有 AI，<br className="sm:hidden" />為什麼你還需要花錢請專業人員？</h2>
      <p className="mt-5 text-slate-300 leading-relaxed">{WHY_CHOOSE_ME.mainStatement} AI 可以加快產出，但內容方向、資訊正確性、搜尋意圖與品牌溝通，仍需要專業判斷與品質控管。</p>
    </div>
    <div className="grid md:grid-cols-3 gap-5">
      {WHY_CHOOSE_ME.points.map((point, index) => {
        const Icon = icons[index] || CheckCircle2;
        return <article key={point.id} className="rounded-2xl border border-slate-800 bg-[#111827]/85 p-6 sm:p-7">
          <div className="flex items-center justify-between mb-7"><span className="font-mono text-3xl text-indigo-300/80">{point.id}</span><Icon className="w-5 h-5 text-indigo-300" /></div>
          <h3 className="text-lg font-semibold text-white">{point.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{point.description}</p>
        </article>;
      })}
    </div>
    <div className="mt-8 rounded-2xl border border-indigo-900/70 bg-[#111a31] p-6 sm:p-8">
      <p className="text-xs tracking-[0.18em] text-indigo-300 font-semibold mb-3">AI × HUMAN EXPERTISE</p>
      <div className="grid sm:grid-cols-2 gap-6">
        <div><h3 className="text-white font-semibold mb-3">AI 可以協助</h3><ul className="space-y-2 text-sm text-slate-300">{['初步資料整理與摘要','文字初稿與關鍵字發想','加快重複性工作與排版草稿'].map(x => <li key={x} className="flex gap-2"><Bot className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />{x}</li>)}</ul></div>
        <div><h3 className="text-white font-semibold mb-3">專業人員負責</h3><ul className="space-y-2 text-sm text-slate-300">{['核實資訊、判斷內容是否可信','分析搜尋意圖與商業需求','建立內容架構、品牌語氣與視覺溝通','品質控管與最終決策'].map(x => <li key={x} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />{x}</li>)}</ul></div>
      </div>
      <p className="mt-6 pt-5 border-t border-indigo-900/70 text-sm sm:text-base text-indigo-100 font-medium">AI 能降低產出成本，但不能替企業承擔內容方向錯誤、資訊失真與品牌溝通失焦的風險。</p>
    </div>
  </section>
);
