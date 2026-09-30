import React, { useState } from 'react';
import { MessageSquarePlus, Star, Check, Sparkles, X, Heart, ThumbsUp } from 'lucide-react';

interface UxFeedbackWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const UxFeedbackWidget: React.FC<UxFeedbackWidgetProps> = ({
  isOpen,
  onClose,
  onOpen,
}) => {
  const [visualRating, setVisualRating] = useState(5);
  const [pricingRating, setPricingRating] = useState(5);
  const [caseRating, setCaseRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state for confirmation
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFeedbackText('');
    onClose();
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-xl shadow-indigo-600/30 border border-indigo-400/40 cursor-pointer transition-all transform hover:scale-105"
          aria-label="提供使用者體驗回饋"
        >
          <MessageSquarePlus className="w-4 h-4" />
          <span>體驗回饋調查</span>
        </button>
      )}

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#121622] border border-slate-700 max-w-md w-full rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-indigo-900/60 text-indigo-400 border border-indigo-700/50">
                  <Heart className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-white">
                  網站 UX 使用者體驗回饋
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  您的寶貴回饋將協助我們持續優化接案網站與服務流程。請針對以下體驗進行評分：
                </p>

                {/* Rating 1: Visual Design */}
                <div className="space-y-1.5 bg-[#0b0e14] p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-200">1. 網站排版美學與閱讀舒適度</span>
                    <span className="font-mono text-amber-400 font-bold">{visualRating} ★</span>
                  </div>
                  <div className="flex gap-1.5 pt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setVisualRating(star)}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= visualRating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating 2: Pricing Transparency */}
                <div className="space-y-1.5 bg-[#0b0e14] p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-200">2. 服務項目與定價試算透明度</span>
                    <span className="font-mono text-amber-400 font-bold">{pricingRating} ★</span>
                  </div>
                  <div className="flex gap-1.5 pt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setPricingRating(star)}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= pricingRating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating 3: Portfolio Persuasiveness */}
                <div className="space-y-1.5 bg-[#0b0e14] p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-200">3. 實戰案例與數據說服力</span>
                    <span className="font-mono text-amber-400 font-bold">{caseRating} ★</span>
                  </div>
                  <div className="flex gap-1.5 pt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setCaseRating(star)}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= caseRating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text comment */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    您最希望增加哪些服務，或有任何建議？(選填)
                  </label>
                  <textarea
                    rows={2}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="例如：希望增加社群多圖輪播規格、或想要更多工業製造案例文本預覽..."
                    className="w-full px-3 py-2 rounded-xl bg-[#0b0e14] border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-indigo-600/30"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>送出體驗回饋</span>
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">感謝您的寶貴回饋！</h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  我們已記錄您的評分與建議，這將幫助我們打造更順暢、更高轉換的客戶體驗。
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 text-xs rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium cursor-pointer"
                  >
                    完成關閉
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
