export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'other' | 'programming' | 'frameworks' | 'database' | 'skills';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
  payload: {
    issue?: {
      number: number;
    };
    pull_request?: {
      number: number;
    };
    ref_type?: string;
    ref?: string;
  };
}

export interface GitHubActivity {
  events: GitHubEvent[];
  loading: boolean;
  error: string | null;
}