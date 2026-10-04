import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle, 
  BarChart3, 
  Calendar, 
  User, 
  Sparkles
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  return (
    <div 
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-8 transition-all ${
          darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-center brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Project Details"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white backdrop-blur-md transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Overlay Category & Title */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-sm">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-slate-950 flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  Featured Project
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Metadata Row */}
          <div className={`flex flex-wrap items-center gap-4 text-xs font-medium pb-4 border-b ${
            darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
          }`}>
            {project.role && (
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-indigo-400" />
                <span>Role: <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>{project.role}</strong></span>
              </span>
            )}
            {project.year && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>Year: <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>{project.year}</strong></span>
              </span>
            )}
          </div>

          {/* Deep Overview */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              Project Overview
            </h4>
            <p className={`text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Metrics Highlight if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                <BarChart3 className="w-4 h-4" />
                <span>Key Metrics & Measurable Impact</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-xl border text-center ${
                      darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="text-xl font-extrabold text-indigo-500">{m.value}</div>
                    <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features List */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                <CheckCircle className="w-4 h-4" />
                <span>Key Capabilities & Features</span>
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Highlights */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                <Layers className="w-4 h-4" />
                <span>System Architecture</span>
              </h4>
              <div className={`p-4 rounded-xl border font-mono text-xs space-y-1.5 ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-900 text-slate-200 border-slate-800'
              }`}>
                {project.architecture.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400">⚡</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                    darkMode 
                      ? 'bg-slate-800 text-slate-300 border-slate-700' 
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className={`p-6 border-t flex flex-wrap items-center justify-end gap-3 ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-colors ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-xs'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application Demo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
