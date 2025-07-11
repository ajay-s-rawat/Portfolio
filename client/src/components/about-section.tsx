import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const experiences = [
    {
      title: "Senior Game Developer",
      company: "GameStudio Inc.",
      period: "2021-Present",
      icon: "fas fa-briefcase",
      color: "electric-blue"
    },
    {
      title: "Unity Developer",
      company: "IndieDev Studio",
      period: "2019-2021",
      icon: "fas fa-code",
      color: "vibrant-purple"
    },
    {
      title: "Computer Science Degree",
      company: "Tech University",
      period: "2015-2019",
      icon: "fas fa-graduation-cap",
      color: "electric-blue"
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
                  I'm a passionate game developer with over 6 years of experience creating immersive gaming experiences. My journey began with a Computer Science degree and a childhood dream of bringing game worlds to life.
                </p>
                <p>
                  Specializing in Unity 3D development, I've successfully shipped 15+ games across multiple platforms, from mobile puzzle games to complex VR experiences. I'm particularly drawn to innovative gameplay mechanics and cutting-edge visual technologies.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring indie games, contributing to open-source projects, or mentoring aspiring game developers in my local community.
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
