'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';
import { 
  FileDown, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Sparkles, 
  Briefcase, 
  ArrowRight,
  MessageCircle,
  Terminal
} from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phrases = personalInfo.subtitles;

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const delta = isDeleting ? 45 : 85;
      timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentPhrase.substring(0, typedText.length - 1)
            : currentPhrase.substring(0, typedText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/fbgcover.webp')` }}
    >
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-[#080a0f]/85 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080a0f]/60 via-transparent to-[#080a0f]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#00bfa6]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfa6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00bfa6]"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Available for New Challenges & Opportunities
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-slate-400 font-mono flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00bfa6]" />
                <span>Hello, I am</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
            </div>

            {/* Typewriter Subtitle */}
            <div className="min-h-[40px] flex items-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold font-mono text-[#00bfa6] tracking-wide">
                <span>{typedText}</span>
                <span className="typing-cursor">&nbsp;</span>
              </p>
            </div>

            {/* Contact Quick Info Chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-sm hover:border-[#00bfa6]/50 transition-colors">
                <Phone className="w-4 h-4 text-[#00bfa6]" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1 hover:text-[#00bfa6] transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#00bfa6]" /> : <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300" />}
                </button>
              </div>

              <div className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-sm hover:border-[#00bfa6]/50 transition-colors">
                <Mail className="w-4 h-4 text-[#00bfa6]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 hover:text-[#00bfa6] transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#00bfa6]" /> : <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300" />}
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-[#00bfa6] text-black hover:bg-[#00dfc2] hover:shadow-xl hover:shadow-[#00bfa6]/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-900/90 text-white border border-slate-700 hover:border-[#00bfa6] hover:bg-slate-800/80 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#00bfa6]" />
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 pl-1">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00bfa6] hover:border-[#00bfa6]/60 hover:bg-slate-800 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00bfa6] hover:border-[#00bfa6]/60 hover:bg-slate-800 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00bfa6] hover:border-[#00bfa6]/60 hover:bg-slate-800 transition-all duration-200"
                  aria-label="WhatsApp Chat"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Experience Pill Badge */}
            <div className="pt-3">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-900 to-[#121927] border border-[#00bfa6]/30 shadow-lg shadow-[#00bfa6]/5">
                <div className="w-8 h-8 rounded-lg bg-[#00bfa6]/15 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-[#00bfa6]" />
                </div>
                <div>
                  <span className="text-lg font-bold text-[#00bfa6]">
                    {personalInfo.experienceYears} Years
                  </span>
                  <span className="text-slate-300 text-sm ml-1.5 font-medium">
                    of Professional Industry Experience
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image Avatar Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#00bfa6]/30 via-cyan-500/20 to-blue-600/30 blur-xl opacity-70 animate-pulse-slow" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00bfa6] to-cyan-500 opacity-30" />

              {/* Main Avatar Card */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-40" />
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-2.5 animate-float">
                <div className="w-7 h-7 relative">
                  <Image src="/assets/laravel.png" alt="Laravel" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Laravel</p>
                  <p className="text-[10px] text-slate-400">Core Backend</p>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 px-3.5 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-2.5 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-7 h-7 relative">
                  <Image src="/assets/react.png" alt="React" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">React & Next.js</p>
                  <p className="text-[10px] text-slate-400">Modern Frontend</p>
                </div>
              </div>

              <div className="absolute top-1/2 -left-6 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900/95 border border-slate-800 shadow-lg hidden sm:flex items-center gap-2">
                <div className="w-5 h-5 relative">
                  <Image src="/assets/database.png" alt="MySQL" fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-slate-200">MySQL & PgSQL</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
