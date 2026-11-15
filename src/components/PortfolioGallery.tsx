import React, { useMemo, useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData.ts';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

type Filter = 'all' | 'industrial' | 'consumer' | 'health' | 'visual';
export const PortfolioGallery: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const cases = useMemo(() => CASE_STUDIES.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'industrial') return item.category === 'industrial';
    if (filter === 'consumer') return item.id === 'case_traffic_growth' || item.id === 'case_food_industry';
    if (filter === 'health') return item.id === 'case_food_industry';
    return item.category === 'editorial' || item.category === 'social';
  }), [filter]);
  const filters: {id: Filter; label: string}[] = [
    {id:'all',label:'全部案例'},{id:'industrial',label:'工業科技'},{id:'consumer',label:'食品與生活消費'},{id:'health',label:'醫療與健康'},{id:'visual',label:'視覺設計作品'},
  ];
  return <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/70">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-9"><div><p className="text-xs tracking-[0.2em] text-indigo-300 font-semibold mb-4">SELECTED CASE STUDIES</p><h2 className="text-3xl sm:text-4xl font-bold text-white">讓實際成果，<br className="sm:hidden" />說明專業。</h2><p className="mt-4 text-sm text-slate-300 max-w-xl">依產業與合作情境瀏覽案例，了解專案問題、執行方式與可公開的成果資訊。</p></div><a href="#contact" className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white">討論你的專案 <ArrowUpRight className="w-4 h-4" /></a></div>
    <div className="flex gap-2 overflow-x-auto pb-3 mb-7" role="group" aria-label="依產業篩選案例">{filters.map(f => <button key={f.id} onClick={() => setFilter(f.id)} aria-pressed={filter === f.id} className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs sm:text-sm transition-colors ${filter === f.id ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-[#111827] border-slate-700 text-slate-300 hover:border-indigo-400'}`}>{f.label}</button>)}</div>
    <div className="grid md:grid-cols-2 gap-5">
      {cases.map(item => <article key={item.id} className="rounded-2xl border border-slate-800 bg-[#111827]/85 p-6 sm:p-7 hover:border-indigo-800 transition-colors">
        <div className="flex flex-wrap gap-2 items-center justify-between"><span className="text-xs text-indigo-300">{item.industry}</span><span className="text-[11px] text-slate-500">{item.categoryLabel}</span></div>
        <h3 className="mt-4 text-xl font-semibold text-white leading-snug">{item.title}</h3>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.summary}</p>
        <div className="mt-5 rounded-xl bg-[#0b1220] border border-slate-800 p-4"><p className="text-xs text-slate-500">案例成果／觀察指標</p><p className="mt-1 text-lg font-semibold text-indigo-200">{item.highlightMetric}</p><p className="mt-1 text-xs text-slate-400">{item.metricLabel}</p></div>
        <div className="mt-5"><p className="text-xs font-semibold text-slate-200 mb-3">執行重點</p><ul className="space-y-2">{item.strategy.slice(0,3).map(s => <li key={s} className="flex gap-2 text-xs leading-relaxed text-slate-400"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-300 shrink-0 mt-0.5" />{s}</li>)}</ul></div>
        <p className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-500">成果依原提案簡報所列案例資料呈現；實際成效仍依專案期間、網站條件與可取得數據而異。</p>
      </article>)}
    </div>
    {cases.length === 0 && <p className="text-slate-400 text-sm">目前沒有符合此分類的案例。</p>}
  </section>;
};
