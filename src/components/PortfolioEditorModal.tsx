import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  Plus, 
  Trash2, 
  Sliders, 
  User, 
  FolderGit2, 
  Globe, 
  Check
} from 'lucide-react';
import { PortfolioData, Project } from '../types';

interface PortfolioEditorModalProps {
  data: PortfolioData;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
  darkMode: boolean;
}

export const PortfolioEditorModal: React.FC<PortfolioEditorModalProps> = ({
  data,
  isOpen,
  onClose,
  onSave,
  onReset,
  darkMode,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<PortfolioData>(JSON.parse(JSON.stringify(data)));
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'socials'>('profile');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `portfolio-config.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && parsed.bio && parsed.projects) {
            setFormData(parsed);
            alert("Portfolio configuration imported successfully!");
          } else {
            alert("Invalid configuration JSON structure.");
          }
        } catch (err) {
          alert("Error parsing JSON file.");
        }
      };
    }
  };

  const handleAddProject = () => {
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: "New Custom Project",
      tagline: "High-performance software application",
      description: "Comprehensive description of the application architecture, functionality, and stack.",
      category: "Full Stack",
      tags: ["React", "TypeScript", "Node.js"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      year: "2026"
    };

    setFormData({
      ...formData,
      projects: [newProject, ...formData.projects]
    });
  };

  const handleDeleteProject = (id: string) => {
    setFormData({
      ...formData,
      projects: formData.projects.filter(p => p.id !== id)
    });
  };

  return (
    <div 
      id="portfolio-editor-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden my-6 transition-all ${
          darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`px-6 py-4 border-b flex items-center justify-between shrink-0 ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="font-bold text-base">Portfolio Personalizer & Content Editor</h3>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Customize your bio, projects, links, and export your personal configuration.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls & Import/Export Bar */}
        <div className={`px-6 py-3 border-b flex flex-wrap items-center justify-between gap-3 ${
          darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100/70 border-slate-200'
        }`}>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'profile'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Bio & General</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'projects'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Projects ({formData.projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('socials')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'socials'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Social Links</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label className={`cursor-pointer px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 ${
              darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}>
              <Upload className="w-3.5 h-3.5 text-indigo-400" />
              <span>Import JSON</span>
              <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
            </label>

            <button
              onClick={handleExportJSON}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 ${
                darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              <span>Export JSON</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[60vh] space-y-6">
          
          {/* Tab 1: Profile & Bio Editor */}
          {activeTab === 'profile' && (
            <div className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={formData.bio.name}
                    onChange={(e) => setFormData({ ...formData, bio: { ...formData.bio, name: e.target.value } })}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">Professional Title</label>
                  <input
                    type="text"
                    value={formData.bio.title}
                    onChange={(e) => setFormData({ ...formData, bio: { ...formData.bio, title: e.target.value } })}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.bio.email}
                    onChange={(e) => setFormData({ ...formData, bio: { ...formData.bio, email: e.target.value } })}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">Location</label>
                  <input
                    type="text"
                    value={formData.bio.location}
                    onChange={(e) => setFormData({ ...formData, bio: { ...formData.bio, location: e.target.value } })}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">Avatar Image URL</label>
                <input
                  type="text"
                  value={formData.bio.avatarUrl}
                  onChange={(e) => setFormData({ ...formData, bio: { ...formData.bio, avatarUrl: e.target.value } })}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">Tagline (Hero Pitch)</label>
                <textarea
                  rows={2}
                  value={formData.bio.tagline}
                  onChange={(e) => setFormData({ ...formData, bio: { ...formData.bio, tagline: e.target.value } })}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">Short Summary</label>
                <textarea
                  rows={3}
                  value={formData.bio.summary}
                  onChange={(e) => setFormData({ ...formData, bio: { ...formData.bio, summary: e.target.value } })}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                  }`}
                />
              </div>
            </div>
          )}

          {/* Tab 2: Projects Editor */}
          {activeTab === 'projects' && (
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Manage Projects Showcase
                </span>
                <button
                  onClick={handleAddProject}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              <div className="space-y-4">
                {formData.projects.map((proj, idx) => (
                  <div key={proj.id} className={`p-4 rounded-2xl border ${
                    darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-sm text-indigo-400">Project #{idx + 1}</span>
                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="p-1 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">Title</label>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[idx].title = e.target.value;
                            setFormData({ ...formData, projects: updated });
                          }}
                          className={`w-full px-3 py-1.5 rounded-lg text-xs border ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">Category</label>
                        <select
                          value={proj.category}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[idx].category = e.target.value as any;
                            setFormData({ ...formData, projects: updated });
                          }}
                          className={`w-full px-3 py-1.5 rounded-lg text-xs border ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300'
                          }`}
                        >
                          <option value="Full Stack">Full Stack</option>
                          <option value="Backend & Cloud">Backend & Cloud</option>
                          <option value="AI & ML">AI & ML</option>
                          <option value="Frontend">Frontend</option>
                          <option value="Open Source">Open Source</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">Tagline</label>
                      <input
                        type="text"
                        value={proj.tagline}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[idx].tagline = e.target.value;
                          setFormData({ ...formData, projects: updated });
                        }}
                        className={`w-full px-3 py-1.5 rounded-lg text-xs border ${
                          darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300'
                        }`}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">Live Demo URL</label>
                        <input
                          type="text"
                          value={proj.demoUrl || ''}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[idx].demoUrl = e.target.value;
                            setFormData({ ...formData, projects: updated });
                          }}
                          className={`w-full px-3 py-1.5 rounded-lg text-xs border ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">GitHub Repo URL</label>
                        <input
                          type="text"
                          value={proj.githubUrl || ''}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[idx].githubUrl = e.target.value;
                            setFormData({ ...formData, projects: updated });
                          }}
                          className={`w-full px-3 py-1.5 rounded-lg text-xs border ${
                            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300'
                          }`}
                        />
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Social Links Editor */}
          {activeTab === 'socials' && (
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                External Profiles & Handles
              </span>

              {formData.bio.socialLinks.map((social, idx) => (
                <div key={social.platform} className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-xl border border-slate-800/80">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">Platform</label>
                    <span className="text-xs font-bold capitalize block pt-1.5">{social.label}</span>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">Profile URL</label>
                    <input
                      type="text"
                      value={social.url}
                      onChange={(e) => {
                        const updated = [...formData.bio.socialLinks];
                        updated[idx].url = e.target.value;
                        setFormData({ ...formData, bio: { ...formData.bio, socialLinks: updated } });
                      }}
                      className={`w-full px-3 py-1.5 rounded-lg text-xs border ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">Handle / Label</label>
                    <input
                      type="text"
                      value={social.handle || ''}
                      onChange={(e) => {
                        const updated = [...formData.bio.socialLinks];
                        updated[idx].handle = e.target.value;
                        setFormData({ ...formData, bio: { ...formData.bio, socialLinks: updated } });
                      }}
                      className={`w-full px-3 py-1.5 rounded-lg text-xs border ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer Controls */}
        <div className={`px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <button
            onClick={() => {
              if (confirm("Reset portfolio back to default developer profile data?")) {
                onReset();
                onClose();
              }
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/30 flex items-center gap-1.5 transition-colors border border-rose-900/40"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-medium border ${
                darkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md shadow-indigo-600/30"
            >
              {savedSuccess ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              <span>{savedSuccess ? 'Saved Changes!' : 'Apply & Save'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
