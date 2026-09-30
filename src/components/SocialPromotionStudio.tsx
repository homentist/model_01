import React, { useState, useRef } from 'react';
import { SOCIAL_PROMO_CAMPAIGNS } from '../data/portfolioData.ts';
import {
  Sparkles,
  Download,
  Copy,
  Check,
  Smartphone,
  Square,
  RectangleVertical,
  ChevronLeft,
  ChevronRight,
  Share2,
  Sliders,
  X,
  Palette,
} from 'lucide-react';

interface SocialPromotionStudioProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SocialPromotionStudio: React.FC<SocialPromotionStudioProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCampaignIndex, setSelectedCampaignIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '4:5' | '9:16'>('4:5');
  const [copySuccess, setCopySuccess] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Editable fields for the selected campaign
  const campaign = SOCIAL_PROMO_CAMPAIGNS[selectedCampaignIndex];
  const slide = campaign.slides[currentSlideIndex];

  // Custom text states for live tweaking
  const [customHeadline, setCustomHeadline] = useState(slide.headline);
  const [customSubtext, setCustomSubtext] = useState(slide.subtext);
  const [customAuthor, setCustomAuthor] = useState('Kung, Hui-Chiao · SEO/GEO & 視覺設計');

  // Sync state when campaign or slide changes
  React.useEffect(() => {
    setCustomHeadline(slide.headline);
    setCustomSubtext(slide.subtext);
  }, [selectedCampaignIndex, currentSlideIndex]);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(campaign.copywriting);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  // High-resolution Canvas Downloader
  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    setIsExporting(true);

    try {
      const card = cardRef.current;
      const width = aspectRatio === '1:1' ? 1080 : aspectRatio === '4:5' ? 1080 : 1080;
      const height = aspectRatio === '1:1' ? 1080 : aspectRatio === '4:5' ? 1350 : 1920;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      // Dark background gradient matching SEO/GEO deck
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#0d111a');
      bgGrad.addColorStop(0.5, '#121724');
      bgGrad.addColorStop(1, '#090c13');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle atmospheric glow in corner
      const radial = ctx.createRadialGradient(width * 0.8, height * 0.2, 50, width * 0.8, height * 0.2, width * 0.7);
      radial.addColorStop(0, 'rgba(79, 70, 229, 0.25)');
      radial.addColorStop(1, 'rgba(79, 70, 229, 0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      // Border outline
      ctx.strokeStyle = '#232b3e';
      ctx.lineWidth = 4;
      ctx.strokeRect(30, 30, width - 60, height - 60);

      // Badge
      ctx.fillStyle = '#4f46e5';
      ctx.beginPath();
      ctx.roundRect(80, 80, 260, 48, 8);
      ctx.fill();

      ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(slide.badge, 100, 112);

      // Slide counter
      ctx.font = '500 20px "JetBrains Mono", monospace';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`0${currentSlideIndex + 1} / 0${campaign.slides.length}`, width - 180, 112);

      // Headline
      ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#ffffff';

      // Simple word wrapping for headline
      const words = customHeadline.split('');
      let line = '';
      let y = 220;
      const maxLineWidth = width - 160;

      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxLineWidth && i > 0) {
          ctx.fillText(line, 80, y);
          line = words[i];
          y += 60;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 80, y);

      // Subtext
      y += 50;
      ctx.font = '400 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#818cf8';
      ctx.fillText(customSubtext, 80, y);

      // Hairline divider
      y += 40;
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(80, y);
      ctx.lineTo(width - 80, y);
      ctx.stroke();

      // Bullets
      y += 60;
      slide.points.forEach((pt, idx) => {
        // Point box
        ctx.fillStyle = '#141a29';
        ctx.strokeStyle = '#273147';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(80, y - 35, width - 160, 90, 16);
        ctx.fill();
        ctx.stroke();

        // Icon dot
        ctx.fillStyle = '#6366f1';
        ctx.beginPath();
        ctx.arc(120, y + 10, 10, 0, Math.PI * 2);
        ctx.fill();

        // Point text
        ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#f1f5f9';
        ctx.fillText(pt, 150, y + 18);

        y += 120;
      });

      // Footer
      ctx.font = '500 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(customAuthor, 80, height - 80);

      ctx.fillStyle = '#6366f1';
      ctx.fillText('Swipe for more →', width - 260, height - 80);

      // Download trigger
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `HuiChiao_Promo_${campaign.id}_slide${currentSlideIndex + 1}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0f1422] border border-slate-700 max-w-6xl w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#0b0e17]">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-indigo-600/30 text-indigo-400 border border-indigo-500/40">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>接案社群圖文宣傳產生器</span>
                <span className="text-xs px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-mono">
                  PROMO STUDIO 2026
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                專為接案者打造：即時套用簡報精華、自訂排版、高解析圖文下載與社群文案一鍵複製
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Studio Body: Split View (Left: Controls, Right: Live Canvas Preview) */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          {/* Controls Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-6 bg-[#0d121d]">
            {/* Campaign Selection Tabs */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                選擇宣傳主題系列 (4大高轉化系列)
              </label>
              <div className="space-y-2">
                {SOCIAL_PROMO_CAMPAIGNS.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedCampaignIndex(idx);
                      setCurrentSlideIndex(0);
                    }}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                      selectedCampaignIndex === idx
                        ? 'bg-indigo-950/70 border-indigo-500/80 text-white shadow-sm'
                        : 'bg-[#121622] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-white line-clamp-1">{c.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{c.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Aspect Ratio Switcher */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                社群發布規格尺寸
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setAspectRatio('1:1')}
                  className={`p-2.5 rounded-xl border text-xs flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                    aspectRatio === '1:1'
                      ? 'bg-indigo-600 text-white border-indigo-400'
                      : 'bg-[#121622] text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  <Square className="w-4 h-4" />
                  <span>1:1 正方 (IG)</span>
                </button>
                <button
                  onClick={() => setAspectRatio('4:5')}
                  className={`p-2.5 rounded-xl border text-xs flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                    aspectRatio === '4:5'
                      ? 'bg-indigo-600 text-white border-indigo-400'
                      : 'bg-[#121622] text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  <RectangleVertical className="w-4 h-4" />
                  <span>4:5 肖像 (推薦)</span>
                </button>
                <button
                  onClick={() => setAspectRatio('9:16')}
                  className={`p-2.5 rounded-xl border text-xs flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                    aspectRatio === '9:16'
                      ? 'bg-indigo-600 text-white border-indigo-400'
                      : 'bg-[#121622] text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>9:16 限動 Story</span>
                </button>
              </div>
            </div>

            {/* Slide Pagination */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span>輪播卡片頁次 ({currentSlideIndex + 1} / {campaign.slides.length})</span>
                <div className="flex gap-1">
                  {campaign.slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlideIndex(i)}
                      className={`w-6 h-6 rounded-md text-xs font-mono font-bold cursor-pointer ${
                        currentSlideIndex === i
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Live Text Customizer */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                <span>自訂卡片文案</span>
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  value={customHeadline}
                  onChange={(e) => setCustomHeadline(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#0b0e14] border border-slate-700 text-xs text-white"
                  placeholder="自訂主標題"
                />
                <input
                  type="text"
                  value={customSubtext}
                  onChange={(e) => setCustomSubtext(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#0b0e14] border border-slate-700 text-xs text-white"
                  placeholder="自訂副標題"
                />
              </div>
            </div>

            {/* Copy Post Caption & Hashtags */}
            <div className="space-y-2 pt-3 border-t border-slate-800">
              <button
                onClick={handleCopyCaption}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                {copySuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">社群文案與標籤已複製！</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-indigo-400" />
                    <span>一鍵複製整篇發文文案 & Hashtags</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Live Graphic Preview Panel (Right 7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col items-center justify-center bg-[#090c13] relative overflow-hidden">
            {/* The Visual Card Container */}
            <div
              ref={cardRef}
              style={{
                aspectRatio: aspectRatio === '1:1' ? '1 / 1' : aspectRatio === '4:5' ? '4 / 5' : '9 / 16',
                maxHeight: '520px',
              }}
              className="w-full max-w-sm sm:max-w-md bg-gradient-to-br from-[#0f1422] via-[#121828] to-[#0a0d16] border border-indigo-900/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-300"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-indigo-600 text-white font-mono text-[11px] font-bold tracking-wider">
                  {slide.badge}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  0{currentSlideIndex + 1} / 0{campaign.slides.length}
                </span>
              </div>

              {/* Card Main Typography */}
              <div className="relative z-10 space-y-3 my-auto">
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight">
                  {customHeadline}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-300 font-medium">
                  {customSubtext}
                </p>

                {/* Bullets */}
                <div className="space-y-2 pt-3">
                  {slide.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#151c2e]/90 border border-slate-700/60 text-xs text-slate-200 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                      <span className="line-clamp-2 leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate max-w-[200px]">{slide.footer}</span>
                <span className="text-indigo-400 font-medium">滑動看下一頁 →</span>
              </div>
            </div>

            {/* Download & Carousel controls */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full max-w-sm sm:max-w-md">
              <button
                onClick={() => setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1))}
                disabled={currentSlideIndex === 0}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleDownloadImage}
                disabled={isExporting}
                className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{isExporting ? '生成高畫質圖檔中...' : '下載此張高解析社群圖卡'}</span>
              </button>

              <button
                onClick={() =>
                  setCurrentSlideIndex(Math.min(campaign.slides.length - 1, currentSlideIndex + 1))
                }
                disabled={currentSlideIndex === campaign.slides.length - 1}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
