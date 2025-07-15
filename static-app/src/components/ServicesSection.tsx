import React from 'react';
import { scrollToSection } from '../lib/utils';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "fas fa-gamepad",
      title: "Game Development",
      description: "Complete Unity game development from concept to deployment across mobile, PC, and console platforms.",
      features: [
        "Unity 3D/2D game creation",
        "Gameplay mechanics design",
        "Performance optimization",
        "Multi-platform deployment"
      ],
      color: "electric-blue" as const
    },
    {
      icon: "fas fa-vr-cardboard",
      title: "AR/VR Development",
      description: "Immersive AR/VR experiences using Unity XR Toolkit for training, entertainment, and enterprise applications.",
      features: [
        "VR training simulations",
        "AR mobile applications",
        "Mixed Reality experiences",
        "XR content authoring tools"
      ],
      color: "vibrant-purple" as const
    },
    {
      icon: "fas fa-globe",
      title: "Metaverse Projects",
      description: "WebGL-based metaverse applications with AI integration and real-time multiplayer capabilities.",
      features: [
        "WebGL optimization",
        "AI chatbot integration",
        "Virtual environments",
        "Real-time networking"
      ],
      color: "electric-blue" as const
    },
    {
      icon: "fas fa-tools",
      title: "Technical Consulting",
      description: "Expert guidance on Unity architecture, performance optimization, and game development best practices.",
      features: [
        "Code architecture review",
        "Performance auditing",
        "Technical documentation",
        "Team training & mentoring"
      ],
      color: "vibrant-purple" as const
    },
    {
      icon: "fas fa-code",
      title: "Custom Tools & Editor",
      description: "Unity editor extensions and custom tools to streamline development workflows and improve productivity.",
      features: [
        "Unity editor tools",
        "Build pipeline automation",
        "Custom inspectors",
        "Workflow optimization"
      ],
      color: "electric-blue" as const
    },
    {
      icon: "fas fa-users",
      title: "Team Leadership",
      description: "Leading development teams and managing complex projects with agile methodologies and best practices.",
      features: [
        "Project management",
        "Sprint planning",
        "Code review & mentoring",
        "Technical decision making"
      ],
      color: "vibrant-purple" as const
    }
  ];

  const handleScheduleMeeting = () => {
    scrollToSection("#meeting-scheduler");
  };

  const handleGetQuote = () => {
    scrollToSection("#contact");
  };

  return (
    <section id="services" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto mobile-padding">
        <div className="text-center mb-16">
          <h2 className="mobile-title font-bold mb-4">
            Development <span className="text-gradient">Services</span>
          </h2>
          <p className="mobile-text text-gray-300 max-w-3xl mx-auto">
            Comprehensive Unity development and consulting services to bring your gaming and XR projects to life with expert technical guidance.
          </p>
        </div>
        
        <div className="mobile-grid mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`glass-morphism rounded-2xl text-center group transition-all duration-300 hover:scale-105 ${
                service.color === "electric-blue" ? "hover:shadow-lg hover:shadow-blue-500/25" : "hover:shadow-lg hover:shadow-purple-500/25"
              } fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  service.color === "electric-blue" ? "bg-electric-blue/20" : "bg-vibrant-purple/20"
                }`}>
                  <i className={`${service.icon} text-2xl ${
                    service.color === "electric-blue" ? "text-electric-blue" : "text-vibrant-purple"
                  }`}></i>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 text-sm text-gray-400">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        service.color === "electric-blue" ? "bg-electric-blue" : "bg-vibrant-purple"
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-electric-blue/20 to-vibrant-purple/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your Unity development needs and create a custom solution that fits your timeline and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleScheduleMeeting}
                className="bg-electric-blue text-dark-primary mobile-button rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 neon-glow"
              >
                Schedule Free Consultation
              </button>
              <button 
                onClick={handleGetQuote}
                className="border border-vibrant-purple text-vibrant-purple mobile-button rounded-lg font-semibold hover:bg-vibrant-purple hover:text-white transition-all duration-300 neon-glow-purple"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;