import React from 'react';
import './desktop-refinement.css';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { StatsAbout } from './components/StatsAbout.tsx';
import { WhyChooseMe } from './components/WhyChooseMe.tsx';
import { ServicesCatalog } from './components/ServicesCatalog.tsx';
import { PortfolioGallery } from './components/PortfolioGallery.tsx';
import { ContactConsultation } from './components/ContactConsultation.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyChooseMe />
        <ServicesCatalog />
        <PortfolioGallery />
        <StatsAbout />
        <ContactConsultation />
      </main>
      <Footer />
    </div>
  );
}
