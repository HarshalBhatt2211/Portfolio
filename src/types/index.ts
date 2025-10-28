export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}