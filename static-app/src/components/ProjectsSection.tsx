import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { projects, projectCategories } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [, setLocation] = useLocation();

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleViewProject = (projectId: string) => {
    setLocation(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto mobile-padding">
        <div className="text-center mb-16">
          <h2 className="mobile-title font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mobile-text text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of Unity games, AR/VR applications, and metaverse experiences that showcase 7+ years of development expertise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-electric-blue text-dark-primary"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mobile-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-morphism rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-105 neon-glow fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-vibrant-purple/20 flex items-center justify-center">
                <i className="fas fa-gamepad text-4xl text-gray-400"></i>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-electric-blue font-medium">{project.category}</span>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleViewProject(project.id)}
                    className="text-electric-blue font-medium hover:underline transition-all duration-300 flex items-center gap-2"
                  >
                    View Details
                    <i className="fas fa-arrow-right text-sm"></i>
                  </button>
                  
                  <div className="flex gap-2">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-vibrant-purple transition-colors duration-300"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-vibrant-purple transition-colors duration-300"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {project.links.store && (
                      <a
                        href={project.links.store}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-vibrant-purple transition-colors duration-300"
                      >
                        <i className="fas fa-store"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;