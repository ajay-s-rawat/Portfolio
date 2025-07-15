import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "fighter-pilot-heavyfire",
    title: "Fighter Pilot: Heavyfire",
    description: "Mid-core action shooting game with over 1M+ downloads on mobile platforms. Implemented core gameplay mechanics, UI systems, and performance optimization.",
    image: "/images/fighter-pilot.jpg",
    technologies: ["Unity", "C#", "Mobile Optimization", "UI/UX", "Performance"],
    category: "Mobile Games",
    year: "2023",
    links: {
      store: "https://play.google.com/store/apps/details?id=com.fighterpilot"
    },
    details: {
      overview: "A high-octane mobile action game featuring realistic fighter aircraft combat scenarios with intuitive touch controls and stunning visual effects.",
      challenges: "Optimizing performance for mid-range mobile devices while maintaining visual quality and smooth 60fps gameplay across various Android devices.",
      solutions: "Implemented advanced LOD systems, texture streaming, and custom shader optimizations. Used object pooling for projectiles and effects.",
      results: "Achieved 1M+ downloads with 4.5+ star rating. Maintained 60fps on 95% of target devices with loading times under 3 seconds."
    }
  },
  {
    id: "vip-vegas-slot",
    title: "VIP Vegas Slot",
    description: "Casino-style slot game with advanced visual effects and monetization systems. Complete development from concept to store release.",
    image: "/images/vegas-slot.jpg",
    technologies: ["Unity", "PlayFab", "Monetization", "Analytics", "Cloud Services"],
    category: "Casino Games",
    year: "2023",
    links: {
      store: "https://apps.apple.com/app/vip-vegas-slot"
    },
    details: {
      overview: "Premium casino slot game featuring multiple themed slot machines, progressive jackpots, and social gaming elements with real-time multiplayer tournaments.",
      challenges: "Implementing secure monetization systems, real-time leaderboards, and ensuring fair play mechanics while maintaining engaging gameplay.",
      solutions: "Integrated PlayFab for backend services, implemented secure transaction handling, and created dynamic content delivery system for new slot themes.",
      results: "Generated 300% ROI within first quarter. Achieved average session time of 12+ minutes with 40% day-1 retention rate."
    }
  },
  {
    id: "idex-ar-vr",
    title: "IDEX AR/VR Project",
    description: "Immersive AR/VR experience for enterprise training and visualization using Unity XR Toolkit with cutting-edge XR technologies.",
    image: "/images/idex-arvr.jpg",
    technologies: ["Unity XR", "Mixed Reality", "Enterprise", "Training", "Visualization"],
    category: "AR/VR",
    year: "2024",
    links: {
      demo: "https://idex-demo.com/arvr"
    },
    details: {
      overview: "Enterprise-grade AR/VR training platform for industrial equipment operation and safety procedures with real-time analytics and progress tracking.",
      challenges: "Creating realistic physics simulations for industrial equipment while ensuring cross-platform compatibility across different VR headsets.",
      solutions: "Developed modular training modules using Unity XR Toolkit, implemented hand tracking, and created adaptive difficulty based on user performance.",
      results: "Reduced training time by 60% and improved safety compliance scores by 85%. Deployed across 50+ enterprise locations."
    }
  },
  {
    id: "metaverse-platform",
    title: "WebGL Metaverse Platform",
    description: "Browser-based metaverse application with AI chatbot integration and real-time multiplayer capabilities for virtual events.",
    image: "/images/metaverse.jpg",
    technologies: ["Unity WebGL", "Convai AI", "Networking", "Web Platform", "AI Integration"],
    category: "Metaverse",
    year: "2024",
    links: {
      demo: "https://metaverse-demo.com",
      github: "https://github.com/ajay/metaverse-platform"
    },
    details: {
      overview: "Web-based metaverse platform enabling virtual events, meetings, and social interactions with AI-powered NPCs and seamless browser experience.",
      challenges: "Optimizing Unity WebGL build for browser performance while maintaining rich 3D environments and real-time networking.",
      solutions: "Implemented custom compression algorithms, progressive asset loading, and efficient networking protocols. Integrated Convai for natural language AI interactions.",
      results: "Supported 500+ concurrent users with sub-100ms latency. Hosted 200+ virtual events with 95% user satisfaction rate."
    }
  },
  {
    id: "ar-furniture",
    title: "AR Furniture Visualization",
    description: "Mobile AR application allowing users to visualize furniture in their space before purchase with realistic lighting and shadows.",
    image: "/images/ar-furniture.jpg",
    technologies: ["Unity AR Foundation", "ARCore", "ARKit", "3D Modeling", "Mobile"],
    category: "AR/VR",
    year: "2023",
    links: {
      store: "https://apps.apple.com/app/ar-furniture"
    },
    details: {
      overview: "Augmented reality mobile app that lets customers preview furniture in their actual living space with accurate scale, lighting, and material representation.",
      challenges: "Achieving realistic lighting integration between virtual furniture and real environment while maintaining smooth performance on mobile devices.",
      solutions: "Implemented advanced shader work for realistic material rendering, optimized 3D models for mobile, and created custom lighting estimation algorithms.",
      results: "Increased conversion rates by 45% for partner retailers. Over 500K downloads with 4.6 star rating across app stores."
    }
  },
  {
    id: "vr-training-sim",
    title: "VR Safety Training Simulator",
    description: "Virtual reality training simulation for industrial safety procedures with haptic feedback and progress analytics.",
    image: "/images/vr-training.jpg",
    technologies: ["Unity VR", "Haptic Feedback", "Training", "Analytics", "Enterprise"],
    category: "AR/VR",
    year: "2022",
    links: {},
    details: {
      overview: "Comprehensive VR training platform for high-risk industrial environments, featuring realistic hazard scenarios and emergency response procedures.",
      challenges: "Creating realistic physics-based interactions for safety equipment while ensuring training scenarios accurately reflect real-world conditions.",
      solutions: "Developed custom physics systems for safety equipment handling, integrated haptic feedback for realistic tool usage, and created comprehensive analytics dashboard.",
      results: "Reduced workplace accidents by 70% across client sites. Trained 10,000+ workers with 98% certification pass rate."
    }
  }
];

export const projectCategories = [
  "All",
  "Mobile Games",
  "Casino Games", 
  "AR/VR",
  "Metaverse",
  "Enterprise"
];