import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const experiences = [
    {
      title: "Senior Unity Developer",
      company: "INVINCIBLE OCEAN PVT LTD",
      period: "10/2023 - 05/2024",
      icon: "fas fa-briefcase",
      color: "electric-blue"
    },
    {
      title: "Lead Unity Developer",
      company: "THREYE INTERACTIVE PVT LTD",
      period: "02/2020 - 07/2023",
      icon: "fas fa-code",
      color: "vibrant-purple"
    },
    {
      title: "Unity Developer",
      company: "CREATIOSOFT PVT LTD",
      period: "06/2018 - 02/2020",
      icon: "fas fa-laptop-code",
      color: "electric-blue"
    },
    {
      title: "B.Tech Computer Science",
      company: "IIMT College of Engineering",
      period: "07/2013 - 06/2017",
      icon: "fas fa-graduation-cap",
      color: "vibrant-purple"
    }
  ];

  const stats = [
    { value: "6+", label: "Years Experience", color: "text-electric-blue" },
    { value: "15+", label: "Games Shipped", color: "text-vibrant-purple" },
    { value: "500K+", label: "Downloads", color: "text-electric-blue" }
  ];

  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  I'm an experienced Unity Developer with 7+ years of expertise in designing and developing immersive gameplay experiences for mid-core games with over 1M+ downloads. My journey began with a Computer Science degree and evolved into leading development teams.
                </p>
                <p>
                  Proficient in Unity Game Engine and Mixed Reality, I've worked on various projects from WebGL applications for metaverse ecosystems to AR/VR content authoring tools. I'm passionate about pushing the boundaries of game design with innovative technical solutions.
                </p>
                <p>
                  My experience includes integrating AI tools like Convai for NPC conversations, managing multiplayer networking with Photon PUN2, and developing complete game meta systems including monetization strategies that increased revenue by 40%.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800" 
              alt="Professional portrait of game developer" 
              className="rounded-2xl shadow-2xl" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-vibrant-purple/10 rounded-2xl" />
            
            {/* Experience Timeline */}
            <div className="mt-8 space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass-morphism rounded-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        exp.color === "electric-blue" ? "bg-electric-blue/20" : "bg-vibrant-purple/20"
                      }`}>
                        <i className={`${exp.icon} ${
                          exp.color === "electric-blue" ? "text-electric-blue" : "text-vibrant-purple"
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-bold">{exp.title}</h4>
                        <p className="text-gray-300">{exp.company} ({exp.period})</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
