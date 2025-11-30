export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure';
  location: string;
  year: number;
  description: string;
  image: string;
  value?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'PenTool' | 'Hammer' | 'RefreshCw' | 'ClipboardCheck';
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}