import React, { useState } from 'react';
import { WHY_CHOOSE_ME } from '../data/portfolioData.ts';
import { Bot, Brain, Sparkles, AlertTriangle, Check, X, ShieldAlert, FileText, ArrowRight } from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'visual' | 'comparison'>('ai');

  return (
    <section id="why-me" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/60">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>WHY CHOOSE ME · 核心競爭優勢</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
          既然現在有 AI，
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-white">
            為什麼你還需要花錢請專業人員？
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {WHY_CHOOSE_ME.mainStatement}
        </p>

        {/* Filter / View Switcher (Allowed interactive tabs per constitution) */}
        <div className="inline-flex p-1 bg-[#121622] border border-slate-800 rounded-xl mt-4">
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'ai'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            消除 AI 隱性成本
          </button>
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'visual'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            突破視覺排版痛點
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            成效差異對比表
          </button>
        </div>
      </div>

      {/* Tab 1: 3 Big Pillars from SEO/GEO slide 2 */}
      {activeTab === 'ai' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
          {WHY_CHOOSE_ME.points.map((point) => (
            <div
              key={point.id}
              className="bg-[#121622] border border-slate-800/90 hover:border-indigo-600/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-indigo-950/20 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-indigo-400/80 group-hover:text-indigo-300 transition-colors">
                    {point.id}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                    {point.subtitle}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {point.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-medium text-indigo-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{point.takeaway}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Visual Crisis & Aesthetic Solution from Visual slide 2 */}
      {activeTab === 'visual' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE_ME.visualPainPoints.points.map((vp, idx) => (
              <div
                key={idx}
                className="bg-[#121622] border border-red-950/40 hover:border-red-800/50 rounded-2xl p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center gap-2 text-red-400 text-xs font-semibold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  <span>常見致命痛點 {idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {vp.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {vp.desc}
                </p>
              </div>
            ))}
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-r from-indigo-950/50 via-[#141a29] to-indigo-950/50 border border-indigo-700/50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                THE SOLUTION · 解決方案
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                將生硬資料梳理為極致的眼球動線與商業留白
              </h4>
              <p className="text-slate-300 text-sm">
                從資訊結構化梳理到客製美學排版，集結為清晰好懂、兼具呼吸感與高轉換率的視覺輸出。
              </p>
            </div>
            <a
              href="#services"
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors whitespace-nowrap"
            >
              查看視覺設計方案
            </a>
          </div>
        </div>
      )}

      {/* Tab 3: Detailed Comparison Matrix */}
      {activeTab === 'comparison' && (
        <div className="bg-[#121622] border border-slate-800 rounded-2xl overflow-hidden animate-in fade-in duration-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0e121a]">
                  <th className="py-4 px-6 font-semibold text-slate-300">比較維度</th>
                  <th className="py-4 px-6 font-semibold text-slate-400">自己摸索 AI / 拼湊工具</th>
                  <th className="py-4 px-6 font-semibold text-slate-400">市面零散接案 (多頭馬車)</th>
                  <th className="py-4 px-6 font-bold text-indigo-400 bg-indigo-950/30">
                    Hui-Chiao 雙核心一條龍
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">時間與溝通成本</td>
                  <td className="py-4 px-6 text-slate-400">
                    <span className="text-red-400 font-medium">極高</span>：需反覆下 Prompt 除錯、修改空洞公式語句
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    <span className="text-amber-400 font-medium">高</span>：文章跟設計分開發包，來回協調對話斷層
                  </td>
                  <td className="py-4 px-6 text-emerald-400 bg-indigo-950/20 font-medium">
                    <span className="text-indigo-300 font-bold">極低</span>：同一個行銷大腦貫徹，省去多餘溝通成本
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">內容深度與原創性</td>
                  <td className="py-4 px-6 text-slate-400">
                    空泛套版、缺乏真正產業痛點與溫度
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    大多為拼湊偽原創，容易被演算法降權
                  </td>
                  <td className="py-4 px-6 text-emerald-400 bg-indigo-950/20 font-medium">
                    2,000~3,000字原創深研，結合行銷心理學與產業知識
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">SEO & GEO 實戰成效</td>
                  <td className="py-4 px-6 text-slate-400">
                    缺乏關鍵字轉化架構與搜尋意圖分析
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    只給關鍵字不懂轉化，或是只寫字不管演算法
                  </td>
                  <td className="py-4 px-6 text-emerald-400 bg-indigo-950/20 font-medium">
                    多個高難度字詞 Google #1 霸榜，卡位 AI 搜尋摘要
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">視覺美學與留白動線</td>
                  <td className="py-4 px-6 text-slate-400">
                    教科書死板排版、零碎拼湊，跳出率高
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    設計師不懂商業轉化邏輯，徒具花俏無轉換
                  </td>
                  <td className="py-4 px-6 text-emerald-400 bg-indigo-950/20 font-medium">
                    極致眼球動線梳理，兼具留白呼吸感與高商業轉換率
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};
