import { useState, type ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, projectCategories } from "@/data/projects";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";

function ProjectCardImage({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex aspect-[4/3] w-full items-end bg-[radial-gradient(circle_at_top_left,_rgba(35,196,240,0.35),_transparent_40%),linear-gradient(135deg,rgba(10,14,25,1)_0%,rgba(38,24,58,1)_100%)] p-6">
        <div>
          <div className="mb-2 text-xs uppercase tracking-[0.24em] text-electric-blue/80">
            Project Preview
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] w-full bg-black/35">
      <img
        src={src}
        alt={title}
        className={`mx-auto h-full w-auto max-w-none transition-transform duration-300 group-hover:scale-[1.03] ${
          src.includes("/vr-bank/") ? "-translate-x-[8%]" : ""
        }`}
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function GooglePlayLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M3.14 2.86c-.38.39-.61.98-.61 1.74v14.8c0 .76.23 1.35.61 1.74l.1.09L13.1 12 3.24 2.77l-.1.09Z" />
      <path d="m16.27 15.15-3.17-3.15 3.18-3.18 3.78 2.15c1.08.61 1.08 1.6 0 2.22l-3.79 1.96Z" />
      <path d="M16.27 15.15 13.1 12 3.14 21.14c.59.61 1.55.68 2.65.08l10.48-6.07" />
      <path d="M16.27 8.85 5.79 2.78c-1.1-.6-2.06-.53-2.65.08L13.1 12l3.17-3.15Z" />
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M16.67 12.78c.02 2.25 1.97 3 1.99 3.01-.02.05-.31 1.07-1.02 2.12-.61.91-1.24 1.82-2.24 1.84-.98.02-1.3-.58-2.43-.58-1.14 0-1.49.56-2.41.6-.97.04-1.71-.97-2.33-1.88-1.27-1.83-2.24-5.18-.94-7.44.65-1.12 1.81-1.82 3.07-1.84.95-.02 1.85.64 2.43.64.58 0 1.67-.79 2.82-.67.48.02 1.82.19 2.68 1.45-.07.04-1.6.93-1.62 2.75Zm-1.91-5.93c.51-.62.85-1.49.75-2.35-.73.03-1.61.49-2.13 1.11-.47.54-.88 1.42-.77 2.26.81.06 1.64-.41 2.15-1.02Z" />
    </svg>
  );
}

function StoreIconButton({
  href,
  label,
  variant,
  children,
}: {
  href: string;
  label: string;
  variant: "android" | "ios" | "fallback";
  children: ReactNode;
}) {
  const variantClass =
    variant === "android"
      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300 hover:border-emerald-300 hover:bg-emerald-400 hover:text-slate-950"
      : variant === "ios"
        ? "border-white/30 bg-white/10 text-white hover:border-white hover:bg-white hover:text-slate-950"
        : "border-electric-blue/40 bg-electric-blue/10 text-electric-blue hover:border-electric-blue hover:bg-electric-blue hover:text-slate-950";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${variantClass}`}
    >
      {children}
    </a>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects, tools, and experiences built with a focus on usability, performance, and impact.
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
            <Card key={project.slug} className="glass-morphism rounded-2xl overflow-hidden neon-glow group">
              <div className="relative overflow-hidden">
                <ProjectCardImage src={project.image} title={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex flex-wrap justify-end gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={tech}
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
                  <div className="flex flex-wrap gap-3">
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
                    {project.links.googlePlay && (
                      <StoreIconButton
                        href={project.links.googlePlay}
                        label="Download for Android"
                        variant="android"
                      >
                        <GooglePlayLogo />
                      </StoreIconButton>
                    )}
                    {project.links.appStore && (
                      <StoreIconButton
                        href={project.links.appStore}
                        label="Download for iOS"
                        variant="ios"
                      >
                        <AppleLogo />
                      </StoreIconButton>
                    )}
                    {project.links.store && !project.links.googlePlay && !project.links.appStore && (
                      <StoreIconButton
                        href={project.links.store}
                        label="Open store page"
                        variant="fallback"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </StoreIconButton>
                    )}
                  </div>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <Link href={`/project/${project.slug}`}>
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
