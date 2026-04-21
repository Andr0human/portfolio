export const resumeData = {
  aboutme: {
    name: "Ayush Sinha",
    role: "Full Stack Engineer",
    summary:
      "Full Stack Engineer with 2.5+ years building production systems. Currently at Opslyft working on cloud infrastructure, ClickHouse analytics, and AWS-based backend systems. I care about performance, observability, and writing code that scales.",
    socialLinks: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/ayushsinha3199",
      },
      {
        name: "github",
        url: "http://github.com/Andr0human",
      },
      {
        name: "email",
        url: "mailto:ayushsinha3199@gmail.com",
      },
    ],
  },
  education: [
    {
      degree: "B.Tech in Computer Science",
      school: "Galgotias College of Engineering and Technology",
      year: "2019 - 2023",
    },
  ],
  experiences: [
    {
      role: "Full Stack Engineer",
      company: "Opslyft",
      duration: "Aug 2025 - Present",
      achievements: [
        "Implemented a structured audit logging system to track user actions, enabling admin-level visibility; integrated with AWS CloudWatch and Grafana for centralized monitoring.",
        "Optimized ClickHouse queries for large-scale cost analytics by implementing database-level pagination and aggregation, significantly reducing data transfer (2GB+) and improving query performance and system stability.",
        "Redesigned data export workflow for large datasets by offloading query results to AWS S3, enabling reliable download of GB-scale reports and eliminating server crashes caused by in-memory processing.",
        "Integrated authentication and authorization flows using AWS Cognito and Okta, improving security and user access management.",
        "Leveraged AWS services (S3, Lambda, DynamoDB, ECS, Cognito) to build and support scalable backend workflows and cloud-based deployments.",
      ],
    },
    {
      role: "Associate Software Developer",
      company: "Successive Digital",
      duration: "Sept 2023 - Mar 2025",
      achievements: [
        "Migrated Mongoose from version 5 to 8 across 12+ projects, improving database performance, security, and compatibility with modern MongoDB features.",
        "Redesigned the script integration logic for the Dentsu Connect project, achieving a 30% reduction in website load times and enhancing user experience.",
      ],
    },
    {
      role: "Associate Software Developer",
      company: "Pheture Studios Pvt Ltd",
      duration: "Nov 2022 - Apr 2023",
      achievements: [
        "Conducted 20+ interviews to evaluate technical skills and cultural fit, aiding in building a robust engineering team.",
        "Developed Brandlytics, an analytic tool for YouTube videos, collectively analyzed the effectiveness of modifying video titles and thumbnails in improving the click-through rate (CTR) of the content.",
      ],
    },
  ],
  skills: [
    {
      group: "Production",
      label: "Used at Opslyft",
      items: ["AWS", "ClickHouse", "Node.js", "React", "TypeScript", "Okta", "Grafana", "CloudWatch", "Kubernetes"],
    },
    {
      group: "Core Stack",
      label: null,
      items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "NestJS"],
    },
    {
      group: "Databases",
      label: null,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "ClickHouse"],
    },
    {
      group: "DevOps & Tools",
      label: null,
      items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "AWS", "Grafana", "CloudWatch"],
    },
    {
      group: "Familiar",
      label: null,
      items: ["Python", "Django", "GraphQL"],
    },
  ],
  projects: [
    {
      title: "Hammr",
      tagline: "Load-testing tool that finds where your API breaks — not just how fast it is.",
      highlights: [
        { value: "1000+", label: "Concurrent VUs" },
        { value: "63%", label: "Scaling efficiency detected" },
        { value: "3.8x", label: "p95 latency regression caught" },
        { value: "10", label: "Auto-diagnostic rules" },
      ],
      description:
        "Built a load-testing tool that sustains 1000+ concurrent virtual users per process by running async VU loops on Node.js Worker Threads with pooled undici agents, avoiding the 1-thread-per-user overhead. Used it to profile a production Vercel/MongoDB-Atlas API and identified a capacity knee between 50-100 VUs — doubling load from 100 to 200 VUs yielded only 1.26x throughput (63% scaling efficiency) while p95 latency grew 3.8x (1.6s to 6.0s) and error rate hit 8%. Designed a deterministic rules engine with 10 single-run and cross-run rules that auto-detects capacity knees, scaling breakdowns, and latency regressions from raw metrics.",
      url: "/project_hammr.webp",
      demoLink: "",
      githubLink: "https://github.com/Andr0human/Hammr",
      techStack: [
        "TypeScript",
        "Node.js",
        "undici",
        "Express",
        "Socket.IO",
        "React",
        "Next.js",
        "ClickHouse",
        "Docker",
        "AWS",
      ],
    },
    {
      title: "Chessmate",
      tagline: "Real-time multiplayer chess powered by Elsa, a self-built 2400+ Elo C++ engine.",
      highlights: [
        { value: "50+", label: "Concurrent rooms" },
        { value: "2400+", label: "Elo (Elsa engine)" },
        { value: "95%", label: "Lighthouse score" },
        { value: "C++", label: "Custom engine" },
      ],
      description:
        "Built a real-time multiplayer chess platform using WebSockets (Socket.IO), supporting 50+ concurrent game rooms with low-latency communication, and shipped a frontend that scores 95% on Lighthouse across devices. Integrated Elsa — a self-built 2400+ Elo chess engine written in C++ — with adjustable difficulty levels for single-player mode.",
      url: "project_chessmate.webp",
      demoLink: "https://chessmate.ayushsinha.dev",
      githubLink: "https://github.com/Andr0human/ChessMate",
      techStack: [
        "JavaScript",
        "React",
        "Next.js",
        "Socket.IO",
        "Chess.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "CPTrackr",
      tagline: "One dashboard for every competitive programming contest across the major judges.",
      highlights: [
        { value: "3", label: "Platforms unified" },
        { value: "Live", label: "Contest feed" },
        { value: "TS", label: "Typed end-to-end" },
        { value: "REST", label: "Normalized API" },
      ],
      description:
        "Built a unified contest aggregator that normalizes live competition data from Codeforces, CodeChef, and LeetCode into a single dashboard. Designed a Node.js/Express backend in TypeScript to handle inconsistent third-party APIs, with a React frontend for filtering contests by platform, date, and duration.",
      url: "project_cptrackr.webp",
      demoLink: "https://cptrackr.ayushsinha.dev",
      githubLink: "https://github.com/Andr0human/CPTrackr",
      techStack: ["JavaScript", "React.js", "Node.js", "Express", "TypeScript"],
    },
    {
      title: "JobNest",
      tagline: "Full-stack job tracker with OAuth and analytics across application stages.",
      highlights: [
        { value: "OAuth", label: "Secure auth flow" },
        { value: "REST", label: "Modular API" },
        { value: "MongoDB", label: "Flexible schema" },
        { value: "Analytics", label: "Stage funnel" },
      ],
      description:
        "Built a full-stack job application tracker with OAuth-based authentication and an analytics dashboard for tracking application status across stages. Designed a modular RESTful API in Express with MongoDB, and implemented dynamic filtering and status workflows on the React frontend.",
      url: "project_jobnest.webp",
      demoLink: "https://jobnest.ayushsinha.dev",
      githubLink: "https://github.com/Andr0human/Job-Nest",
      techStack: ["React.js", "Node.js", "Express", "Ant Design", "MongoDB"],
    },
    {
      title: "SignStream",
      tagline: "Real-time sign language recognition from webcam input using a CNN-LSTM pipeline.",
      highlights: [
        { value: "CNN-LSTM", label: "Model architecture" },
        { value: "Realtime", label: "Webcam inference" },
        { value: "MediaPipe", label: "Landmark extraction" },
        { value: "TF", label: "Custom trained model" },
      ],
      description:
        "Trained a CNN-LSTM model for real-time sign language recognition, using MediaPipe to extract hand landmarks from live video frames and feeding them into a custom TensorFlow model for gesture classification. Optimized the inference pipeline to achieve low-latency predictions on live webcam input.",
      url: "project_slr.webp",
      demoLink: "",
      githubLink: "https://github.com/Andr0human/Sign-Language-Recognition",
      techStack: ["Python", "TensorFlow", "OpenCV", "MediaPipe"],
    },
  ],
};
