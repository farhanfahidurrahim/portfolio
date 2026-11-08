'use client';

import React from 'react';
import { educationList } from '@/data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  Building, 
  CheckCircle,
  BookOpen
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-15 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfa6]/10 border border-[#00bfa6]/20 text-[#00bfa6] text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-[#00bfa6]">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Formal foundations in Software Engineering, Computer Science fundamentals, and analytical problem-solving.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {educationList.map((item) => (
            <div
              key={item.id}
              className="group relative p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1422] border border-slate-800/90 hover:border-[#00bfa6]/60 transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Degree Icon & Grade Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-xl bg-[#00bfa6]/15 border border-[#00bfa6]/30 flex items-center justify-center text-[#00bfa6] group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-right">
                    <span className="text-xs text-slate-400 font-mono mr-1">{item.gradeLabel}:</span>
                    <span className="text-sm font-bold text-[#00bfa6]">{item.grade}</span>
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#00bfa6] transition-colors leading-snug">
                  {item.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-start gap-2 text-slate-300 text-sm">
                  <Building className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{item.institution}</span>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Year Bottom Badge */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-[#00bfa6]" />
                <span className="font-medium">{item.year}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
