'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Code2, 
  Heart,
  FileDown
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#06080d] border-t border-slate-800 text-slate-400 py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00bfa6] to-cyan-500 flex items-center justify-center text-black font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Software Developer specializing in robust backend architecture with PHP OOP & Laravel, complex relational database design, and dynamic modern frontend integration.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#hero" className="hover:text-[#00bfa6] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#00bfa6] transition-colors">About Me</a>
              <a href="#skills" className="hover:text-[#00bfa6] transition-colors">Skills</a>
              <a href="#work-experience" className="hover:text-[#00bfa6] transition-colors">Work Experience</a>
              <a href="#projects" className="hover:text-[#00bfa6] transition-colors">Latest Projects</a>
              <a href="#education" className="hover:text-[#00bfa6] transition-colors">Education</a>
              <a href="#why-hire-me" className="hover:text-[#00bfa6] transition-colors">Why Hire Me</a>
              <a href="#contact" className="hover:text-[#00bfa6] transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Connect & Credentials
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00bfa6] hover:border-[#00bfa6]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00bfa6] hover:border-[#00bfa6]/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00bfa6] hover:border-[#00bfa6]/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00bfa6] hover:border-[#00bfa6]/50 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#00bfa6] hover:underline"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Updated Resume</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} <span className="text-slate-300 font-semibold">{personalInfo.name}</span>. Built with Next.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#00bfa6] text-slate-300 hover:text-[#00bfa6] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
