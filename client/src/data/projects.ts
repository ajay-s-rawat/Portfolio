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
    title: "Fighter Pilot: Heavyfire",
    description: "Led the developers team and created complete game meta architecture for this combat flight simulator. Available on Google Play Store with engaging aerial combat mechanics.",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Unity 3D", "C#", "Mobile"],
    category: "unity",
    year: "2023",
    links: {
      store: "https://play.google.com/store/apps/details?id=com.threye.fighterpilot.cas.a10&pcampaignid=web_share",
      demo: "https://play.google.com/store/apps/details?id=com.threye.fighterpilot.cas.a10&pcampaignid=web_share",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  },
  {
    id: "2",
    title: "VIP Vegas Slot",
    description: "Implemented UI screens and gameplay features for this casino slot game. Featured on the App Store with engaging slot machine mechanics and visual effects.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Unity", "C#", "Mobile"],
    category: "mobile",
    year: "2019",
    links: {
      store: "https://apps.apple.com/us/app/vegas-vip-slots-casino-games/id1471325236",
      demo: "https://apps.apple.com/us/app/vegas-vip-slots-casino-games/id1471325236"
    }
  },
  {
    id: "3",
    title: "IDEX AR/VR Project",
    description: "Designed architecture and tools for AR/VR content authoring on devices like HP Reverb G2, HTC Vive Pro, and Meta Quest 2 & 3. Collaborated with the Indian Air Force for immersive training simulations.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["VR", "AR", "Unity XR", "Mixed Reality"],
    category: "vr",
    year: "2024",
    links: {
      demo: "https://example.com/idex-demo",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  },
  {
    id: "4",
    title: "Fighter Vs Bomber",
    description: "Created game architecture and implemented multiplayer behaviors for this aerial combat game with engaging dogfight mechanics.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Unity", "C#", "Photon PUN2"],
    category: "unity",
    year: "2022",
    links: {
      github: "https://github.com",
      demo: "https://example.com/fighter-vs-bomber"
    }
  },
  {
    id: "5",
    title: "Throw A Ring",
    description: "Implemented the gameplay mechanics and integrated In-app purchases for this engaging casual game with physics-based ring throwing.",
    image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Unity", "C#", "Mobile"],
    category: "mobile",
    year: "2019",
    links: {
      demo: "https://example.com/throw-a-ring",
      store: "https://play.google.com/store"
    }
  },
  {
    id: "6",
    title: "Unity WebGL Metaverse Apps",
    description: "Worked on various Unity WebGL applications for metaverse ecosystem including Eternity City, VR Mall, VR Bank with optimized performance and AI integration.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Unity", "WebGL", "AI", "Convai"],
    category: "unity",
    year: "2024",
    links: {
      demo: "https://example.com/metaverse-demo",
      github: "https://github.com"
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
