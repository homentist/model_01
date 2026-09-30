import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/portfolioData.ts';
import { Check, ArrowRight, Sparkles, ChevronRight, FileText, Layers, Palette } from 'lucide-react';
import editorialImg from '../assets/images/editorial_design_mockup_1790361380025.jpg';

interface ServicesCatalogProps {
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({ onSelectServiceForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'seo' | 'visual' | 'custom'>('all');
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/60">
      {/* Header matching Reference Image "Property Catalog" */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>SERVICES & PRICING · 專業服務與透明報價</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            全方位一條龍服務型錄
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            結合行銷心理學、演算法布局與美學排版。每一項服務皆公開透明、清楚定義作業範圍與交付項目，絕無隱藏費用。
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#121622] border border-slate-800 rounded-xl shrink-0 self-start md:self-end">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            全部方案
          </button>
          <button
            onClick={() => setSelectedCategory('seo')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'seo' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            SEO/GEO 文章
          </button>
          <button
            onClick={() => setSelectedCategory('visual')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'visual' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            電子書與社群圖文
          </button>
          <button
            onClick={() => setSelectedCategory('custom')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'custom' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            品牌客製排版
          </button>
        </div>
      </div>

      {/* Cards Grid: Styled after Reference Image 3-column Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service, idx) => (
          <div
            key={service.id}
            className="bg-[#121622] border border-slate-800/90 hover:border-indigo-500/60 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/20 flex flex-col justify-between group"
          >
            {/* Visual Top Preview Frame (like Reference Image catalog card with top photo) */}
            <div className="relative h-48 sm:h-52 bg-[#181f2f] overflow-hidden">
              {service.id === 'editorial_catalog' ? (
                <img
                  src={editorialImg}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#131a29] to-[#0d121c] relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider uppercase">
                      SERVICE 0{idx + 1}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {service.category === 'seo' ? '搜尋引擎布局' : service.category === 'visual' ? '視覺美學' : '客製整合'}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-indigo-300 font-medium">作業範疇</div>
                    <div className="text-sm font-semibold text-slate-200 line-clamp-2">
                      {service.subtitle}
                    </div>
                  </div>

                  {/* Subtle background glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl" />
                </div>
              )}

              {/* Price Tag Overlay on Card Top */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white font-mono font-bold text-xs sm:text-sm border border-white/10 shadow-lg">
                  {service.price}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Key feature bullets */}
                <div className="space-y-2 pt-2 border-t border-slate-800/70">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setModalService(service)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>查看完整細節</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#estimator"
                  onClick={() => onSelectServiceForQuote && onSelectServiceForQuote(service.id)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                >
                  加入費用試算
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {modalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#121622] border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  服務規格詳情
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {modalService.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {modalService.subtitle}
                </p>
              </div>
              <button
                onClick={() => setModalService(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="bg-[#0b0e14] p-4 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">標準服務定價</div>
                <div className="text-xl font-bold font-mono text-indigo-300">
                  {modalService.price}
                </div>
              </div>
              {modalService.priceNote && (
                <div className="text-xs text-slate-400 max-w-xs text-right">
                  {modalService.priceNote}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">五大核心作業流程內容：</h4>
              <ul className="space-y-2">
                {modalService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">主要交付項目：</h4>
              <div className="flex flex-wrap gap-2">
                {modalService.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-indigo-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-1 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
              <div className="text-xs font-semibold text-slate-300">適合對象：</div>
              <div className="text-xs text-slate-400">{modalService.recommendedFor}</div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setModalService(null)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white"
              >
                關閉
              </button>
              <a
                href="#contact"
                onClick={() => setModalService(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
              >
                針對此方案諮詢
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
