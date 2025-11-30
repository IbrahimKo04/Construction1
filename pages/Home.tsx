import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, Hammer, RefreshCw, ClipboardCheck } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SafeImage from '../components/SafeImage';
import { PROJECTS, SERVICES } from '../constants';

const Home: React.FC = () => {
  // Get first 3 projects for featured section
  const featuredProjects = PROJECTS.slice(0, 3);

  const icons = {
    PenTool,
    Hammer,
    RefreshCw,
    ClipboardCheck
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="images/hero.jpg" 
            alt="Construction site at sunset" 
            className="w-full h-full object-cover"
            fallbackType="building"
          />
          <div className="absolute inset-0 bg-dark/70" /> {/* Overlay */}
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Building The Foundation of <span className="text-primary">Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Leading the way in civil engineering and construction with innovation, safety, and unwavering quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/projects" variant="primary">
                View Our Projects
              </Button>
              <Button to="/enquiry" variant="outline" className="text-white border-white hover:bg-white hover:text-dark">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Our Capabilities</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Delivering comprehensive construction solutions tailored to the unique needs of every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => {
              const Icon = icons[service.iconName];
              return (
                <div key={service.id} className="group p-6 bg-neutral rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <Button to="/projects" variant="outline" className="flex items-center gap-2">
              View All Projects <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    fallbackType="building"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{project.location}</div>
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{project.description}</p>
                  <Link to="/projects" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
              <path d="M0 100 L100 0 L100 100 Z" />
           </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Let's build something great together. Contact our team today for a consultation or quote.
          </p>
          <Button to="/enquiry" variant="primary" className="text-lg px-8 py-4">
            Contact Us Today
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;