import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, RefreshCw } from 'lucide-react';

interface CostEstimatorProps {
  onApplyQuoteToContact: (quoteSummary: string, totalAmount: number) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyQuoteToContact }) => {
  const [seoGeneralCount, setSeoGeneralCount] = useState<number>(1);
  const [seoIndustrialCount, setSeoIndustrialCount] = useState<number>(0);
  const [seoOptimizeCount, setSeoOptimizeCount] = useState<number>(0);
  const [ebookPageCount, setEbookPageCount] = useState<number>(0);
  const [socialPostCount, setSocialPostCount] = useState<number>(0);

  // Pricing constants from presentation
  const PRICE_SEO_GENERAL = 3000;
  const PRICE_SEO_INDUSTRIAL = 4000;
  const PRICE_SEO_OPTIMIZE = 3000;
  const PRICE_EBOOK_PAGE = 800;
  const PRICE_SOCIAL_POST = 850;

  // Calculations
  const rawTotal =
    seoGeneralCount * PRICE_SEO_GENERAL +
    seoIndustrialCount * PRICE_SEO_INDUSTRIAL +
    seoOptimizeCount * PRICE_SEO_OPTIMIZE +
    ebookPageCount * PRICE_EBOOK_PAGE +
    socialPostCount * PRICE_SOCIAL_POST;

  // Volume discount rules
  let discountRate = 0;
  let discountName = '標準報價';
  if (rawTotal >= 30000) {
    discountRate = 0.1;
    discountName = '長期專案特惠 9 折';
  } else if (rawTotal >= 15000) {
    discountRate = 0.05;
    discountName = '組合專案特惠 95 折';
  }

  const discountAmount = Math.round(rawTotal * discountRate);
  const finalTotal = rawTotal - discountAmount;

  // Estimated delivery days
  const totalArticles = seoGeneralCount + seoIndustrialCount + seoOptimizeCount;
  const estimatedDays =
    Math.max(3, totalArticles * 3 + Math.ceil(ebookPageCount / 3) + Math.ceil(socialPostCount / 2));

  const handleReset = () => {
    setSeoGeneralCount(1);
    setSeoIndustrialCount(0);
    setSeoOptimizeCount(0);
    setEbookPageCount(0);
    setSocialPostCount(0);
  };

  const handleApply = () => {
    const items = [];
    if (seoGeneralCount > 0) items.push(`SEO一般新文章 x ${seoGeneralCount} 篇`);
    if (seoIndustrialCount > 0) items.push(`SEO工業文章 x ${seoIndustrialCount} 篇`);
    if (seoOptimizeCount > 0) items.push(`舊文章優化 x ${seoOptimizeCount} 篇`);
    if (ebookPageCount > 0) items.push(`電子書/型錄 x ${ebookPageCount} 頁`);
    if (socialPostCount > 0) items.push(`社群圖文系統 x ${socialPostCount} 式`);

    const summary = `【預算試算方案】${items.join(' + ')}，預估金額 NT$ ${finalTotal.toLocaleString()} 元（${discountName}），預估工期約 ${estimatedDays} 個工作天。`;
    onApplyQuoteToContact(summary, finalTotal);

    // Smooth scroll to contact
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/60">
      <div className="space-y-3 mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>PROJECT ESTIMATOR · 即時預算試算器</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          透明報價試算，預算完全掌控
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          依照您的行銷期程與專案規格，自由調整需求篇數與頁數。單篇試寫至整包季約皆享最透明之權益保障。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Sliders and item counters */}
        <div className="lg:col-span-7 bg-[#121622] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="text-sm font-bold text-white flex items-center gap-2">
              <Calculator className="w-4 h-4 text-indigo-400" />
              <span>勾選或輸入您的專案項目</span>
            </span>
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>重設數量</span>
            </button>
          </div>

          {/* Item 1: SEO General */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="font-semibold text-white">SEO/GEO 專業新文章 (一般/生活/品牌)</span>
                <span className="text-xs text-indigo-400 ml-2 font-mono">NT$ 3,000 / 篇</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSeoGeneralCount(Math.max(0, seoGeneralCount - 1))}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono font-bold text-white text-sm">
                  {seoGeneralCount}
                </span>
                <button
                  onClick={() => setSeoGeneralCount(seoGeneralCount + 1)}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-xs text-slate-400">
              包含前期深度訪談、問答型字詞篩選、2,000-3,000字原創深文與關鍵字自然布局。
            </div>
          </div>

          {/* Item 2: SEO Industrial */}
          <div className="space-y-2 pt-4 border-t border-slate-800/60">
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="font-semibold text-white">SEO/GEO 工業技術與生醫高難度文章</span>
                <span className="text-xs text-indigo-400 ml-2 font-mono">NT$ 4,000 / 篇</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSeoIndustrialCount(Math.max(0, seoIndustrialCount - 1))}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono font-bold text-white text-sm">
                  {seoIndustrialCount}
                </span>
                <button
                  onClick={() => setSeoIndustrialCount(seoIndustrialCount + 1)}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-xs text-slate-400">
              針對機器自動化、半導體科技、建材生化等需深度考證文獻與技術白皮書之長文。
            </div>
          </div>

          {/* Item 3: SEO Optimize */}
          <div className="space-y-2 pt-4 border-t border-slate-800/60">
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="font-semibold text-white">SEO/GEO 舊文章搜尋意圖翻新優化</span>
                <span className="text-xs text-indigo-400 ml-2 font-mono">NT$ 3,000 / 篇</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSeoOptimizeCount(Math.max(0, seoOptimizeCount - 1))}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono font-bold text-white text-sm">
                  {seoOptimizeCount}
                </span>
                <button
                  onClick={() => setSeoOptimizeCount(seoOptimizeCount + 1)}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-xs text-slate-400">
              拯救流量衰退舊文，重新校正搜尋意圖、架構重組，卡位 AI 搜尋摘要推薦。
            </div>
          </div>

          {/* Item 4: E-Book Design */}
          <div className="space-y-2 pt-4 border-t border-slate-800/60">
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="font-semibold text-white">電子書及 DM 型錄美學排版</span>
                <span className="text-xs text-indigo-400 ml-2 font-mono">NT$ 800 / 頁</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEbookPageCount(Math.max(0, ebookPageCount - 1))}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono font-bold text-white text-sm">
                  {ebookPageCount}
                </span>
                <button
                  onClick={() => setEbookPageCount(ebookPageCount + 1)}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-xs text-slate-400">
              生硬資料資訊梳理、極致眼球動線排版，含高解析印刷與線上 PDF 雙版本交付。
            </div>
          </div>

          {/* Item 5: Social Media Post */}
          <div className="space-y-2 pt-4 border-t border-slate-800/60">
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="font-semibold text-white">社群圖文系統 (痛點文案 + 高張力主圖)</span>
                <span className="text-xs text-indigo-400 ml-2 font-mono">NT$ 850 / 式</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSocialPostCount(Math.max(0, socialPostCount - 1))}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono font-bold text-white text-sm">
                  {socialPostCount}
                </span>
                <button
                  onClick={() => setSocialPostCount(socialPostCount + 1)}
                  className="w-7 h-7 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-xs text-slate-400">
              鎖定痛點提煉第一層對話，高張力首圖秒殺眼球，統一品牌色系與排版格線。
            </div>
          </div>
        </div>

        {/* Right Column: Pricing Summary Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#141a29] to-[#0f1422] border border-indigo-700/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl shadow-indigo-950/30">
          <div className="space-y-1">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
              ESTIMATED INVESTMENT
            </span>
            <h3 className="text-xl font-bold text-white">專案預算即時結算</h3>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs sm:text-sm">
            <div className="flex justify-between text-slate-300">
              <span>原始項目小計</span>
              <span className="font-mono text-white">NT$ {rawTotal.toLocaleString()}</span>
            </div>

            {discountRate > 0 && (
              <div className="flex justify-between text-emerald-400 font-medium">
                <span>{discountName}</span>
                <span className="font-mono">- NT$ {discountAmount.toLocaleString()}</span>
              </div>
            )}

            <div className="flex justify-between text-slate-400">
              <span>預估專案工期</span>
              <span className="font-medium text-slate-200">約 {estimatedDays} 個工作天</span>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex items-end justify-between">
              <div>
                <span className="text-xs text-slate-400 block">總計預估金額 (未稅)</span>
                <span className="text-xs text-indigo-300">階段性簽核驗收付款</span>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
                  NT$ {finalTotal.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits include */}
          <div className="space-y-2 pt-4 border-t border-slate-800/60 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>含前期需求訪談與行銷策略大腦深度對接</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>享有 2 次精確細部微調修改保障</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>提供合法發票憑證與正式保密協議簽訂</span>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={handleApply}
            className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>將此試算帶入預約諮詢表單</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
