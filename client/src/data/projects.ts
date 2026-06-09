export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  year: string;
  role?: string;
  platforms?: string[];
  overview?: string[];
  showcaseImages?: Array<{
    src: string;
    alt: string;
    title?: string;
    caption?: string;
  }>;
  links: {
    github?: string;
    demo?: string;
    video?: string;
    googlePlay?: string;
    appStore?: string;
    store?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "fighter-pilot-heavyfire",
    title: "Fighter Pilot: HeavyFire",
    description:
      "Led the development team and built the complete game meta architecture for this mobile combat flight experience released for app stores.",
    image: "/projects/fighter-pilot-heavyfire/thumbnail.jpg",
    technologies: ["Unity 3D", "Android", "iOS"],
    categories: ["games"],
    year: "2023",
    role: "Lead Developer",
    platforms: ["Android", "iOS"],
    overview: [
      "Fighter Pilot: HeavyFire is a combat flight game where I led the team and shaped the technical direction behind its core progression and gameplay systems.",
      "My work covered the broader game architecture, mission structure, upgrade loops, economy balancing, and the systems required to support long-term player engagement.",
      "The project focused on combining accessible aerial action with scalable mobile-friendly systems that could support continued content and store deployment."
    ],
    showcaseImages: [
      {
        src: "/projects/fighter-pilot-heavyfire/award-poster.jpg",
        alt: "Award poster for Fighter Pilot HeavyFire",
        title: "Award Recognition",
        caption: "Studio Game of the Year runner-up poster featuring Fighter Pilot: HeavyFire."
      }
    ],
    links: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.threye.fighterpilot.cas.a10&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/fighter-pilot-heavyfire/id1555426750"
    }
  },
  {
    id: "2",
    slug: "vegas-vip-slots-casino-games",
    title: "Vegas VIP Slots: Casino Games",
    description:
      "Implemented gameplay features and UI flows for this polished casino slot title with App Store deployment and reward-driven engagement systems.",
    image: "/projects/vegas-vip-slots-casino-games/thumbnail.webp",
    technologies: ["Unity", "C#", "Mobile UI"],
    categories: ["games"],
    year: "2019",
    role: "Unity Developer",
    platforms: ["iOS"],
    overview: [
      "Vegas VIP Slots: Casino Games highlights my work on casino-style game presentation with a strong focus on polished flows, responsive interactions, and player retention loops.",
      "I contributed to gameplay features, screen implementation, and mobile-ready UI behavior that supported a premium-feeling slot experience.",
      "The project required balancing spectacle, clarity, and performance for a content-rich mobile casino title."
    ],
    showcaseImages: [
      {
        src: "/projects/vegas-vip-slots-casino-games/screen-01.jpg",
        alt: "Vegas VIP Slots reward wheel screen",
        title: "Reward Wheel",
        caption: "Reward and bonus loop presentation from the Vegas VIP Slots gameplay flow."
      },
      {
        src: "/projects/vegas-vip-slots-casino-games/screen-02.jpg",
        alt: "Vegas VIP Slots gameplay screen with reels",
        title: "Spin and Win",
        caption: "Core reels interface with payout presentation and progression-driven slot feedback."
      },
      {
        src: "/projects/vegas-vip-slots-casino-games/screen-03.jpg",
        alt: "Vegas VIP Slots large payout screen",
        title: "Huge Payouts",
        caption: "High-impact reward reveal screen built to keep the gameplay loop exciting and readable."
      },
      {
        src: "/projects/vegas-vip-slots-casino-games/screen-04.jpg",
        alt: "Vegas VIP Slots jackpot screen",
        title: "Epic Jackpots",
        caption: "Jackpot event presentation designed for strong moment-to-moment payoff."
      },
      {
        src: "/projects/vegas-vip-slots-casino-games/screen-05.jpg",
        alt: "Vegas VIP Slots rewards screen",
        title: "Progress Rewards",
        caption: "Retention-oriented rewards and milestone UI from the slot progression flow."
      },
      {
        src: "/projects/vegas-vip-slots-casino-games/screen-06.jpg",
        alt: "Vegas VIP Slots free spins screen",
        title: "Free Spins",
        caption: "Bonus mode presentation showing free-spin states and animated slot feedback."
      }
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/vegas-vip-slots-casino-games/id1471325236"
    }
  },
  {
    id: "3",
    slug: "fighter-vs-bomber",
    title: "Fighter Vs Bomber",
    description:
      "Built multiplayer combat architecture and gameplay behaviors for a mobile aerial dogfight experience focused on fast-paced encounters.",
    image: "/projects/fighter-vs-bomber/thumbnail.jpg",
    technologies: ["Unity3D", "C#"],
    categories: ["games"],
    year: "2022",
    role: "Unity Developer",
    platforms: ["Mobile"],
    overview: [
      "Fighter Vs Bomber focused on real-time aerial combat with fast dogfight pacing and multiplayer behavior synchronization.",
      "I worked on gameplay architecture, combat systems integration, and the technical structure needed to support responsive mobile sessions.",
      "The result was a combat-focused experience designed around action readability and replay-friendly encounters."
    ],
    links: {}
  },
  {
    id: "4",
    slug: "throw-a-ring",
    title: "Throw A Ring",
    description:
      "Implemented the gameplay mechanics and monetization flows for a casual mobile game built around satisfying physics-based interactions.",
    image: "/projects/throw-a-ring/thumbnail.jpg",
    technologies: ["Unity 3D", "Android"],
    categories: ["games"],
    year: "2019",
    role: "Unity Developer",
    platforms: ["Mobile"],
    overview: [
      "Throw A Ring is a casual game centered on tactile moment-to-moment gameplay and approachable mobile interactions.",
      "My work focused on implementing core mechanics, integrating monetization flows, and helping shape a lightweight but replayable game loop.",
      "The project balanced simple controls with satisfying feel, responsiveness, and mobile-friendly progression."
    ],
    links: {}
  },
  {
    id: "5",
    slug: "indian-air-force-xr-training",
    title: "Indian Air Force: XR Training",
    description:
      "Designed immersive XR training architecture and authoring workflows for defence simulation use cases across multiple headset ecosystems.",
    image: "/projects/indian-air-force-xr-training/thumbnail.jpg",
    technologies: ["Unity 3D", "AR", "VR"],
    categories: ["xr"],
    year: "2024",
    role: "XR Architect",
    platforms: ["HTC Vive Pro", "HoloLens 2", "HP Reverb G2"],
    overview: [
      "This project focused on XR-based training delivery for the Indian Air Force, with an emphasis on realism, repeatability, and cross-device deployment.",
      "I helped design the architecture and tools that supported content authoring, simulation management, and scalable delivery across enterprise XR hardware.",
      "The work required balancing technical reliability, training fidelity, and usability for practical simulation workflows."
    ],
    showcaseImages: [
      {
        src: "/projects/indian-air-force-xr-training/environments.jpg",
        alt: "Multiple environments from the Indian Air Force XR training project",
        title: "Training Environments",
        caption: "Representative environment coverage used for immersive XR simulation scenarios."
      }
    ],
    links: {}
  },
  {
    id: "6",
    slug: "medical-xr",
    title: "Medical XR",
    description:
      "Built immersive medical XR interactions for Meta Quest 3, focusing on usability, training support, and believable simulation workflows.",
    image: "/projects/medical-xr/thumbnail.jpg",
    technologies: ["Unity 3D", "VR", "WebGL"],
    categories: ["xr"],
    year: "2024",
    role: "XR Developer",
    platforms: ["Meta Quest 3"],
    overview: [
      "Medical XR explored immersive workflows for healthcare-oriented training and interaction design in standalone VR.",
      "The experience focused on intuitive headset interactions, scene clarity, and simulation-friendly presentation for instructional use cases.",
      "I adapted the implementation for Meta Quest 3 with attention to performance, usability, and smooth headset-based interaction."
    ],
    links: {}
  },
  {
    id: "7",
    slug: "eternity-city",
    title: "Eternity City",
    description:
      "Created a WebGL and Meta Quest 3 city experience within a larger metaverse direction, balancing exploration, presence, and performance.",
    image: "/projects/eternity-city/thumbnail.png",
    technologies: ["Unity 3D", "VR", "WebGL"],
    categories: ["xr", "webgl"],
    year: "2024",
    role: "Unity Developer",
    platforms: ["WebGL", "Meta Quest 3"],
    overview: [
      "Eternity City is a real-time 3D urban exploration experience designed to work across browser and XR delivery targets.",
      "I focused on adapting the environment, interactions, and rendering strategy for both WebGL and Meta Quest 3 deployment contexts.",
      "The project emphasized scale, readability, and a cohesive metaverse-style city identity across platforms."
    ],
    showcaseImages: [
      {
        src: "/projects/eternity-city/icon.jpg",
        alt: "Eternity City application icon",
        title: "App Identity",
        caption: "Visual identity used for the Eternity City experience."
      }
    ],
    links: {}
  },
  {
    id: "8",
    slug: "vr-mall",
    title: "VR Mall",
    description:
      "Built a cross-platform virtual retail experience for WebGL and Meta Quest 3 with a focus on interaction flow and spatial shopping concepts.",
    image: "/projects/vr-mall/thumbnail.png",
    technologies: ["Unity 3D", "VR", "WebGL"],
    categories: ["xr", "webgl"],
    year: "2024",
    role: "Unity Developer",
    platforms: ["WebGL", "Meta Quest 3"],
    overview: [
      "VR Mall translated shopping and storefront exploration into an immersive 3D format designed for both browser and headset use.",
      "I worked on the platform adaptation and the experience layer needed to make virtual retail interactions feel clear and usable.",
      "The project fit within a broader metaverse-style initiative while still needing its own product identity and interaction logic."
    ],
    links: {}
  },
  {
    id: "9",
    slug: "vr-bank",
    title: "VR Bank",
    description:
      "Developed an immersive banking-oriented XR experience for WebGL and Meta Quest 3 with a focus on clarity, trust, and guided interaction.",
    image: "/projects/vr-bank/thumbnail.jpg",
    technologies: ["Unity 3D", "VR", "WebGL"],
    categories: ["xr", "webgl"],
    year: "2024",
    role: "Unity Developer",
    platforms: ["WebGL", "Meta Quest 3"],
    overview: [
      "VR Bank explored how financial-service flows could be presented through immersive spatial interfaces.",
      "My work focused on delivering a stable, understandable user experience that could translate structured interactions into 3D space.",
      "The project balanced platform performance, interface clarity, and the product tone expected from a banking context."
    ],
    links: {}
  },
  {
    id: "10",
    slug: "vr-temple",
    title: "VR Temple",
    description:
      "Created a spiritual and exploratory XR environment for WebGL and Meta Quest 3, designed around atmosphere, navigation, and presence.",
    image: "/projects/vr-temple/thumbnail.jpg",
    technologies: ["Unity 3D", "VR", "WebGL"],
    categories: ["xr", "webgl"],
    year: "2024",
    role: "Unity Developer",
    platforms: ["WebGL", "Meta Quest 3"],
    overview: [
      "VR Temple focused on immersive atmosphere and environment-driven interaction inside a spiritual 3D experience.",
      "I helped shape a delivery approach that preserved visual mood while still staying practical for browser and standalone XR performance targets.",
      "The work emphasized spatial presence, environmental storytelling, and a calm, navigable experience flow."
    ],
    links: {}
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "games", label: "Games" },
  { id: "xr", label: "Extended Reality" },
  { id: "webgl", label: "WebGL" }
];
