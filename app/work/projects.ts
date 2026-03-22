export type Project = {
  slug: string;
  name: string;
  stack: string;
  description: string;
  previewImage?: string;
  previewHref?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-powered-audiobook-app",
    name: "AI-Powered Audiobook App",
    stack: "React Native • Expo • TTS • EPUB",
    description:
      "Built a mobile app with 75,000 public-domain audiobooks, edge-optimized text-to-speech models for offline inference, and a synchronized EPUB reading experience.",
    previewImage: "/mimesis/explore.png",
    previewHref: "/mimesis",
  },
  {
    slug: "ai-workout-tracker",
    name: "AI Workout Tracker",
    stack: "React Native • LLM Integration • Data Viz",
    description:
      "Created a fitness app that converts natural-language workout inputs into structured training data and visual progress graphs.",
  },
  {
    slug: "live-run-tracker-app",
    name: "Live Run Tracker App",
    stack: "React Native • Apple Maps API • GPS",
    description:
      "Developed a live run-tracking app with real-time GPS route mapping and session tracking powered by Apple Maps API integration.",
  },
];
