import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Users, 
  HeartHandshake, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { BioData } from '../types';

interface AboutProps {
  bio: BioData;
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ bio, darkMode }) => {
  const engineeringPillars = [
    {
      title: "Distributed Systems & Scalability",
      description: "Designing fault-tolerant backends, event queues, and real-time streaming architectures capable of handling massive concurrency.",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      color: "from-indigo-500/20 to-purple-500/5",
      border: "border-indigo-500/30"
    },
    {
      title: "High-Performance Frontend Craft",
      description: "Building responsive, zero-jank interfaces with React, modern state synchronization, accessible semantics, and sub-second load times.",
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/5",
      border: "border-cyan-500/30"
    },
    {
      title: "Cloud Infrastructure & CI/CD",
      description: "Automating cloud environments with Kubernetes, Docker, Terraform, and resilient deployment pipelines with full observability.",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/5",
      border: "border-emerald-500/30"
    },
    {
      title: "Quality, Security & Architecture",
      description: "Strict static typing, comprehensive test coverage (TDD), automated vulnerability auditing, and crystal-clear technical documentation.",
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/5",
      border: "border-amber-500/30"
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-20 lg:py-28 transition-colors duration-200 border-t ${
        darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-3 ${
            darkMode ? 'bg-indigo-950/70 text-indigo-400 border border-indigo-800/60' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. BIOGRAPHY & PHILOSOPHY</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About Me & Engineering Journey
          </h2>
          <p className={`mt-2 text-base sm:text-lg max-w-2xl ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Passionate about turning complex systems into elegant, high-throughput digital products.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative paragraphs & Personal bio */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {bio.detailedBio.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-base sm:text-lg leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Quick Principles Banner */}
            <div className={`mt-8 p-6 rounded-2xl border ${
              darkMode 
                ? 'bg-slate-900/80 border-slate-800' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-base font-bold mb-3 flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <Compass className="w-4 h-4 text-indigo-400" />
                <span>What I Value in Every Project</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Sub-second page loads & zero jank</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Strict TypeScript & contract-driven APIs</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Observability & 99.99% service uptime</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Inclusive design & WCAG compliance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Engineering Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {engineeringPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-200 ${
                  darkMode 
                    ? `bg-slate-900/70 ${pillar.border} hover:bg-slate-800/80` 
                    : `bg-white border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300`
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${pillar.color} shrink-0`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold mb-1.5 ${
                      darkMode ? 'text-slate-100' : 'text-slate-900'
                    }`}>
                      {pillar.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
