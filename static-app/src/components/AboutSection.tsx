import React from 'react';

const AboutSection: React.FC = () => {
  const timelineItems = [
    {
      year: "2017-2019",
      title: "Unity Developer",
      company: "Game Studio",
      description: "Started career developing mobile games and learning Unity fundamentals. Built foundation in C# programming and game mechanics."
    },
    {
      year: "2019-2021", 
      title: "Senior Unity Developer",
      company: "AR/VR Company",
      description: "Specialized in AR/VR development using Unity XR Toolkit. Delivered enterprise training solutions and immersive experiences."
    },
    {
      year: "2021-2023",
      title: "Lead Unity Developer",
      company: "Gaming Company",
      description: "Led development teams on mobile games with 1M+ downloads. Implemented monetization strategies and performance optimization."
    },
    {
      year: "2023-Present",
      title: "Independent Contractor",
      company: "Freelance",
      description: "Providing Unity development and consulting services. Focus on games, AR/VR, metaverse applications, and team mentoring."
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto mobile-padding">
        <div className="text-center mb-16">
          <h2 className="mobile-title font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mobile-text text-gray-300 max-w-3xl mx-auto">
            Passionate Unity developer with over 7 years of experience creating engaging games, immersive AR/VR experiences, and innovative metaverse applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">My Journey</h3>
              <p className="text-gray-300 mb-6">
                From starting as a junior Unity developer to becoming an independent contractor, I've dedicated my career to mastering game development, AR/VR technologies, and emerging platforms like the metaverse.
              </p>
              <p className="text-gray-300 mb-6">
                My expertise spans across mobile gaming, enterprise VR training solutions, and cutting-edge WebGL applications. I'm passionate about creating performant, engaging experiences that push the boundaries of what's possible in Unity.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-electric-blue/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-electric-blue">7+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="bg-vibrant-purple/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-vibrant-purple">1M+</div>
                  <div className="text-sm text-gray-400">Game Downloads</div>
                </div>
                <div className="bg-electric-blue/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-electric-blue">50+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="bg-vibrant-purple/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-vibrant-purple">15+</div>
                  <div className="text-sm text-gray-400">Enterprise Clients</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 slide-up">
            <h3 className="text-2xl font-bold mb-6 text-vibrant-purple">Career Timeline</h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-electric-blue rounded-full"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-600"></div>
                  
                  <div className="glass-morphism rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <span className="text-sm text-electric-blue">{item.year}</span>
                    </div>
                    <p className="text-sm text-vibrant-purple mb-2">{item.company}</p>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;