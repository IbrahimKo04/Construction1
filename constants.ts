import { Milestone, Project, Service, TeamMember } from './types';

// Mock Data for the application
// Note: In a real app, images would be served from the /images folder.
// We are using picsum.photos as fallbacks in the SafeImage component if the local file isn't found.

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Design & Engineering',
    description: 'Comprehensive structural design and civil engineering planning for complex infrastructures.',
    iconName: 'PenTool',
    image: 'images/service-design.jpg'
  },
  {
    id: 's2',
    title: 'General Construction',
    description: 'End-to-end construction services for commercial and residential developments.',
    iconName: 'Hammer',
    image: 'images/service-build.jpg'
  },
  {
    id: 's3',
    title: 'Renovation & Restoration',
    description: 'Modernizing existing structures while preserving historical integrity and structural safety.',
    iconName: 'RefreshCw',
    image: 'images/service-renovation.jpg'
  },
  {
    id: 's4',
    title: 'Project Management',
    description: 'Dedicated oversight ensuring projects are delivered on time, within budget, and to spec.',
    iconName: 'ClipboardCheck',
    image: 'images/service-management.jpg'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Skyline Plaza',
    category: 'Commercial',
    location: 'Downtown Metro',
    year: 2023,
    description: 'A 45-story mixed-use commercial tower with sustainable energy systems.',
    image: 'images/project-1.jpg',
    value: '$120M'
  },
  {
    id: 'p2',
    title: 'River Bridge Expansion',
    category: 'Infrastructure',
    location: 'Westside Crossing',
    year: 2022,
    description: 'Widening of the main arterial bridge to support increased commuter traffic.',
    image: 'images/project-2.jpg',
    value: '$45M'
  },
  {
    id: 'p3',
    title: 'Oakwood Residency',
    category: 'Residential',
    location: 'North Hills',
    year: 2023,
    description: 'Luxury residential complex consisting of 200 units and community amenities.',
    image: 'images/project-3.jpg',
    value: '$32M'
  },
  {
    id: 'p4',
    title: 'Tech Park One',
    category: 'Commercial',
    location: 'Innovation District',
    year: 2021,
    description: 'Campus style office park designed for leading technology firms.',
    image: 'images/project-4.jpg',
    value: '$85M'
  },
  {
    id: 'p5',
    title: 'Central Station Upgrade',
    category: 'Infrastructure',
    location: 'City Center',
    year: 2020,
    description: 'Modernization of the central transit hub including new platforms and retail.',
    image: 'images/project-5.jpg',
    value: '$60M'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'John Anderson',
    role: 'Founder & CEO',
    bio: 'With over 30 years in civil engineering, John leads MAKEOVER with a vision for sustainable growth.',
    image: 'images/team-john.jpg'
  },
  {
    id: 't2',
    name: 'Sarah Chen',
    role: 'Head of Architecture',
    bio: 'Sarah brings award-winning design expertise and a passion for modern aesthetics.',
    image: 'images/team-sara.jpg'
  },
  {
    id: 't3',
    name: 'Michael Ross',
    role: 'Senior Project Manager',
    bio: 'Michael ensures operational excellence and safety across all our active sites.',
    image: 'images/team-mike.jpg'
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: '1995',
    title: 'Founded',
    description: 'MAKEOVER was established by John Anderson with a single dump truck and a vision.'
  },
  {
    year: '2005',
    title: 'Commercial Expansion',
    description: 'Expanded operations to include large-scale commercial high-rises.'
  },
  {
    year: '2015',
    title: 'National Recognition',
    description: 'Awarded "Builder of the Year" for the State Infrastructure Project.'
  },
  {
    year: '2024',
    title: 'Sustainable Future',
    description: 'Committed to 100% green building practices for all new projects.'
  }
];