import React, { useState, useEffect } from 'react';
import { defaultPortfolioData } from './data/defaultPortfolio';
import { PortfolioData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PortfolioEditorModal } from './components/PortfolioEditorModal';

const STORAGE_KEY = 'portfolio_custom_data_v1';
const THEME_KEY = 'portfolio_theme_mode';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load saved portfolio data', e);
    }
    return defaultPortfolioData;
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
    } catch (e) {
      console.error('Failed to load theme preference', e);
    }
    return true; // default to sleek modern dark theme
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Sync theme changes to document & localStorage
  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');
    } catch (e) {
      // ignore
    }
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-200';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-200';
    }
  }, [darkMode]);

  // Section Observer for active navigation indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to persist portfolio data', e);
    }
  };

  const handleResetData = () => {
    setData(defaultPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear persisted portfolio data', e);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Top Navigation Bar */}
      <Navbar
        bio={data.bio}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          bio={data.bio}
          darkMode={darkMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Biography & Philosophy Section */}
        <About
          bio={data.bio}
          darkMode={darkMode}
        />

        {/* Projects Showcase with Search & Filters */}
        <Projects
          projects={data.projects}
          darkMode={darkMode}
        />

        {/* Skills & Capabilities Matrix */}
        <Skills
          skillCategories={data.skillCategories}
          darkMode={darkMode}
        />

        {/* Career Experience & Milestones */}
        <Experience
          experiences={data.experiences}
          education={data.education}
          certifications={data.certifications}
          darkMode={darkMode}
        />

        {/* Professional Profiles & Contact Form */}
        <Contact
          bio={data.bio}
          darkMode={darkMode}
        />
      </main>

      {/* Footer */}
      <Footer
        bio={data.bio}
        darkMode={darkMode}
      />

      {/* Resume / CV Printable Preview Modal */}
      <ResumeModal
        data={data}
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        darkMode={darkMode}
      />

      {/* Portfolio Editor / Customizer Modal */}
      <PortfolioEditorModal
        data={data}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onSave={handleSaveData}
        onReset={handleResetData}
        darkMode={darkMode}
      />
    </div>
  );
}
