import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  FileText, 
  SlidersHorizontal,
  Code2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { BioData } from '../types';

interface NavbarProps {
  bio: BioData;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
  onOpenCustomizer: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  bio,
  darkMode,
  onToggleDarkMode,
  onOpenResume,
  onOpenCustomizer,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5' 
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Branding */}
          <a 
            id="brand-logo"
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-105 ${
              darkMode 
                ? 'bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/25' 
                : 'bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-500/20'
            }`}>
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold text-base tracking-tight transition-colors ${
                darkMode ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                {bio.name}
              </span>
              <span className={`text-xs font-mono tracking-wide ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {bio.title.split('&')[0].trim()}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'bg-indigo-500/15 text-indigo-400 font-semibold'
                        : 'bg-indigo-50 text-indigo-700 font-semibold'
                      : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Resume, Customizer, Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Customizer / Edit Portfolio Button */}
            <button
              id="btn-open-customizer"
              onClick={onOpenCustomizer}
              title="Customize Portfolio (Name, bio, projects, theme)"
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-200 border ${
                darkMode
                  ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700/80 hover:border-indigo-500/50'
                  : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-sm'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
              <span>Customize</span>
            </button>

            {/* Resume Button */}
            <button
              id="btn-nav-resume"
              onClick={onOpenResume}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 shadow-sm ${
                darkMode
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>

            {/* Theme Toggle */}
            <button
              id="btn-theme-toggle"
              onClick={onToggleDarkMode}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg transition-colors duration-200 border ${
                darkMode
                  ? 'bg-slate-900/80 text-amber-300 border-slate-800 hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="btn-theme-toggle-mobile"
              onClick={onToggleDarkMode}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'bg-slate-900 text-amber-300 border-slate-800'
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-drawer"
            className={`md:hidden mt-3 p-4 rounded-2xl border shadow-xl transition-all duration-200 ${
              darkMode 
                ? 'bg-slate-900/95 border-slate-800 text-slate-100 backdrop-blur-lg' 
                : 'bg-white/95 border-slate-200 text-slate-900 backdrop-blur-lg'
            }`}
          >
            <div className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? darkMode
                        ? 'bg-indigo-500/20 text-indigo-400 font-semibold'
                        : 'bg-indigo-50 text-indigo-700 font-semibold'
                      : darkMode
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/40 dark:border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume / CV</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium flex items-center justify-center gap-2 border ${
                  darkMode
                    ? 'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
                <span>Customize Portfolio Data</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
