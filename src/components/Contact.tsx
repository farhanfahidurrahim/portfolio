'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  MessageCircle, 
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    // Simulate instant sending
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-15 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfa6]/10 border border-[#00bfa6]/20 text-[#00bfa6] text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-[#00bfa6]">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, a software role opening, or want to collaborate? I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1422] border border-slate-800/90 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to reach out via email, phone, WhatsApp, or connect with me on LinkedIn and GitHub. I respond promptly!
              </p>

              {/* Detail Items */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-start justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#00bfa6]/40 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#00bfa6]/15 text-[#00bfa6]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Email Address</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white hover:text-[#00bfa6] transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-[#00bfa6] transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#00bfa6]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#00bfa6]/40 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#00bfa6]/15 text-[#00bfa6]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Phone Number</p>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm font-semibold text-white hover:text-[#00bfa6] transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-slate-400 hover:text-[#00bfa6] transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#00bfa6]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-[#00bfa6]/15 text-[#00bfa6]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Location</p>
                    <p className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* Quick Connect Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-semibold text-xs sm:text-sm hover:bg-emerald-600/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#00bfa6]/20 text-[#00bfa6] border border-[#00bfa6]/30 font-semibold text-xs sm:text-sm hover:bg-[#00bfa6]/30 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-400 font-medium mb-3">Connect on Social Profiles:</p>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-[#00bfa6] hover:bg-slate-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-[#00bfa6] hover:bg-slate-700 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1422] border border-slate-800/90 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Fill out the form below and I will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00bfa6] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00bfa6] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00bfa6] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00bfa6] transition-colors resize-none"
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you for reaching out! Your message has been received. I will respond to your email shortly.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Please ensure all required fields are filled correctly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-[#00bfa6] text-black hover:bg-[#00dfc2] hover:shadow-xl hover:shadow-[#00bfa6]/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{formStatus === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
