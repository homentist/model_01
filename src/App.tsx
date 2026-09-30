/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { StatsAbout } from './components/StatsAbout.tsx';
import { WhyChooseMe } from './components/WhyChooseMe.tsx';
import { ServicesCatalog } from './components/ServicesCatalog.tsx';
import { WorkflowSection } from './components/WorkflowSection.tsx';
import { PortfolioGallery } from './components/PortfolioGallery.tsx';
import { ClientReviews } from './components/ClientReviews.tsx';
import { CostEstimator } from './components/CostEstimator.tsx';
import { ContactConsultation } from './components/ContactConsultation.tsx';
import { SocialPromotionStudio } from './components/SocialPromotionStudio.tsx';
import { UxFeedbackWidget } from './components/UxFeedbackWidget.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [isSocialStudioOpen, setIsSocialStudioOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  // Communication between Cost Estimator and Contact form
  const [appliedQuoteSummary, setAppliedQuoteSummary] = useState('');
  const [appliedTotalAmount, setAppliedTotalAmount] = useState(0);

  const handleApplyQuote = (summary: string, total: number) => {
    setAppliedQuoteSummary(summary);
    setAppliedTotalAmount(total);
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenSocialStudio={() => setIsSocialStudioOpen(true)}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenSocialStudio={() => setIsSocialStudioOpen(true)} />

        {/* Stats & About Us Section */}
        <StatsAbout />

        {/* Why Choose Me Section (AI Dilemma & Visual Crisis) */}
        <WhyChooseMe />

        {/* Services & Pricing Catalog */}
        <ServicesCatalog onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Workflow Section (How We Work) */}
        <WorkflowSection />

        {/* Portfolio & Case Studies Gallery */}
        <PortfolioGallery />

        {/* Client Reviews & Proof */}
        <ClientReviews />

        {/* Interactive Cost Estimator */}
        <CostEstimator onApplyQuoteToContact={handleApplyQuote} />

        {/* Contact & Consultation Form */}
        <ContactConsultation
          initialQuoteSummary={appliedQuoteSummary}
          initialTotalAmount={appliedTotalAmount}
        />
      </main>

      {/* Interactive Social Media Promotion Asset Studio */}
      <SocialPromotionStudio
        isOpen={isSocialStudioOpen}
        onClose={() => setIsSocialStudioOpen(false)}
      />

      {/* Dedicated UX Feedback Mechanism */}
      <UxFeedbackWidget
        isOpen={isFeedbackOpen}
        onOpen={() => setIsFeedbackOpen(true)}
        onClose={() => setIsFeedbackOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenSocialStudio={() => setIsSocialStudioOpen(true)}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
      />
    </div>
  );
}
