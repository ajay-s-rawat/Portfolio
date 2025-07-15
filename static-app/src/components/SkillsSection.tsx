import React from 'react';
import { skillCategories } from '../data/skills';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto mobile-padding">
        <div className="text-center mb-16">
          <h2 className="mobile-title font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mobile-text text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in Unity development, AR/VR technologies, and game architecture with proven track record of successful project deliveries.
          </p>
        </div>
        
        <div className="mobile-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-morphism rounded-2xl p-6 text-center group transition-all duration-300 hover:scale-105 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                category.color === "electric-blue" ? "bg-electric-blue/20" : "bg-vibrant-purple/20"
              }`}>
                <i className={`${category.icon} text-2xl ${
                  category.color === "electric-blue" ? "text-electric-blue" : "text-vibrant-purple"
                }`}></i>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${skill.color}`}>{skill.level}</span>
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            skill.level === "Expert" ? "w-full bg-electric-blue" :
                            skill.level === "Advanced" ? "w-3/4 bg-vibrant-purple" :
                            skill.level === "Intermediate" ? "w-1/2 bg-yellow-500" :
                            "w-1/4 bg-gray-500"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;