import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Headphones, Globe, Wrench, Code, Users } from "lucide-react";
import { scrollToSection } from "@/lib/utils-static";

export default function ServicesSection() {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Complete Unity game development from concept to deployment across mobile, PC, and console platforms.",
      features: [
        "Unity 3D/2D game creation",
        "Gameplay mechanics design",
        "Performance optimization",
        "Multi-platform deployment"
      ],
      color: "electric-blue"
    },
    {
      icon: Headphones,
      title: "AR/VR Development",
      description: "Immersive AR/VR experiences using Unity XR Toolkit for training, entertainment, and enterprise applications.",
      features: [
        "VR training simulations",
        "AR mobile applications",
        "Mixed Reality experiences",
        "XR content authoring tools"
      ],
      color: "vibrant-purple"
    },
    {
      icon: Globe,
      title: "Metaverse Projects",
      description: "WebGL-based metaverse applications with AI integration and real-time multiplayer capabilities.",
      features: [
        "WebGL optimization",
        "AI chatbot integration",
        "Virtual environments",
        "Real-time networking"
      ],
      color: "electric-blue"
    },
    {
      icon: Wrench,
      title: "Technical Consulting",
      description: "Expert guidance on Unity architecture, performance optimization, and game development best practices.",
      features: [
        "Code architecture review",
        "Performance auditing",
        "Technical documentation",
        "Team training & mentoring"
      ],
      color: "vibrant-purple"
    },
    {
      icon: Code,
      title: "Custom Tools & Editor",
      description: "Unity editor extensions and custom tools to streamline development workflows and improve productivity.",
      features: [
        "Unity editor tools",
        "Build pipeline automation",
        "Custom inspectors",
        "Workflow optimization"
      ],
      color: "electric-blue"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading development teams and managing complex projects with agile methodologies and best practices.",
      features: [
        "Project management",
        "Sprint planning",
        "Code review & mentoring",
        "Technical decision making"
      ],
      color: "vibrant-purple"
    }
  ];

  const handleScheduleMeeting = () => {
    scrollToSection("#meeting-scheduler");
  };

  const handleGetQuote = () => {
    scrollToSection("#contact");
  };

  return (
    <section className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Development <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive Unity development and consulting services to bring your gaming and XR projects to life with expert technical guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`glass-morphism rounded-2xl text-center group transition-all duration-300 hover:scale-105 ${
                service.color === "electric-blue" ? "hover:shadow-lg hover:shadow-blue-500/25" : "hover:shadow-lg hover:shadow-purple-500/25"
              }`}
            >
              <CardHeader>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  service.color === "electric-blue" ? "bg-electric-blue/20" : "bg-vibrant-purple/20"
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.color === "electric-blue" ? "text-electric-blue" : "text-vibrant-purple"
                  }`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-electric-blue/20 to-vibrant-purple/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your Unity development needs and create a custom solution that fits your timeline and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleScheduleMeeting}
                className="bg-electric-blue text-dark-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={handleGetQuote}
                className="border-vibrant-purple text-vibrant-purple px-8 py-3 rounded-lg font-semibold hover:bg-vibrant-purple hover:text-white transition-all duration-300"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}