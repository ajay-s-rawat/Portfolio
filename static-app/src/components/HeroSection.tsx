import React from 'react';
import { scrollToSection, downloadFile } from '../lib/utils';

const HeroSection: React.FC = () => {
  const handleViewWork = () => {
    scrollToSection("#projects");
  };

  const handleDownloadCV = () => {
    downloadFile("/attached_assets/AjaySinghRawatResume_1752400935401.pdf", "AjaySinghRawat_Resume.pdf");
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-bg pt-16">
      <div className="max-w-7xl mx-auto mobile-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="mobile-hero-title font-bold leading-tight">
                Game Developer
                <span className="block text-gradient">& Unity Expert</span>
              </h1>
              <p className="mobile-text text-gray-300 max-w-lg">
                Unity Developer with 7+ years of experience building games, Augmented Reality and Virtual Reality projects, and metaverse applications. Available as an independent contractor for development and consulting services.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleViewWork}
                className="bg-electric-blue text-dark-primary mobile-button rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 neon-glow"
              >
                View My Work
              </button>
              <button 
                onClick={handleDownloadCV}
                className="border border-vibrant-purple text-vibrant-purple mobile-button rounded-lg font-semibold hover:bg-vibrant-purple hover:text-white transition-all duration-300 neon-glow-purple"
              >
                Download CV
              </button>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                <i className="fab fa-github text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                <i className="fab fa-linkedin text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                <i className="fab fa-twitter text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                <i className="fab fa-itch-io text-2xl" />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block slide-up">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-electric-blue/20 to-vibrant-purple/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 glass-morphism rounded-2xl flex items-center justify-center">
                  <i className="fas fa-gamepad text-8xl text-gradient"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;