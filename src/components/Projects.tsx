import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  Code2, 
  Filter,
  Info
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Full Stack',
    'Backend & Cloud',
    'AI & Machine Learning',
    'Frontend',
    'Open Source'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query));
      
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section 
      id="projects" 
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
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>02. FEATURED WORK & CASE STUDIES</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Selected Projects Showcase
            </h2>
            <p className={`mt-2 text-base sm:text-lg max-w-xl ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              A curated collection of scalable production architectures, open-source tooling, and full-stack applications.
            </p>
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full md:w-72">
            <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`} />
            <input
              id="project-search-input"
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 border ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500' 
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1 hidden sm:inline" />
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === cat
                  ? darkMode
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                  : darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {cat}
              {cat === 'All' && ` (${projects.length})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`p-12 text-center rounded-2xl border ${
            darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <p className={`text-base font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              No projects found matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800/90 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10'
                    : 'bg-white border-slate-200 hover:border-indigo-400/80 hover:shadow-xl hover:shadow-slate-200'
                }`}
              >
                {/* Project Image Preview Container */}
                <div 
                  className="relative h-52 w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveProjectModal(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  {/* Category & Featured Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/80 text-white backdrop-blur-md border border-white/15">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-500 text-slate-950 flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Click to expand hover hint */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-600 text-white flex items-center gap-1 shadow-md">
                      <Info className="w-3.5 h-3.5" />
                      Details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Project Title */}
                    <h3 
                      onClick={() => setActiveProjectModal(project)}
                      className={`text-lg font-bold tracking-tight mb-1.5 group-hover:text-indigo-400 transition-colors cursor-pointer flex items-center justify-between ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors shrink-0" />
                    </h3>

                    {/* Tagline */}
                    <p className={`text-xs font-medium mb-3 ${
                      darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`}>
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Key Metrics Snippet */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className={`grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl border text-xs ${
                        darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx}>
                            <span className="font-bold text-indigo-400">{m.value}</span>
                            <span className={`block text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills & Action Footer */}
                  <div className="pt-3 border-t border-slate-800/40 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-[11px] font-mono ${
                            darkMode 
                              ? 'bg-slate-800 text-slate-300' 
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-mono ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className={`text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer ${
                          darkMode ? 'text-indigo-400' : 'text-indigo-600'
                        }`}
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Architecture & Info</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg border transition-colors ${
                              darkMode 
                                ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700' 
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                            }`}
                            title="GitHub Code Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors"
                            title="Live Demo Application"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        darkMode={darkMode}
      />
    </section>
  );
};
