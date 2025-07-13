import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Game Engines & XR",
      icon: "fas fa-cube",
      color: "electric-blue",
      skills: [
        { name: "Unity 3D", level: "Expert", color: "text-electric-blue" },
        { name: "Unity XR Toolkit", level: "Expert", color: "text-electric-blue" },
        { name: "Mixed Reality", level: "Advanced", color: "text-vibrant-purple" },
        { name: "WebGL", level: "Advanced", color: "text-gray-300" }
      ]
    },
    {
      title: "Programming & Architecture",
      icon: "fas fa-code",
      color: "vibrant-purple",
      skills: [
        { name: "C#", level: "Expert", color: "text-electric-blue" },
        { name: "Unity Timeline", level: "Expert", color: "text-electric-blue" },
        { name: "Photon PUN2", level: "Advanced", color: "text-vibrant-purple" },
        { name: "PlayFab", level: "Advanced", color: "text-gray-300" }
      ]
    },
    {
      title: "Platforms & Deployment",
      icon: "fas fa-gamepad",
      color: "electric-blue",
      skills: [
        { name: "Mobile (iOS/Android)", level: "Expert", color: "text-electric-blue" },
        { name: "VR Headsets", level: "Expert", color: "text-electric-blue" },
        { name: "WebGL/Metaverse", level: "Advanced", color: "text-vibrant-purple" },
        { name: "PC/Console", level: "Advanced", color: "text-gray-300" }
      ]
    },
    {
      title: "AI & Integration",
      icon: "fas fa-brain",
      color: "vibrant-purple",
      skills: [
        { name: "Convai Integration", level: "Advanced", color: "text-electric-blue" },
        { name: "Monetization", level: "Expert", color: "text-electric-blue" },
        { name: "A/B Testing", level: "Advanced", color: "text-vibrant-purple" },
        { name: "Team Leadership", level: "Expert", color: "text-gray-300" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastery in modern game development tools and technologies, from game engines to programming languages and design software.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`glass-morphism rounded-2xl text-center group transition-all duration-300 ${
                category.color === "electric-blue" ? "hover:shadow-lg hover:shadow-blue-500/25" : "hover:shadow-lg hover:shadow-purple-500/25"
              }`}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  category.color === "electric-blue" ? "bg-electric-blue/20" : "bg-vibrant-purple/20"
                }`}>
                  <i className={`${category.icon} text-2xl ${
                    category.color === "electric-blue" ? "text-electric-blue" : "text-vibrant-purple"
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className={`${skill.color} font-semibold`}>{skill.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
