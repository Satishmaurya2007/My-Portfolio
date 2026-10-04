import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Twitter, 
  Code, 
  BookOpen, 
  ExternalLink,
  Sparkles,
  Terminal
} from 'lucide-react';
import { BioData } from '../types';

interface HeroProps {
  bio: BioData;
  darkMode: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ bio, darkMode, onOpenResume }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'leetcode':
        return <Code className="w-4 h-4" />;
      case 'medium':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background Ambient Glow Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-300'
        }`} />
        <div className={`absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-15 ${
          darkMode ? 'bg-cyan-500' : 'bg-cyan-200'
        }`} />
        <div className={`absolute -bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          darkMode ? 'bg-purple-600' : 'bg-purple-300'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border transition-all ${
              darkMode 
                ? 'bg-emerald-950/60 border-emerald-800/80 text-emerald-300 shadow-sm shadow-emerald-900/20' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-800 shadow-xs'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{bio.availability.status}</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="hidden sm:inline font-normal text-slate-300 dark:text-slate-300">
                {bio.location}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2 mb-4">
              <p className={`text-sm sm:text-base font-mono font-medium tracking-wide flex items-center gap-2 ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                <Terminal className="w-4 h-4" />
                <span>Hi, my name is</span>
              </p>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {bio.name}
              </h1>
            </div>

            {/* Primary Headline Title */}
            <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-5 ${
              darkMode ? 'text-slate-200' : 'text-slate-700'
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400">
                {bio.title}
              </span>
            </h2>

            {/* Tagline / Brief elevator pitch */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {bio.tagline}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                id="hero-cta-projects"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => scrollToSection('contact')}
                className={`w-full sm:w-auto px-5 py-3.5 font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-sm'
                }`}
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Get in Touch</span>
              </button>

              <button
                id="hero-cta-resume"
                onClick={onOpenResume}
                className={`w-full sm:w-auto px-4 py-3.5 font-medium text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 border cursor-pointer ${
                  darkMode
                    ? 'text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700 bg-slate-950/40'
                    : 'text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300 bg-slate-50'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`text-xs font-mono tracking-wider mr-1 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                PROFILES:
              </span>
              {bio.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  id={`hero-social-${social.platform}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                    darkMode
                      ? 'bg-slate-900/80 hover:bg-indigo-950/50 hover:text-indigo-300 text-slate-300 border-slate-800 hover:border-indigo-500/50'
                      : 'bg-white hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 border-slate-200 shadow-xs'
                  }`}
                  title={`${social.label} Profile`}
                >
                  {getSocialIcon(social.platform)}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Profile Card & Visual Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Frame glow */}
              <div className={`absolute -inset-1.5 rounded-3xl opacity-50 blur-xl ${
                darkMode 
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400' 
                  : 'bg-gradient-to-r from-indigo-300 to-cyan-300'
              }`} />

              {/* Main Avatar / Card Container */}
              <div className={`relative rounded-2xl p-6 sm:p-8 border shadow-2xl ${
                darkMode 
                  ? 'bg-slate-900/90 border-slate-800/90 backdrop-blur-xl' 
                  : 'bg-white border-slate-200 backdrop-blur-xl'
              }`}>
                
                {/* Avatar with status ring */}
                <div className="relative mb-6 flex items-center gap-5">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-indigo-500/50 shadow-md">
                      <img 
                        src={bio.avatarUrl} 
                        alt={bio.name}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center" title="Online & Available">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {bio.name}
                    </h3>
                    <p className={`text-xs font-mono ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-1.5`}>
                      Full-Stack & Cloud
                    </p>
                    <p className={`text-xs flex items-center gap-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {bio.location}
                    </p>
                  </div>
                </div>

                {/* Micro Terminal / Status Snippet */}
                <div className={`p-3.5 rounded-xl font-mono text-xs mb-6 border ${
                  darkMode 
                    ? 'bg-slate-950/80 border-slate-800/90 text-slate-300' 
                    : 'bg-slate-900 text-slate-200 border-slate-800'
                }`}>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    </span>
                    <span>engineer-config.ts</span>
                  </div>
                  <p className="text-emerald-400">// Core Philosophy</p>
                  <p className="text-slate-300 truncate"><span className="text-indigo-400">const</span> stack = [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Go"</span>, <span className="text-amber-300">"AWS"</span>];</p>
                  <p className="text-slate-300"><span className="text-indigo-400">export default</span> <span className="text-cyan-300">craftModernSoftware()</span>;</p>
                </div>

                {/* Stat Badges Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {bio.stats.map((stat, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl border transition-all ${
                        darkMode 
                          ? 'bg-slate-800/50 border-slate-800 hover:border-slate-700' 
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className={`text-xl font-extrabold tracking-tight ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {stat.value}
                      </div>
                      <div className={`text-xs font-medium leading-tight ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
