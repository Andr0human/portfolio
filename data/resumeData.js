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
      title: "Chessmate",
      description:
        "Built a real-time multiplayer chess platform supporting 50+ concurrent game rooms using WebSockets (Socket.IO) with low-latency event handling. Integrated a 2400+ Elo chess engine with configurable difficulty and maintained a 95% Lighthouse performance score across devices. Designed the game-state sync architecture to handle disconnections and reconnections without losing match state.",
      url: "project_chessmate.webp",
      demoLink: "https://chessmate.ayushsinha.dev",
      githubLink: "https://github.com/Andr0human/ChessMate",
      techStack: [
        "React.js",
        "Next.js",
        "Socket.IO",
        "Tailwind CSS",
        "Node.js",
        "C++",
      ],
    },
    {
      title: "CPTrackr",
      description:
        "Built a unified contest aggregator that normalizes live competition data from Codeforces, CodeChef, and LeetCode into a single dashboard. Designed a Node.js/Express backend in TypeScript to handle inconsistent third-party APIs, with a React frontend for filtering contests by platform, date, and duration.",
      url: "project_cptrackr.webp",
      demoLink: "https://cptrackr.ayushsinha.dev",
      githubLink: "https://github.com/Andr0human/CPTrackr",
      techStack: ["JavaScript", "React.js", "Node.js", "Express", "TypeScript"],
    },
    {
      title: "JobNest",
      description:
        "Built a full-stack job application tracker with OAuth-based authentication and an analytics dashboard for tracking application status across stages. Designed a modular RESTful API in Express with MongoDB, and implemented dynamic filtering and status workflows on the React frontend.",
      url: "project_jobnest.webp",
      demoLink: "https://jobnest.ayushsinha.dev",
      githubLink: "https://github.com/Andr0human/Job-Nest",
      techStack: ["React.js", "Node.js", "Express", "Ant Design", "MongoDB"],
    },
    {
      title: "SignStream",
      description:
        "Trained a CNN-LSTM model for real-time sign language recognition, using MediaPipe to extract hand landmarks from live video frames and feeding them into a custom TensorFlow model for gesture classification. Optimized the inference pipeline to achieve low-latency predictions on live webcam input.",
      url: "project_slr.webp",
      demoLink: "",
      githubLink: "https://github.com/Andr0human/Sign-Language-Recognition",
      techStack: ["Python", "TensorFlow", "OpenCV", "MediaPipe"],
    },
  ],
};
