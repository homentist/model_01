import React, { useState, useEffect } from 'react';
import { AUTHOR_INFO } from '../data/portfolioData.ts';
import { Sparkles, MessageSquareQuote, Menu, X, ArrowUpRight, Palette } from 'lucide-react';

interface NavbarProps {
  onOpenSocialStudio: () => void;
  onOpenFeedback: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSocialStudio, onOpenFeedback }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '關於我', href: '#about' },
    { name: '為什麼選我', href: '#why-me' },
    { name: '服務方案', href: '#services' },
    { name: '合作流程', href: '#workflow' },
    { name: '實戰作品集', href: '#portfolio' },
    { name: '費用試算', href: '#estimator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c1017]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
          <span className="font-semibold tracking-wide">{AUTHOR_INFO.name}</span>
          <span className="text-xs font-normal text-slate-400 border-l border-slate-700 pl-2 hidden sm:inline">
            SEO·GEO & 視覺設計
          </span>
        </a>

        {/* Zone 2: Nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-indigo-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenSocialStudio}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-700/50 rounded-lg transition-all shadow-sm shadow-indigo-950/40 cursor-pointer"
            title="開啟社群圖文宣傳範本產生器"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="whitespace-nowrap">社群圖文宣傳套件</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-indigo-600/30 cursor-pointer"
          >
            <span>預約諮詢</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenSocialStudio}
            className="sm:hidden px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-800 rounded-md"
          >
            宣傳套件
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="開啟導覽選單"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e131d] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSocialStudio();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-700/50 rounded-lg"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>開啟接案社群圖文宣傳產生器</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg"
            >
              立即預約諮詢
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
