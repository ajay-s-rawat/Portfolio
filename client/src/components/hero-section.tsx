import { Button } from "@/components/ui/button";

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function HeroSection() {
  const handleViewWork = () => {
    scrollToSection("#projects");
  };

  const handleDownloadCV = () => {
    downloadFile("./attached_assets/AjaySinghRawatResume_1752400935401.pdf", "AjaySinghRawat_Resume.pdf");
  };

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/ajay-s-rawat", label: "GitHub" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/ajay-rawat-83531a12a", label: "LinkedIn" },
    { icon: "fab fa-twitter", href: "https://twitter.com", label: "Twitter" },
    { icon: "fab fa-itch-io", href: "https://itch.io", label: "Itch.io" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center hero-bg pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Game Developer
                <span className="block text-gradient">& Unity Expert</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Unity Developer with 7+ years of experience building games, Augmented Reality and Virtual Reality projects, and metaverse applications. Available as an independent contractor for development and consulting services.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleViewWork}
                className="bg-electric-blue text-dark-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={handleDownloadCV}
                className="border-vibrant-purple text-vibrant-purple px-8 py-3 rounded-lg font-semibold hover:bg-vibrant-purple hover:text-white transition-all duration-300"
              >
                Download CV
              </Button>
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
                  aria-label={link.label}
                >
                  <i className={`${link.icon} text-2xl`} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Game development workspace with multiple monitors" 
              className="rounded-2xl shadow-2xl" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-vibrant-purple/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
