import React from 'react';
import { useParams, useLocation } from 'wouter';
import { projects } from '../data/projects';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
            <button
              onClick={() => setLocation('/')}
              className="bg-electric-blue text-dark-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleBackToProjects = () => {
    setLocation('/#projects');
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-bg">
          <div className="max-w-7xl mx-auto mobile-padding">
            <button
              onClick={handleBackToProjects}
              className="flex items-center gap-2 text-electric-blue hover:text-white transition-colors duration-300 mb-8"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Projects
            </button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-gray-400">{project.year}</span>
                </div>
                
                <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
                <p className="text-xl text-gray-300 mb-8">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-electric-blue text-dark-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-vibrant-purple text-vibrant-purple px-6 py-3 rounded-lg font-semibold hover:bg-vibrant-purple hover:text-white transition-all duration-300 flex items-center gap-2"
                    >
                      <i className="fab fa-github"></i>
                      Source Code
                    </a>
                  )}
                  {project.links.store && (
                    <a
                      href={project.links.store}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                    >
                      <i className="fas fa-store"></i>
                      App Store
                    </a>
                  )}
                </div>
              </div>
              
              <div className="slide-up">
                <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-vibrant-purple/20 rounded-2xl flex items-center justify-center glass-morphism">
                  <i className="fas fa-gamepad text-8xl text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        {project.details && (
          <section className="py-20 bg-dark-secondary">
            <div className="max-w-7xl mx-auto mobile-padding">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="glass-morphism rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-electric-blue">Project Overview</h3>
                    <p className="text-gray-300">{project.details.overview}</p>
                  </div>
                  
                  <div className="glass-morphism rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-vibrant-purple">Technical Challenges</h3>
                    <p className="text-gray-300">{project.details.challenges}</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="glass-morphism rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-electric-blue">Solutions Implemented</h3>
                    <p className="text-gray-300">{project.details.solutions}</p>
                  </div>
                  
                  <div className="glass-morphism rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-vibrant-purple">Results & Impact</h3>
                    <p className="text-gray-300">{project.details.results}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="py-20 bg-dark-primary">
          <div className="max-w-7xl mx-auto mobile-padding">
            <h2 className="text-3xl font-bold text-center mb-12">
              More <span className="text-gradient">Projects</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.id !== project.id && p.category === project.category)
                .slice(0, 3)
                .map((relatedProject) => (
                  <div
                    key={relatedProject.id}
                    className="glass-morphism rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => setLocation(`/project/${relatedProject.id}`)}
                  >
                    <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-vibrant-purple/20 flex items-center justify-center">
                      <i className="fas fa-gamepad text-4xl text-gray-400"></i>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold mb-2 group-hover:text-electric-blue transition-colors duration-300">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{relatedProject.category}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;