import React, { useState } from 'react';
import { ChevronRight, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SafeImage from '../components/SafeImage';

const Enquiry: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate API call
    // In a real app, this would be: 
    // await fetch('https://formspree.io/f/your-id', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds could happen here
    }, 1500);
  };

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-primary font-medium">Contact</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-dark">Start a Project</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Get in touch with our team to discuss your next construction project.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <div>
            <h2 className="text-2xl font-bold font-heading text-dark mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are available to answer your technical questions, provide detailed quotes, or discuss partnership opportunities.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Phone</h4>
                  <p className="text-gray-600 mb-1">Mon-Fri from 8am to 6pm</p>
                  <a href="tel:+15551234567" className="text-lg font-medium text-primary hover:underline">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Email</h4>
                  <p className="text-gray-600 mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:project@apexcivil.com" className="text-lg font-medium text-primary hover:underline">project@apexcivil.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Headquarters</h4>
                  <p className="text-gray-600">
                    123 Construction Blvd<br />
                    Metro City, ST 90210
                  </p>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="mt-12 w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <SafeImage 
                 src="images/map.jpg"
                 alt="Office Location Map"
                 className="w-full h-full object-cover"
                 fallbackType="building"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
             {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12" aria-live="polite">
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                   </div>
                   <h3 className="text-2xl font-bold text-dark mb-2">Message Sent!</h3>
                   <p className="text-gray-600 mb-8">Thank you for your enquiry. Our team will get back to you within 24 hours.</p>
                   <Button onClick={() => setFormStatus('idle')} variant="outline">
                      Send Another Message
                   </Button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-dark mb-2">Send us a Message</h3>
                    <p className="text-sm text-gray-500 mb-6">Fields marked with * are required.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
                    <select 
                      id="projectType" 
                      name="projectType" 
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-white"
                    >
                      <option value="" disabled>Select a project type...</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="residential">Residential Development</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="renovation">Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-none"
                      placeholder="Please describe your project requirements..."
                    ></textarea>
                  </div>

                  {/* HTML5 File Input (No Dropzone) */}
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">Attachments (Optional)</label>
                    <input 
                      type="file" 
                      id="file"
                      className="w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary/10 file:text-primary
                        hover:file:bg-primary/20
                      "
                    />
                  </div>

                  <Button type="submit" fullWidth disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                  </Button>

                  {formStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg" aria-live="polite">
                      <AlertCircle size={18} />
                      <span className="text-sm">Something went wrong. Please try again.</span>
                    </div>
                  )}
                </form>
             )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Enquiry;