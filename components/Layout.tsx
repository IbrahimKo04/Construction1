import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HardHat, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Button from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Enquiry', path: '/enquiry' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="bg-primary p-2 rounded-lg group-hover:bg-yellow-600 transition-colors">
                <HardHat className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-heading text-dark tracking-tight">
                MAKE<span className="text-primary">OVER</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button to="/enquiry" variant="primary" className="py-2 px-4 text-sm">
                Get a Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <div
          className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-lg font-medium py-2 border-b border-gray-50 ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HardHat className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold font-heading">
                  MAKE<span className="text-primary">OVER</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building the future with precision, integrity, and excellence. Your trusted partner in residential, commercial, and infrastructure construction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Instagram size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold font-heading mb-6 border-b-2 border-primary inline-block pb-1">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/projects" className="hover:text-primary transition-colors">Our Projects</Link></li>
                <li><Link to="/our-story" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/enquiry" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold font-heading mb-6 border-b-2 border-primary inline-block pb-1">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Design & Engineering</li>
                <li>General Construction</li>
                <li>Renovation</li>
                <li>Project Management</li>
                <li>Civil Infrastructure</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold font-heading mb-6 border-b-2 border-primary inline-block pb-1">Contact Us</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>123 Construction Blvd,<br />Metro City, ST 90210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:info@apexcivil.com" className="hover:text-white">info@makeover.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} MAKEOVER Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;