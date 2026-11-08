'use client';

import React, { useState, useMemo } from 'react';
import { projects, Project } from '@/data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Search, 
  Sparkles, 
  Tag, 
  Layers, 
  Check, 
  X,
  Code,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Backend & API', 'Mobile & API'];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technology.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative bg-[#080b12] border-t border-slate-800/80">
      {/* Ambient Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfa6]/10 border border-[#00bfa6]/20 text-[#00bfa6] text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Latest <span className="text-[#00bfa6]">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world enterprise applications, high-performance RESTful APIs, biometric systems, and modern web portals.
          </p>
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#00bfa6] text-black shadow-lg shadow-[#00bfa6]/20 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or name..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#00bfa6] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const hasLink = Boolean(project.link);

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#0c101b] border border-slate-800/90 hover:border-[#00bfa6]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1.5"
              >
                {/* Glow Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00bfa6]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="p-6 space-y-4">
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#00bfa6]/15 text-[#00bfa6] border border-[#00bfa6]/30">
                      {project.badge || project.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      #{project.id < 10 ? `0${project.id}` : project.id}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00bfa6] transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Tech Stack Summary */}
                  <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 font-mono">
                    <span className="text-[#00bfa6] font-semibold">Tech:</span> {project.technology}
                  </div>

                  {/* Key Highlights Bullet points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {project.key_points.slice(0, 3).map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00bfa6] shrink-0 mt-1" />
                        <span className="line-clamp-2 leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-800/80 text-[11px] text-slate-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-[#00bfa6] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {hasLink ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00bfa6] text-black font-bold text-xs hover:bg-[#00dfc2] hover:shadow-md hover:shadow-[#00bfa6]/25 transition-all"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-medium text-slate-500 italic flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                      Internal / Enterprise
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Dive Case Study */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-2xl rounded-2xl bg-[#0f1420] border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#00bfa6]/15 text-[#00bfa6] border border-[#00bfa6]/30">
                  {selectedProject.badge || selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white pt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-[#00bfa6]">
                  {selectedProject.technology}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Key Engineering Deliverables & Solutions
                </h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  {selectedProject.key_points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#00bfa6] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Tags & Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  Close
                </button>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#00bfa6] text-black font-bold text-sm hover:bg-[#00dfc2] transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
