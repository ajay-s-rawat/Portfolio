import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
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