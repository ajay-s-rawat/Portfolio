import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/ajaysinghrawat", label: "GitHub" },
    { icon: "fab fa-linkedin", href: "https://linkedin.com/in/ajaysinghrawat", label: "LinkedIn" },
    { icon: "fab fa-twitter", href: "https://twitter.com/ajaysinghrawat", label: "Twitter" },
    { icon: "fab fa-itch-io", href: "https://ajaysinghrawat.itch.io", label: "Itch.io" }
  ];

  const quickLinks = [
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "Services", href: "#services" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-dark-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto mobile-padding py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Ajay Singh Rawat</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Unity Developer with 7+ years of experience specializing in games, AR/VR, and metaverse applications. Available for development and consulting services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
                  aria-label={link.label}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Game Development</li>
              <li>AR/VR Development</li>
              <li>Metaverse Projects</li>
              <li>Technical Consulting</li>
              <li>Team Leadership</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ajay Singh Rawat. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>Unity Developer & Technical Consultant</span>
              <span className="hidden md:inline">•</span>
              <span>Available for Projects</span>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              Specializing in Games, AR/VR, and Metaverse Development with Unity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;