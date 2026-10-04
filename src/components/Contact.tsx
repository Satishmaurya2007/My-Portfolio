import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Github, 
  Linkedin, 
  Twitter, 
  Code, 
  BookOpen, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { BioData } from '../types';

interface ContactProps {
  bio: BioData;
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ bio, darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(bio.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real-time secure submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmittedSuccess(false), 6000);
    }, 900);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'leetcode':
        return <Code className="w-5 h-5" />;
      case 'medium':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-20 lg:py-28 transition-colors duration-200 border-t ${
        darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-3 ${
            darkMode ? 'bg-indigo-950/70 text-indigo-400 border border-indigo-800/60' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
          }`}>
            <MessageSquare className="w-3.5 h-3.5" />
            <span>05. CONNECT & COLLABORATE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Build Something Exceptional
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Whether you have an ambitious product roadmap, an engineering role opening, or want to discuss distributed system design, my inbox is always open.
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card with Copy-to-Clipboard */}
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-2xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Direct Email
                  </span>
                  <h4 className={`text-base sm:text-lg font-bold truncate ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {bio.email}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`mailto:${bio.email}`}
                  className="flex-1 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Email Client</span>
                </a>

                <button
                  id="btn-copy-email"
                  onClick={handleCopyEmail}
                  className={`py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                    copiedEmail
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : darkMode
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  }`}
                  title="Copy email address to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Professional Profiles Grid */}
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${
                darkMode ? 'text-slate-200' : 'text-slate-900'
              }`}>
                Professional Profiles & Repositories
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bio.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    id={`contact-social-${link.platform}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                      darkMode
                        ? 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 text-slate-200 hover:border-indigo-500/50'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-indigo-400">{getSocialIcon(link.platform)}</span>
                      <div className="text-left">
                        <span className="text-xs font-bold block leading-none">{link.label}</span>
                        {link.handle && (
                          <span className={`text-[11px] font-mono leading-tight ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            {link.handle}
                          </span>
                        )}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Timezone & Location note */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between text-xs ${
              darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{bio.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Response in &lt; 4 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-10 rounded-3xl border relative shadow-xl ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-xl font-bold tracking-tight mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Send a Direct Message
              </h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Fill out the form below and I will get back to you promptly.
              </p>

              {submittedSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-start gap-3 animate-in fade-in duration-300">
                  <Check className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Message dispatched successfully!</strong>
                    <span className="text-xs text-emerald-300">
                      Thank you for reaching out. I will review your note and reply to your provided email address shortly.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        darkMode 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        darkMode 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Architecture Consulting"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode 
                        ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contact-message" 
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, goals, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                      darkMode 
                        ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <button
                  id="btn-submit-contact"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
