'use client';

import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';
import { 
  User, 
  Code2, 
  Database, 
  Layers, 
  FileDown, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Calendar,
  Send
} from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: "Backend Engineering",
      desc: "Robust architecture with PHP OOP & Laravel MVC",
      icon: Code2
    },
    {
      title: "Database Architecture",
      desc: "High-performance MySQL & PostgreSQL schemas",
      icon: Database
    },
    {
      title: "RESTful API Integration",
      desc: "Secure endpoints for React, Vue & Flutter mobile apps",
      icon: Layers
    },
    {
      title: "Modern Frontend",
      desc: "Dynamic SPAs with React.js, Next.js, and Vue.js",
      icon: CheckCircle2
    }
  ];

  const quickStats = [
    { label: "Experience", value: "2+ Years" },
    { label: "Projects Completed", value: "9+ Systems" },
    { label: "Primary Stack", value: "Laravel / React" },
    { label: "Location", value: "Dhaka, BD" },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfa6]/10 border border-[#00bfa6]/20 text-[#00bfa6] text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-[#00bfa6]">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dedicated software developer focused on scalable backend architectures, high-performance APIs, and clean engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stylized Photo & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden glass-panel p-3 border border-slate-700/80 shadow-2xl">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                  <p className="text-white font-bold text-lg">{personalInfo.name}</p>
                  <p className="text-[#00bfa6] text-sm font-medium">B.Sc. in Software Engineering (AIUB)</p>
                </div>
              </div>
            </div>

            {/* Quick Stat Tiles */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {quickStats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-center">
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Narrative & Key Capabilities */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                I am <strong className="text-white font-semibold">Md. Fahidur Rahim</strong>, a passionate{' '}
                <span className="text-[#00bfa6] font-semibold">Software Developer</span> with over{' '}
                <span className="text-white font-semibold">2 years of professional industry experience</span> and a strong background in{' '}
                <span className="text-white font-medium">PHP (OOP), Laravel, MySQL, PostgreSQL</span>, and high-throughput{' '}
                <span className="text-white font-medium">RESTful API development</span>.
              </p>
              <p>
                Throughout my career, I have engineered and maintained enterprise web applications, built mission-critical APIs consumed by frontend (React, Vue) and mobile teams (Flutter), and led sprint teams to deliver robust software solutions on schedule.
              </p>
              <p>
                I have hands-on experience integrating physical IoT & biometric attendance hardware (fingerprint and facial recognition), barcode scanner dispatch systems, courier APIs (Pathao), and multi-branch retail POS architectures. I am continuously advancing in modern frontend engineering with <span className="text-[#00bfa6] font-semibold">React.js, Next.js</span>, and <span className="text-white font-medium">Vue.js</span>.
              </p>
            </div>

            {/* Capability Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-[#00bfa6]/40 transition-all duration-200 flex items-start gap-3.5"
                  >
                    <div className="p-2.5 rounded-lg bg-[#00bfa6]/10 text-[#00bfa6] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00bfa6] text-black font-bold text-sm hover:bg-[#00dfc2] hover:shadow-lg hover:shadow-[#00bfa6]/20 transition-all duration-200"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 text-white font-semibold text-sm hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Send className="w-4 h-4 text-[#00bfa6]" />
                <span>Get In Touch</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
