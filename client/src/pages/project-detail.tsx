import { useRoute } from "wouter";
import { ArrowLeft, ExternalLink, Github, Store, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const project = projects.find(p => p.id === params?.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-primary text-white">
        <Navigation />
        <div className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link href="/">
              <Button className="bg-electric-blue text-dark-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/">
              <Button 
                variant="outline" 
                className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-primary"
                onClick={() => {
                  // Scroll to projects section when returning to home
                  setTimeout(() => {
                    const element = document.querySelector("#projects");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }, 100);
                }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className={`${
                      index % 2 === 0 
                        ? "bg-electric-blue/20 text-electric-blue" 
                        : "bg-vibrant-purple/20 text-vibrant-purple"
                    }`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.links.github && (
                  <Button 
                    asChild 
                    className="bg-electric-blue text-dark-primary hover:bg-electric-blue/90"
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.links.demo && (
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-vibrant-purple text-vibrant-purple hover:bg-vibrant-purple hover:text-white"
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.links.store && (
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-primary"
                  >
                    <a href={project.links.store} target="_blank" rel="noopener noreferrer">
                      <Store className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </Button>
                )}
                {project.links.video && (
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-vibrant-purple text-vibrant-purple hover:bg-vibrant-purple hover:text-white"
                  >
                    <a href={project.links.video} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                  <div className="space-y-4 text-gray-300">
                    {project.id === "1" && (
                      <>
                        <p>
                          Fighter Pilot: Heavyfire is a comprehensive combat flight simulator that showcases advanced Unity development techniques. As the lead developer, I architected the complete game meta system from the ground up.
                        </p>
                        <p>
                          The project involved creating sophisticated aircraft systems, player progression mechanics, and engaging aerial combat scenarios. The game features realistic flight physics, multiple aircraft types, and various mission objectives.
                        </p>
                        <p>
                          Key achievements include implementing a robust upgrade system, economy management, and monetization strategies that resulted in successful market performance with thousands of downloads.
                        </p>
                      </>
                    )}
                    {project.id === "2" && (
                      <>
                        <p>
                          VIP Vegas Slot represents my expertise in casino game development, focusing on creating engaging UI/UX experiences and implementing complex gameplay mechanics for slot machine systems.
                        </p>
                        <p>
                          The project required deep understanding of casino game mathematics, animation systems, and mobile optimization techniques to ensure smooth performance across various devices.
                        </p>
                        <p>
                          Successfully implemented multiple slot themes, bonus rounds, and progressive jackpot systems while maintaining compliance with App Store guidelines.
                        </p>
                      </>
                    )}
                    {project.id === "3" && (
                      <>
                        <p>
                          The IDEX AR/VR Project represents cutting-edge work in Extended Reality development, focusing on creating training simulations for the Indian Air Force. This project demonstrates expertise in enterprise-level XR applications.
                        </p>
                        <p>
                          Developed comprehensive content authoring tools that allow non-technical users to create immersive training scenarios. The system supports multiple VR headsets and provides scalable architecture for various training modules.
                        </p>
                        <p>
                          Collaborated directly with military personnel to ensure accuracy and effectiveness of the training simulations, resulting in improved training efficiency and reduced costs.
                        </p>
                      </>
                    )}
                    {!["1", "2", "3"].includes(project.id) && (
                      <p>
                        This project showcases my expertise in Unity development and demonstrates my ability to create engaging, high-quality gaming experiences. The implementation involved careful attention to performance optimization, user experience design, and technical architecture.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
                  <div className="space-y-4 text-gray-300">
                    <h3 className="text-lg font-semibold text-electric-blue">Architecture & Design</h3>
                    <p>
                      Implemented modular architecture using Unity's component-based system, ensuring scalability and maintainability. Utilized design patterns like Observer, State Machine, and Object Pooling for optimal performance.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-vibrant-purple">Performance Optimization</h3>
                    <p>
                      Applied advanced optimization techniques including GPU instancing, texture streaming, and dynamic batching to maintain 60fps on target platforms. Implemented custom LOD systems and occlusion culling.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-electric-blue">Integration & Tools</h3>
                    <p>
                      Integrated third-party services for analytics, monetization, and social features. Developed custom Unity editor tools to streamline the development workflow and enable rapid iteration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400">Year:</span>
                      <span className="ml-2 font-semibold">{project.year}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Category:</span>
                      <span className="ml-2 font-semibold capitalize">{project.category}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Platform:</span>
                      <span className="ml-2 font-semibold">
                        {project.category === "mobile" ? "iOS / Android" : 
                         project.category === "vr" ? "VR Headsets" : "PC / Console"}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Role:</span>
                      <span className="ml-2 font-semibold">
                        {project.id === "1" ? "Lead Developer" : 
                         project.id === "3" ? "AR/VR Architect" : "Unity Developer"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="space-y-2">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-morphism rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interested in Similar Work?</h3>
                  <p className="text-gray-300 mb-4">
                    I'm available for Unity development projects and consulting services.
                  </p>
                  <Link href="/">
                    <Button className="w-full bg-gradient-to-r from-electric-blue to-vibrant-purple text-white">
                      Get In Touch
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}