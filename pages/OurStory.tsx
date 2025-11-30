import React from 'react';
import { ChevronRight, Award, Users, Globe } from 'lucide-react';
import Layout from '../components/Layout';
import SafeImage from '../components/SafeImage';
import { MILESTONES, TEAM } from '../constants';

const OurStory: React.FC = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             {/* Abstract Pattern */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-primary font-medium">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Building a Legacy</h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            From humble beginnings to an industry leader. Learn about the values that drive us.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
              <SafeImage 
                src="images/our-story-hero.jpg"
                alt="Construction Team Meeting" 
                className="rounded-lg shadow-xl relative z-10 w-full"
                fallbackType="people"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs z-20 border-l-4 border-primary hidden md:block">
                <p className="font-heading font-bold text-4xl text-primary mb-1">28+</p>
                <p className="text-gray-600 font-medium">Years of construction excellence and innovation</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold font-heading text-dark mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Apex Civil & Construction was founded on the principle that every project is an opportunity to improve the community it serves. What started as a small family operation has grown into a premier construction firm handling multi-million dollar infrastructure and commercial projects.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our success is driven by our people and our relentless commitment to safety, quality, and integrity. We don't just pour concrete; we build trust.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-bold text-dark">Award Winning</h4>
                  <p className="text-sm text-gray-500">Excellence in design</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-bold text-dark">Expert Team</h4>
                  <p className="text-sm text-gray-500">Certified pros</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <Globe className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-bold text-dark">Sustainable</h4>
                  <p className="text-sm text-gray-500">Eco-friendly build</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-dark">Our Journey</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {MILESTONES.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12 md:mb-0 relative pb-8 md:pb-16 last:pb-0 group">
                 {/* Line */}
                <div className="hidden md:block absolute left-[120px] top-2 bottom-0 w-0.5 bg-gray-200 group-last:bg-transparent"></div>
                
                <div className="md:w-[120px] flex-shrink-0 md:text-right">
                  <span className="text-2xl font-bold text-primary block">{milestone.year}</span>
                </div>
                
                {/* Dot */}
                <div className="hidden md:block absolute left-[114px] top-3 w-3.5 h-3.5 bg-white border-4 border-primary rounded-full z-10"></div>
                
                <div className="md:pl-8 flex-grow">
                  <h3 className="text-xl font-bold text-dark mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold font-heading text-dark">Leadership Team</h2>
             <p className="mt-4 text-gray-600">Meet the visionaries behind Apex Civil.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg group-hover:border-primary transition-colors duration-300">
                  <SafeImage 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    fallbackType="people"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3 uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStory;