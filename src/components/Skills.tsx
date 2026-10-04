import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Sliders, 
  Cpu
} from 'lucide-react';
import { SkillCategory, SkillItem } from '../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ skillCategories, darkMode }) => {
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState<string>('All');
  const [skillSearch, setSkillSearch] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  const allCategories = ['All', ...skillCategories.map(c => c.title)];

  const displayedCategories = skillCategories.filter(cat => {
    if (selectedCategoryTitle !== 'All' && cat.title !== selectedCategoryTitle) {
      return false;
    }
    return true;
  });

  return (
    <section 
      id="skills" 
      className={`py-20 lg:py-28 transition-colors duration-200 border-t ${
        darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-3 ${
              darkMode ? 'bg-indigo-950/70 text-indigo-400 border border-indigo-800/60' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
            }`}>
              <Code2 className="w-3.5 h-3.5" />
              <span>03. TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Skills & Technical Expertise
            </h2>
            <p className={`mt-2 text-base sm:text-lg max-w-xl ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Core technologies, architectural patterns, and production-tested developer toolchains.
            </p>
          </div>

          {/* Quick Primary Stack Pill Overview */}
          <div className={`p-4 rounded-2xl border text-xs max-w-md ${
            darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <span className="font-mono font-bold text-indigo-400 block mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Primary Stack in Production
            </span>
            <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
              React 19, TypeScript, Node.js, Go, AWS, Docker, Kubernetes, PostgreSQL, Redis, Kafka
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {allCategories.map((title) => (
            <button
              key={title}
              onClick={() => setSelectedCategoryTitle(title)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                selectedCategoryTitle === title
                  ? darkMode
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                  : darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 shadow-2xs'
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category) => {
            const matchingSkills = category.skills.filter(s => 
              !skillSearch || s.name.toLowerCase().includes(skillSearch.toLowerCase())
            );

            if (matchingSkills.length === 0) return null;

            return (
              <div
                key={category.title}
                className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  darkMode 
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-lg' 
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-800/40 dark:border-slate-800">
                  <div className={`p-3 rounded-2xl ${
                    darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-slate-100 border border-slate-200'
                  }`}>
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {category.title}
                    </h3>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List with Progress Bars */}
                <div className="space-y-4 pt-2">
                  {matchingSkills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-1.5">
                        <span className={`flex items-center gap-1.5 ${
                          darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                          <span className="font-semibold">{skill.name}</span>
                          {skill.isTopSkill && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                              Core
                            </span>
                          )}
                        </span>
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>
                            {skill.experienceYears}
                          </span>
                          <span className="text-indigo-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar Container */}
                      <div className={`h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-slate-800' : 'bg-slate-100'
                      }`}>
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000 group-hover:brightness-110"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
