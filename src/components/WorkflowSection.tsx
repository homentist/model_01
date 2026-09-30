import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData.ts';
import {
  MessageCircle,
  KeyRound,
  FileSpreadsheet,
  Users2,
  PenTool,
  BarChart3,
  ChevronDown,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import processImg from '../assets/images/process_perspective_structure_1790361367911.jpg';

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [
    MessageCircle,
    KeyRound,
    FileSpreadsheet,
    Users2,
    PenTool,
    BarChart3,
  ];

  return (
    <section id="workflow" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/60">
      {/* Header */}
      <div className="space-y-3 mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>HOW WE WORK · 嚴謹作業流程</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          SEO/GEO ✕ 視覺設計作業流程
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          明確的六階段整合流程，讓您對產出過程更加瞭若指掌。拒絕黑箱作業，每一步皆有策略簽核節點與標準交付物。
        </p>
      </div>

      {/* 2-Column Layout matching Reference Image "How we work" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Architectural Photo with Floating Circular Badge */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-800 bg-[#121622] min-h-[460px] sm:min-h-[560px] flex flex-col justify-end shadow-2xl shadow-indigo-950/20">
          <img
            src={processImg}
            alt="Process perspective architecture representing structural integrity"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] contrast-[1.2]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/40 to-transparent" />

          {/* Floating Badge (like the "Бесплатная консультация" circle in reference image!) */}
          <div className="absolute top-6 right-6">
            <a
              href="#contact"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-800/90 hover:bg-indigo-600/90 border border-slate-700 hover:border-indigo-400 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center transition-all duration-300 transform hover:scale-105 shadow-xl group cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors mb-1" />
              <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                免費初步
                <br />
                網站健檢
              </span>
              <span className="text-[10px] text-slate-300 group-hover:text-indigo-100 transition-colors mt-0.5">
                限時預約中 →
              </span>
            </a>
          </div>

          {/* Bottom Card Annotation */}
          <div className="relative z-10 p-6 sm:p-8 space-y-2">
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
              METHODOLOGY · 雙核心貫徹
            </div>
            <h3 className="text-xl font-bold text-white">
              由同一個行銷大腦無縫銜接
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              從市場痛點深研到精確排版完稿，不產生執行斷層，確保每一分行銷預算轉化為長效品牌壁壘。
            </p>
          </div>
        </div>

        {/* Right Column: Step-by-Step Vertical List as in Reference Image */}
        <div className="lg:col-span-7 space-y-3">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle;
            const isOpen = activeStep === idx;

            return (
              <div
                key={step.step}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141a29] border-indigo-600/60 shadow-lg shadow-indigo-950/20'
                    : 'bg-[#10141f] border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Step Header Button */}
                <button
                  onClick={() => setActiveStep(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-mono font-bold text-sm transition-colors ${
                        isOpen
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-indigo-400">
                          STAGE {step.step}
                        </span>
                        <span className="text-xs text-slate-400">·</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                        {step.title}
                      </h4>
                    </div>
                  </div>

                  <div className="shrink-0 p-1 text-slate-400 hover:text-white transition-transform">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-indigo-400' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Step Content Drawer */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 space-y-4 border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.detailedDesc}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#0c1017] border border-slate-800/80 text-xs">
                      <div>
                        <span className="text-slate-400 font-medium">階段標準交付物：</span>
                        <span className="text-indigo-300 font-semibold ml-1.5">
                          {step.deliverable}
                        </span>
                      </div>
                      <div className="text-slate-400">
                        預估工期：<span className="text-white font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
