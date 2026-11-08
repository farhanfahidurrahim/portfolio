'use client';

import React from 'react';
import { whyHireMeReasons } from '@/data/portfolioData';
import { 
  CheckCircle2, 
  HelpCircle, 
  Code, 
  Server, 
  Cpu, 
  Database, 
  Layout, 
  CheckCheck,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  server: Server,
  cpu: Cpu,
  database: Database,
  layout: Layout,
  'check-circle': CheckCheck,
};

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-24 relative bg-[#080b12] border-t border-slate-800/80">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfa6]/10 border border-[#00bfa6]/20 text-[#00bfa6] text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Value & Strengths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why <span className="text-[#00bfa6]">Hire Me?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I bring a unique blend of formal software engineering foundations, hands-on production troubleshooting, and reliable sprint execution.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyHireMeReasons.map((reason, index) => {
            const Icon = iconMap[reason.icon] || CheckCircle2;

            return (
              <div
                key={index}
                className="group relative p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1422] border border-slate-800/90 hover:border-[#00bfa6]/60 transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00bfa6]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#00bfa6]/15 border border-[#00bfa6]/30 flex items-center justify-center text-[#00bfa6] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00bfa6] transition-colors leading-snug">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Verified Indicator */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-[#00bfa6] font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Production Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0d1624] to-slate-900 border border-[#00bfa6]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Ready to elevate your engineering team?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Whether you need backend API mastery in Laravel, relational database performance tuning, or modern React/Next.js frontend development, I am ready to deliver results.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#00bfa6] text-black hover:bg-[#00dfc2] hover:shadow-xl hover:shadow-[#00bfa6]/25 transition-all duration-200 shrink-0"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
