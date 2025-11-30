import React, { useState, useEffect } from 'react';
import { ChevronRight, X, MapPin, Calendar, DollarSign } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SafeImage from '../components/SafeImage';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Infrastructure'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = ['All', 'Residential', 'Commercial', 'Infrastructure'];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-primary font-medium">Projects</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-dark">Our Projects</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Explore our portfolio of delivered excellence across multiple sectors.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-primary text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <SafeImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  fallbackType="building"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider bg-primary/90 px-2 py-1 rounded inline-block mb-2">
                    {project.category}
                  </p>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-dark">{project.title}</h3>
                  <span className="text-sm font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded border">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                  {project.location}
                </p>
                
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <Button 
                    variant="outline" 
                    fullWidth 
                    className="text-sm py-2"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-400">No projects found in this category.</h3>
            <button 
              onClick={() => setFilter('All')}
              className="mt-4 text-primary hover:underline font-medium"
            >
              View all projects
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 md:h-96 w-full">
              <SafeImage 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                fallbackType="building"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 md:left-8 text-white z-10">
                 <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm mb-3 inline-block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-white shadow-sm">{selectedProject.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-gray-600 mb-8 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gray-100 rounded-full text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wide">Location</span>
                    <span className="font-medium text-dark">{selectedProject.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gray-100 rounded-full text-primary">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wide">Year</span>
                    <span className="font-medium text-dark">{selectedProject.year}</span>
                  </div>
                </div>
                {selectedProject.value && (
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded-full text-primary">
                      <DollarSign size={18} />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase tracking-wide">Value</span>
                      <span className="font-medium text-dark">{selectedProject.value}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="prose prose-lg max-w-none text-gray-600">
                <h3 className="text-xl font-bold text-dark mb-4">Project Overview</h3>
                <p className="mb-4 leading-relaxed">{selectedProject.description}</p>
                <p className="leading-relaxed">
                  This project represents our commitment to excellence and sustainable development. 
                  Our team worked closely with stakeholders to deliver a solution that not only meets 
                  current needs but anticipates future demands. The architectural design integrates 
                  modern aesthetics with functional efficiency, ensuring a lasting impact on the community.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                 <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-dark font-medium text-sm transition-colors"
                 >
                   Back to Projects
                 </button>
                 <Button to="/enquiry" variant="primary">
                   Discuss Similar Project
                 </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Projects;