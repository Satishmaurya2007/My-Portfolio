import React from 'react';
import { 
  ArrowUp, 
  Code2, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { BioData } from '../types';

interface FooterProps {
  bio: BioData;
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ bio, darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <footer 
      id="main-footer"
      className={`py-12 border-t transition-colors duration-200 ${
        darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Logo & Headline */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 text-white flex items-center justify-center font-bold">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight block">
                {bio.name}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {bio.title}
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {bio.socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/70 hover:bg-indigo-600 hover:text-white text-slate-300 transition-all"
                  title={s.label}
                >
                  {getSocialIcon(s.platform)}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              id="btn-footer-back-to-top"
              aria-label="Back to top"
              className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500/30 transition-all ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} {bio.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
