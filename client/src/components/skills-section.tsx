import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Game Engines",
      icon: "fas fa-cube",
      color: "electric-blue",
      skills: [
        { name: "Unity 3D", level: "Expert", color: "text-electric-blue" },
        { name: "Unreal Engine", level: "Advanced", color: "text-vibrant-purple" },
        { name: "Godot", level: "Intermediate", color: "text-gray-400" }
      ]
    },
    {
      title: "Programming",
      icon: "fas fa-code",
      color: "vibrant-purple",
      skills: [
        { name: "C#", level: "Expert", color: "text-electric-blue" },
        { name: "C++", level: "Advanced", color: "text-vibrant-purple" },
        { name: "JavaScript", level: "Intermediate", color: "text-gray-400" },
        { name: "Python", level: "Intermediate", color: "text-gray-400" }
      ]
    },
    {
      title: "Platforms",
      icon: "fas fa-gamepad",
      color: "electric-blue",
      skills: [
        { name: "PC/Mac", level: "Expert", color: "text-electric-blue" },
        { name: "Mobile (iOS/Android)", level: "Advanced", color: "text-vibrant-purple" },
        { name: "VR/AR", level: "Advanced", color: "text-gray-400" },
        { name: "WebGL", level: "Intermediate", color: "text-gray-400" }
      ]
    },
    {
      title: "Tools & Software",
      icon: "fas fa-tools",
      color: "vibrant-purple",
      skills: [
        { name: "Blender", level: "Advanced", color: "text-electric-blue" },
        { name: "Photoshop", level: "Advanced", color: "text-vibrant-purple" },
        { name: "Git/GitHub", level: "Expert", color: "text-gray-400" },
        { name: "Visual Studio", level: "Expert", color: "text-gray-400" }
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
