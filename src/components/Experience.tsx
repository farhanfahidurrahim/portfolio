'use client';

import React from 'react';
import { experiences } from '@/data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="work-experience" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-pattern opacity-15 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfa6]/10 border border-[#00bfa6]/20 text-[#00bfa6] text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work & <span className="text-[#00bfa6]">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Over 2+ years of professional history developing production systems, client platforms, and high-performance APIs.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#00bfa6] via-cyan-500/50 to-slate-800" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isPresent = exp.period.includes('Present');

              return (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#080a0f] border-2 border-[#00bfa6] items-center justify-center z-20 shadow-lg shadow-[#00bfa6]/30">
                    <div className={`w-3.5 h-3.5 rounded-full ${isPresent ? 'bg-[#00bfa6] animate-ping' : 'bg-[#00bfa6]'}`} />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isEven ? 'md:pl-0' : 'md:pr-0'}`}>
                    <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0e1422] border border-slate-800/90 hover:border-[#00bfa6]/50 shadow-xl transition-all duration-300 group hover:-translate-y-1">
                      
                      {/* Top Header: Company, Period, Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#00bfa6]" />
                          <span className="font-bold text-lg text-white group-hover:text-[#00bfa6] transition-colors">
                            {exp.company}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            isPresent 
                              ? 'bg-[#00bfa6]/20 text-[#00bfa6] border border-[#00bfa6]/40' 
                              : 'bg-slate-800 text-slate-300'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Role & Date Range */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-100">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-1">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#00bfa6]" />
                            {exp.period}
                          </span>
                          {exp.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-500" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2.5 text-slate-300 text-sm mb-5">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#00bfa6] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs font-medium text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
