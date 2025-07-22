import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, projectCategories } from "@/data/projects";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my most impactful game development projects, showcasing expertise in Unity, C#, and innovative gameplay mechanics.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-electric-blue text-dark-primary"
                  : "border-gray-600 text-gray-300 hover:border-electric-blue hover:text-electric-blue"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-morphism rounded-2xl overflow-hidden neon-glow group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className={`text-xs ${
                          index === 0 
                            ? "bg-electric-blue/20 text-electric-blue" 
                            : "bg-vibrant-purple/20 text-vibrant-purple"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric-blue hover:text-white transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <i className="fab fa-github" />
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric-blue hover:text-white transition-colors"
                        aria-label="View Live Demo"
                      >
                        <i className="fas fa-external-link-alt" />
                      </a>
                    )}
                    {project.links.video && (
                      <a 
                        href={project.links.video} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric-blue hover:text-white transition-colors"
                        aria-label="Watch Video"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    )}
                    {project.links.store && (
                      <a 
                        href={project.links.store} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric-blue hover:text-white transition-colors"
                        aria-label="Download from Store"
                      >
                        <i className="fas fa-store" />
                      </a>
                    )}
                  </div>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <Link href={`/project/${project.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-primary transition-all duration-300 group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
