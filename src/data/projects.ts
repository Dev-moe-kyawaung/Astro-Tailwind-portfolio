export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon?: string;
  image?: string;
  links?: {
    github?: string;
    web?: string;
    app?: string;
  };
}

export const projects: Project[] = [
  // Featured / Senior-level apps
  {
    title: "Social Dashboard",
    description:
      "Advanced social media dashboard with real-time updates, analytics, and multi-platform integration. Designed for scalability and performance.",
    tech: ["Flutter", "Dart", "Firebase", "Real-time UI"],
    icon: "💬",
    image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png",
    links: {
      github: "https://github.com/moekyawaung-tech/social-dashboard",
      app: "https://moekyawaung.lovable.app",
    },
  },
  {
    title: "Video Player",
    description:
      "High-performance video player with custom controls, playlist support, and smooth playback. Built with modern UI patterns and optimized for mobile.",
    tech: ["Flutter", "Dart", "Media", "Mobile UI"],
    icon: "🎯",
    image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp",
    links: {
      github: "https://github.com/moekyawaung-tech/video-player",
    },
  },
  {
    title: "Game Collection",
    description:
      "Curated collection of games including Snake Game, Casino App, and more. Demonstrates advanced game logic, animations, and state management.",
    tech: ["Flutter", "Dart", "Games", "Animations"],
    icon: "🎮",
    image: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_12_iv8kpm.webp",
    links: {
      github: "https://github.com/moekyawaung-tech/game-collection",
    },
  },
  {
    title: "PWA App",
    description:
      "Progressive Web App with offline support, installable experience, and responsive design. Built for performance and cross-platform usage.",
    tech: ["PWA", "JavaScript", "Web", "Offline-first"],
    icon: "📱",
    links: {
      github: "https://github.com/moekyawaung-tech/pwa-app",
      web: "https://moekyawaung-web.github.io/",
    },
  },
  {
    title: "Job Portal App",
    description:
      "Job search and application platform with filtering, profiles, and real-time notifications. Focused on usability and clean architecture.",
    tech: ["Flutter", "Dart", "Firebase", "Job Matching"],
    icon: "💼",
    links: {
      github: "https://github.com/moekyawaung-tech/Job-Portal-App",
    },
  },
  {
    title: "POS System (Full Version)",
    description:
      "Complete POS solution with inventory, sales, reports, and multi-user support. Designed for real-world business usage and scalability.",
    tech: ["Flutter", "Dart", "POS", "Business Apps"],
    icon: "💰",
    links: {
      github: "https://github.com/moekyawaung-tech/POS-Full-Version",
    },
  },
  {
    title: "Adventure & Travel Apps",
    description:
      "Collection including Thailand Travel, Daily Planner, Weather App, and more. Showcases diverse UI patterns and real-world usage scenarios.",
    tech: ["Flutter", "Dart", "Travel", "Planning"],
    icon: "🌤️",
    links: {
      github: "https://github.com/moekyawaung-tech/thailand-travel",
    },
  },
  {
    title: "Advanced POS Versions",
    description:
      "Successive POS improvements: Advance POS, Ultimate POS, Ultimate Pro Max. Demonstrates iterative refinement and feature expansion.",
    tech: ["Flutter", "Dart", "POS", "Enterprise"],
    icon: "📊",
    links: {
      github: "https://github.com/moekyawaung-tech/Advance-POS-Version",
    },
  },
  {
    title: "Web Projects & Utilities",
    description:
      "Multiple web projects including Hospital Lists, Postcode Web Project, Lens Lite, and more. Demonstrates full-stack web capabilities.",
    tech: ["HTML", "CSS", "JavaScript", "Web"],
    icon: "🌐",
    links: {
      github: "https://github.com/Moekyawaung-cyber/Hospital-Lists",
    },
  },
  {
    title: "LEGEND! Collection",
    description:
      "Signature collection of standout apps and experiments. Represents creative exploration, advanced features, and premium design.",
    tech: ["Flutter", "Dart", "Experimentation"],
    icon: "🎯",
    links: {
      github: "https://github.com/moekyawaung-tech",
      web: "https://moekyawaung2026.github.io/",
    },
  },
];
