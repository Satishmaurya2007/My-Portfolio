export type ProjectCategory = 'All' | 'Frontend' |  'AI & Machine Learning' | 'Open Source';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Backend & Cloud' | 'AI & Machine Learning' | 'Open Source';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
  keyFeatures?: string[];
  architecture?: string[];
  role?: string;
  year?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  category: string;
  isTopSkill?: boolean;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string; // "Full-time" | "Contract" | "Lead" | "Internship"
  current?: boolean;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  CGPA?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'leetcode';
  url: string;
  label: string;
  handle?: string;
}

export interface StatHighlight {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface BioData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  avatarUrl: string;
  availability: {
    status: 'Available for Hire' | 'Open to Consulting' | 'Employed'| 'Looking for Opportunities' | 'Not Available'|"Learning";
    details: string;
  };
  summary: string;
  detailedBio: string[];
  stats: StatHighlight[];
  socialLinks: SocialLink[];
  resumeUrl?: string;
}

export interface PortfolioData {
  bio: BioData;
  projects: Project[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
