import React, { useState, useEffect } from 'react';
import { AUTHOR_INFO } from '../data/portfolioData.ts';
import { Send, CheckCircle2, Copy, Sparkles, MessageCircle, Mail, ExternalLink } from 'lucide-react';

interface ContactConsultationProps {
  initialQuoteSummary?: string;
  initialTotalAmount?: number;
}

export const ContactConsultation: React.FC<ContactConsultationProps> = ({
  initialQuoteSummary = '',
  initialTotalAmount = 0,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    lineId: '',
    websiteUrl: '',
    serviceType: 'SEO/GEO 專業新文章撰寫',
    painPoints: '',
    budget: initialTotalAmount > 0 ? `NT$ ${initialTotalAmount.toLocaleString()}` : '尚未確定，希望進一步評估',
    quoteNote: initialQuoteSummary,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [consultationId, setConsultationId] = useState('');

  // Update quote note when prop changes
  useEffect(() => {
    if (initialQuoteSummary) {
      setFormData((prev) => ({
        ...prev,
        quoteNote: initialQuoteSummary,
        budget: initialTotalAmount > 0 ? `NT$ ${initialTotalAmount.toLocaleString()}` : prev.budget,
      }));
    }
  }, [initialQuoteSummary, initialTotalAmount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `HK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setConsultationId(id);
    setSubmitted(true);
  };

  const generateConsultationText = () => {
    return `【Kung, Hui-Chiao 行銷設計諮詢單 - ${consultationId || 'HK-2026'}】
姓名：${formData.name}
公司/品牌：${formData.company}
Email：${formData.email}
LINE ID：${formData.lineId || '未提供'}
官網/粉專：${formData.websiteUrl || '無'}
諮詢項目：${formData.serviceType}
專案痛點與需求：
${formData.painPoints}
${formData.quoteNote ? `\n試算規格：${formData.quoteNote}` : ''}
預算範圍：${formData.budget}`;
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(generateConsultationText());
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Contact & Trust */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>START COOPERATION · 預約合作諮詢</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            啟動你的
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-white block sm:inline sm:ml-2">
              流量變現計畫
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            「用更正確、更有效的專業文章與精緻排版，為你的品牌在 AI 搜尋時代卡位第一眼曝光。」
          </p>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <div className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-700/60 flex items-center justify-center text-indigo-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400">官方合作信箱</div>
                <a
                  href={`mailto:${AUTHOR_INFO.email}`}
                  className="font-medium text-white hover:text-indigo-400 transition-colors"
                >
                  {AUTHOR_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <div className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-700/60 flex items-center justify-center text-indigo-400 shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400">諮詢與對接 LINE</div>
                <div className="font-medium text-white">
                  {AUTHOR_INFO.lineId}
                  <span className="text-xs text-indigo-400 ml-2">(填表後可一鍵帶入)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#121622] border border-slate-800 space-y-2">
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>諮詢回覆承諾</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              所有填寫之商業資料均受嚴格保密協議約束。送出後將於 24 小時內親自回覆初步評估建議與排期建議。
            </p>
          </div>
        </div>

        {/* Right Column: Form or Success Confirmation */}
        <div className="lg:col-span-7 bg-[#121622] border border-slate-800/90 rounded-2xl p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    聯絡人稱呼 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例：王小姐 / David"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    品牌或公司名稱 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例：Universal 或 居家新創"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    電子信箱 Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    LINE ID 或 聯絡電話
                  </label>
                  <input
                    type="text"
                    placeholder="便於後續即時確認"
                    value={formData.lineId}
                    onChange={(e) => setFormData({ ...formData, lineId: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  官網、粉專或作品參考網址 (選填，可供免費初步健檢)
                </label>
                <input
                  type="text"
                  placeholder="https://www.yourbrand.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    諮詢服務類別
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="SEO/GEO 專業新文章撰寫">SEO/GEO 專業新文章撰寫</option>
                    <option value="SEO/GEO 舊文章搜尋意圖翻新">SEO/GEO 舊文章搜尋意圖翻新</option>
                    <option value="電子書及 DM 型錄設計">電子書及 DM 型錄設計</option>
                    <option value="社群圖文系統設計">社群圖文系統設計</option>
                    <option value="平面設計與客製化排版">平面設計與客製化排版</option>
                    <option value="全方位長期品牌代操">全方位長期品牌代操</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    預計預算範圍
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              {formData.quoteNote && (
                <div className="p-3 bg-[#0c1017] rounded-xl border border-indigo-900/60 text-xs text-indigo-300">
                  <span className="font-semibold">帶入試算摘要：</span>
                  <span className="text-slate-300 ml-1">{formData.quoteNote}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  專案背景、想解決的痛點或目標關鍵字
                </label>
                <textarea
                  rows={3}
                  placeholder="例如：我們是新興品牌，目前沒有自然搜尋排名，希望針對主力產品撰寫3篇深度長文，並重新設計一份給經銷商的電子型錄..."
                  value={formData.painPoints}
                  onChange={(e) => setFormData({ ...formData, painPoints: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>送出諮詢並建立專屬諮詢單</span>
              </button>
            </form>
          ) : (
            <div className="space-y-6 text-center py-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                  CONSULTATION CONFIRMED · 編號 {consultationId}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  諮詢需求已成功建立！
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  感謝您的信任！我們已收到您的合作諮詢，江慧喬 (Kung, Hui-Chiao) 將於 24 小時內與您聯繫。
                </p>
              </div>

              {/* Formatted Message Box */}
              <div className="text-left bg-[#0b0e14] border border-slate-800 rounded-xl p-4 space-y-2 text-xs text-slate-300 font-mono">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="font-semibold text-white">您的諮詢草稿已備妥</span>
                  <button
                    onClick={handleCopyDraft}
                    className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-sans text-xs cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copySuccess ? '已複製！' : '一鍵複製'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-slate-400">
                  {generateConsultationText()}
                </pre>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleCopyDraft}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copySuccess ? '複製成功！可直接貼給小編' : '複製草稿至 LINE / 微信'}</span>
                </button>

                <a
                  href={`mailto:${AUTHOR_INFO.email}?subject=諮詢洽談-${consultationId}-${formData.company}&body=${encodeURIComponent(generateConsultationText())}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>直接以 Email 傳送</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  填寫下一份
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
