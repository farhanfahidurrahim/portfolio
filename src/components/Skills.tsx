'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { skillsCategories } from '@/data/portfolioData';
import { 
  Wrench, 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';

// Fallback icon render helper
const renderSkillIcon = (icon: string, name: string) => {
  if (icon.startsWith('/assets/')) {
    return (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Image 
          src={icon} 
          alt={`${name} icon`} 
          width={48} 
          height={48} 
          className="object-contain max-h-12 drop-shadow-md group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    );
  }

  // Modern SVG placeholders for extra skills
  switch (icon) {
    case 'next':
      return (
        <div className="w-12 h-12 rounded-xl bg-black border border-slate-700 flex items-center justify-center font-bold text-white text-base">
          N
        </div>
      );
    case 'ts':
      return (
        <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-bold text-blue-400 text-sm">
          TS
        </div>
      );
    case 'tailwind':
      return (
        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center font-bold text-cyan-400 text-xs">
          CSS
        </div>
      );
    case 'docker':
      return (
        <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center font-bold text-sky-400 text-xs">
          Docker
        </div>
      );
    case 'postman':
      return (
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-amber-400 text-xs">
          API
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 rounded-xl bg-[#00bfa6]/15 border border-[#00bfa6]/30 flex items-center justify-center font-bold text-[#00bfa6] text-xs">
          DEV
        </div>
      );
  }
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillsCategories.map((c) => c.title)];

  const allSkills = skillsCategories.flatMap((c) =>
    c.skills.map((s) => ({ ...s, categoryName: c.title }))
  );

  const displayedSkills =
    selectedCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.categoryName === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#080b12] border-t border-slate-800/80">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfa6]/10 border border-[#00bfa6]/20 text-[#00bfa6] text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-[#00bfa6]">Skills</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Technologies, frameworks, databases, and architectural tools I leverage to build robust enterprise software.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#00bfa6] text-black shadow-lg shadow-[#00bfa6]/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group relative p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1422] border border-slate-800/90 hover:border-[#00bfa6]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00bfa6]/10 flex flex-col items-center text-center"
            >
              {/* Glow Accent On Hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#00bfa6]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Icon */}
              <div className="mb-4">
                {renderSkillIcon(skill.icon, skill.name)}
              </div>

              {/* Skill Name */}
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00bfa6] transition-colors">
                {skill.name}
              </h3>

              {/* Category / Level Badge */}
              <div className="mt-2 flex items-center gap-1.5">
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">
                  {skill.level || 'Proficient'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Architecture Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#00bfa6]/15 flex items-center justify-center text-[#00bfa6] mb-3">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Backend Engineering</h4>
            <p className="text-sm text-slate-400">
              Object-Oriented PHP, Laravel MVC architecture, Service layers, Repository patterns, and high-load background jobs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 mb-3">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Databases & Migrations</h4>
            <p className="text-sm text-slate-400">
              Relational data modeling, MySQL & PostgreSQL migrations, index optimization, query execution plan tuning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Micro-APIs & Modern UI</h4>
            <p className="text-sm text-slate-400">
              RESTful APIs with JWT/Sanctum authentication seamlessly consumed by React, Next.js, Vue 3, and Flutter apps.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
