import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2
} from 'lucide-react';
import { PortfolioData } from '../types';

interface ResumeModalProps {
  data: PortfolioData;
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  data,
  isOpen,
  onClose,
  darkMode,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${data.bio.name.replace(/\s+/g, '_')}_Resume.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div 
      id="resume-view-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden my-6 transition-all ${
          darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className={`px-6 py-4 border-b flex items-center justify-between shrink-0 ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-base">Curriculum Vitae (CV) / Resume Preview</h3>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              id="btn-print-resume"
              onClick={handlePrint}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-colors ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
              }`}
              title="Print formatted document"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors"
              title="Export formatted data"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:space-y-6">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800/60 pb-6 text-left">
            <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {data.bio.name}
            </h1>
            <p className="text-lg font-semibold text-indigo-500 mt-1">
              {data.bio.title}
            </p>
            
            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {data.bio.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {data.bio.email}
              </span>
              {data.bio.socialLinks.map(s => (
                <span key={s.platform} className="font-mono text-indigo-400">
                  {s.label}: {s.handle || s.url}
                </span>
              ))}
            </div>

            <p className={`text-sm mt-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {data.bio.summary}
            </p>
          </div>

          {/* Core Competencies / Top Skills */}
          <div className="text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              <span>Core Technical Stack & Competencies</span>
            </h2>
            <div className="space-y-2 text-xs">
              {data.skillCategories.map(cat => (
                <div key={cat.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className={`font-bold sm:w-48 shrink-0 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {cat.title}:
                  </span>
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Work Experience */}
          <div className="text-left space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </h2>

            {data.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {exp.role} — <span className="text-indigo-400">{exp.company}</span>
                    </h3>
                    <span className="text-xs text-slate-400">{exp.location}</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {exp.period}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {exp.description}
                </p>

                <ul className="space-y-1 text-xs sm:text-sm">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className={`flex items-start gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      <span className="text-indigo-500 font-bold">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects Highlight */}
          <div className="text-left space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Key Projects Shipped</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.projects.slice(0, 4).map(proj => (
                <div key={proj.id} className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className="text-sm font-bold text-indigo-400">{proj.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{proj.tagline}</p>
                  <p className="text-[11px] font-mono text-slate-500 mt-2">
                    Tech: {proj.tags.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left pt-4 border-t border-slate-800/60">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h2>
              {data.education.map(edu => (
                <div key={edu.id}>
                  <h4 className="text-sm font-bold">{edu.degree} in {edu.field}</h4>
                  <p className="text-xs text-slate-400">{edu.institution} ({edu.period})</p>
                 
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Certifications</span>
              </h2>
              <div className="space-y-1.5 text-xs">
                {data.certifications.map(cert => (
                  <div key={cert.id}>
                    <p className="font-semibold text-slate-200">{cert.name}</p>
                    <p className="text-slate-400">{cert.issuer} • {cert.issueDate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
