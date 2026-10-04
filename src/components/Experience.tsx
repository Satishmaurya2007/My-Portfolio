import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Building2, 
  ExternalLink, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { ExperienceItem, EducationItem, CertificationItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({
  experiences,
  education,
  certifications,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section 
      id="experience" 
      className={`py-20 lg:py-28 transition-colors duration-200 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider mb-3 ${
              darkMode ? 'bg-indigo-950/70 text-indigo-400 border border-indigo-800/60' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
            }`}>
              <Briefcase className="w-3.5 h-3.5" />
              <span>04. TRACK RECORD & MILESTONES</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Experience & Qualifications
            </h2>
            <p className={`mt-2 text-base sm:text-lg max-w-xl ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              A chronological history of leadership, engineering impact, and academic background.
            </p>
          </div>

          {/* Toggle Tab Buttons */}
          <div className={`inline-flex p-1.5 rounded-2xl border ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'work'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Certs</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === 'work' && (
          <div className="relative border-l-2 border-slate-800/80 dark:border-slate-800 ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-10">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node icon */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  exp.current 
                    ? 'bg-indigo-600 border-slate-950 text-white shadow-md shadow-indigo-500/50' 
                    : darkMode 
                      ? 'bg-slate-900 border-slate-950 text-slate-400' 
                      : 'bg-slate-200 border-white text-slate-600'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${exp.current ? 'bg-white animate-pulse' : 'bg-indigo-500'}`} />
                </div>

                {/* Experience Card */}
                <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  darkMode 
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-xl' 
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}>
                  
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className={`text-xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Present Role
                          </span>
                        )}
                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-mono ${
                          darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-1.5 flex-wrap text-xs sm:text-sm">
                        <span className={`font-semibold flex items-center gap-1 text-indigo-400`}>
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className={`flex items-center gap-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-medium self-start sm:self-auto border ${
                      darkMode ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Bulleted Achievements */}
                  <div className="space-y-2.5 mb-6">
                    <h4 className={`text-xs font-bold uppercase tracking-wider ${
                      darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`}>
                      Key Impacts & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                            {ach}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used Pills */}
                  <div className="pt-4 border-t border-slate-800/40 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono ${
                            darkMode 
                              ? 'bg-slate-800/80 text-slate-300 border border-slate-700/60' 
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education & Certifications */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Education Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Academic Background
                </h3>
              </div>

              {education.map((edu) => (
                <div
                  key={edu.id}
                  className={`p-6 sm:p-8 rounded-3xl border ${
                    darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {edu.degree} in {edu.field}
                    </h4>
                    <span className="px-3 py-1 rounded-xl text-xs font-mono bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                      {edu.period}
                    </span>
                  </div>

                  <p className={`text-sm font-semibold text-indigo-400 mb-2`}>
                    {edu.institution} • <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>{edu.location}</span>
                  </p>

                  {edu.gpaOrHonors && (
                    <div className="mb-4 inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {edu.gpaOrHonors}
                    </div>
                  )}

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-1.5 text-sm mt-3 pt-3 border-t border-slate-800">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className={`flex items-start gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-indigo-400" />
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Industry Certifications
                </h3>
              </div>

              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                    darkMode ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {cert.name}
                      </h4>
                      <p className="text-sm font-medium text-indigo-400 mt-0.5">
                        {cert.issuer}
                      </p>
                      <p className={`text-xs mt-1.5 font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Validity: {cert.issueDate}
                      </p>
                      {cert.credentialId && (
                        <p className={`text-xs font-mono mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                          Credential ID: {cert.credentialId}
                        </p>
                      )}
                    </div>

                    <div className="p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>

                  {cert.credentialUrl && (
                    <div className="mt-5 pt-3 border-t border-slate-800/60">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:underline"
                      >
                        <span>Verify Credential on Issuer Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
