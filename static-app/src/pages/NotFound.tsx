import React from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto mobile-padding">
          <div className="mb-8">
            <i className="fas fa-exclamation-triangle text-8xl text-electric-blue mb-4"></i>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => setLocation('/')}
              className="w-full bg-electric-blue text-dark-primary py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Go Home
            </button>
            
            <button
              onClick={() => setLocation('/#projects')}
              className="w-full border border-vibrant-purple text-vibrant-purple py-3 rounded-lg font-semibold hover:bg-vibrant-purple hover:text-white transition-all duration-300"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;