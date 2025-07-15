import React from 'react';

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      description: "Get in touch for project inquiries",
      contact: "contact@ajaysinghrawat.com",
      link: "mailto:contact@ajaysinghrawat.com"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      description: "Connect with me professionally",
      contact: "Ajay Singh Rawat",
      link: "https://linkedin.com/in/ajaysinghrawat"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      description: "Check out my open source work",
      contact: "github.com/ajaysinghrawat",
      link: "https://github.com/ajaysinghrawat"
    },
    {
      icon: "fas fa-calendar",
      title: "Schedule Meeting",
      description: "Book a consultation call",
      contact: "Free 30-min consultation",
      link: "#meeting-scheduler"
    }
  ];

  const handleContactClick = (link: string) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto mobile-padding">
        <div className="text-center mb-16">
          <h2 className="mobile-title font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="mobile-text text-gray-300 max-w-3xl mx-auto">
            Ready to bring your Unity project to life? I'm available for new projects and consulting opportunities. Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="glass-morphism rounded-2xl p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 neon-glow fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleContactClick(method.link)}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-electric-blue/20 rounded-full flex items-center justify-center group-hover:bg-electric-blue/30 transition-colors duration-300">
                <i className={`${method.icon} text-2xl text-electric-blue`}></i>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-electric-blue transition-colors duration-300">
                {method.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-3">{method.description}</p>
              
              <p className="text-gray-300 text-sm font-medium">{method.contact}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-electric-blue">Available for New Projects</h3>
            <p className="text-gray-300 mb-6">
              I'm currently accepting new Unity development projects and consulting engagements. Whether you need a full game development team member, AR/VR expertise, or technical guidance for your existing project, I'm here to help.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-vibrant-purple mb-2">24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue mb-2">Remote</div>
                <div className="text-sm text-gray-400">Work Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-vibrant-purple mb-2">Global</div>
                <div className="text-sm text-gray-400">Time Zones</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleContactClick('mailto:contact@ajaysinghrawat.com')}
                className="bg-electric-blue text-dark-primary mobile-button rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 neon-glow"
              >
                Start a Project
              </button>
              <button
                onClick={() => handleContactClick('#meeting-scheduler')}
                className="border border-vibrant-purple text-vibrant-purple mobile-button rounded-lg font-semibold hover:bg-vibrant-purple hover:text-white transition-all duration-300 neon-glow-purple"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;