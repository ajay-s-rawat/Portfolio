export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  year: string;
  links: {
    github?: string;
    demo?: string;
    video?: string;
    store?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Mystic Realms RPG",
    description: "An immersive fantasy RPG featuring dynamic weather systems, complex AI behaviors, and a branching storyline. Built with Unity's latest rendering pipeline.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Unity 3D", "C#", "Blender"],
    category: "unity",
    year: "2024",
    links: {
      github: "#",
      demo: "#",
      video: "#"
    }
  },
  {
    id: "2",
    title: "Speed Rush Mobile",
    description: "High-performance mobile racing game with real-time multiplayer, advanced physics simulation, and stunning visual effects optimized for mobile devices.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Mobile", "Unity", "C#"],
    category: "mobile",
    year: "2023",
    links: {
      store: "#",
      demo: "#"
    }
  },
  {
    id: "3",
    title: "VR Space Explorer",
    description: "Immersive VR experience allowing users to explore detailed space environments with realistic physics and interactive elements using Unity XR Toolkit.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["VR", "Unity XR", "C#"],
    category: "vr",
    year: "2023",
    links: {
      demo: "#",
      video: "#"
    }
  },
  {
    id: "4",
    title: "Retro Platformer",
    description: "A nostalgic 2D platformer with modern gameplay mechanics, featuring hand-crafted pixel art, smooth animations, and challenging level design.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["2D", "Unity", "Pixel Art"],
    category: "indie",
    year: "2022",
    links: {
      demo: "#",
      store: "#"
    }
  },
  {
    id: "5",
    title: "Empire Builder",
    description: "Complex real-time strategy game with advanced AI, resource management systems, and multiplayer capabilities. Features procedural map generation.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Strategy", "Unity", "C#"],
    category: "unity",
    year: "2022",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: "6",
    title: "Neon Puzzles",
    description: "Minimalist puzzle game with stunning neon visuals and relaxing gameplay. Features 200+ handcrafted levels with increasing complexity.",
    image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Puzzle", "Unity", "Mobile"],
    category: "mobile",
    year: "2021",
    links: {
      store: "#",
      video: "#"
    }
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "unity", label: "Unity 3D" },
  { id: "mobile", label: "Mobile Games" },
  { id: "vr", label: "VR/AR" },
  { id: "indie", label: "Indie Games" }
];
