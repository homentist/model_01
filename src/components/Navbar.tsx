import React, { useEffect, useState } from 'react';
import { AUTHOR_INFO } from '../data/portfolioData.ts';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { name: '服務方案', href: '#services' },
    { name: '成功案例', href: '#cases' },
    { name: '關於我', href: '#about' },
    { name: '聯絡我', href: '#contact' },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0b0e14]/95 backdrop-blur-md border-b border-slate-800/80 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-white" aria-label="回到首頁">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
          <span className="font-semibold tracking-wide">{AUTHOR_INFO.name}</span>
          <span className="hidden sm:inline text-xs text-slate-400 border-l border-slate-700 pl-2">SEO / GEO CONTENT</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300" aria-label="主要導覽">
          {links.map((link) => <a key={link.href} href={link.href} className="hover:text-indigo-300 transition-colors">{link.name}</a>)}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors">
          開始洽詢 <ArrowUpRight className="w-4 h-4" />
        </a>
        <button className="md:hidden p-2 text-slate-200" onClick={() => setMobileMenuOpen(v => !v)} aria-label={mobileMenuOpen ? '關閉選單' : '開啟選單'} aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileMenuOpen && <nav className="md:hidden bg-[#101622] border-b border-slate-800 px-5 py-4 flex flex-col gap-4 text-sm text-slate-200">
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>)}
      </nav>}
    </header>
  );
};
