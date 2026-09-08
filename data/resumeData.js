export const resumeData = {
  aboutme: {
    name: "Ayush Sinha",
    role: "Full Stack Engineer",
    summary:
      "Full Stack Engineer with 3+ years building production systems. I work at Yotta Data Services on Apiculus, a multi-tenant cloud management platform, across the Vue frontend, the Node.js services behind it, and the Apache CloudStack engine underneath. Most of my recent work has been performance debugging: finding why something is slow, or why it only breaks under load.",
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
      role: "Application Engineer",
      company: "Yotta Data Services",
      duration: "Jun 2026 - Present",
      achievements: [
        "Diagnosed and fixed a 504 timeout in the multi-service account-export pipeline (Node.js, RabbitMQ, MySQL) by profiling each stage and eliminating a ~22MB subscriptions over-fetch, a double JSON serialization, an O(n²) reshaping loop, and an N+1 query, cutting end-to-end export time from 50s+ to ~10s and restoring a feature that was failing at the gateway limit.",
        "Fixed an OOM crash-loop in a shared logging worker caused by byte-expansion of large Node Buffers, restoring stable logging and making it ~169x faster on multi-MB payloads.",
      ],
    },
    {
      role: "Full Stack Engineer",
      company: "Opslyft",
      duration: "Aug 2025 - Apr 2026",
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
      duration: "Sep 2023 - Mar 2025",
      achievements: [
        "Migrated Mongoose from version 5 to 8 across 12+ projects, improving database performance, security, and compatibility with modern MongoDB features.",
        "Redesigned the script integration logic for the Dentsu Connect project, achieving a 30% reduction in website load times and enhancing user experience.",
      ],
    },
    {
      role: "Associate Software Developer",
      company: "Pheuture Studios Pvt. Ltd.",
      duration: "Nov 2022 - Apr 2023",
      achievements: [
        "Conducted 20+ interviews to evaluate technical skills and cultural fit, aiding in building a robust engineering team.",
        "Developed Brandlytics, an analytic tool for YouTube videos, collectively analyzed the effectiveness of modifying video titles and thumbnails in improving the click-through rate (CTR) of the content.",
      ],
    },
  ],
  openSource: [
    {
      project: "Apache CloudStack",
      org: "Apache Software Foundation",
      date: "Sep 2026",
      status: "Merged",
      milestone: "Release 4.22.2",
      title:
        "Fixed a concurrency race that silently left VM network interfaces attached",
      prNumber: "#13700",
      prLink: "https://github.com/apache/cloudstack/pull/13700",
      repoLink: "https://github.com/apache/cloudstack",
      problem:
        "CloudStack is the orchestration engine underneath Apiculus. If two API calls detached different NICs from the same VM at the same time, the async work-job queue treated them as duplicates and ran only one of them. Both calls still returned success, so the VM kept a NIC that the control plane had already written off as removed.",
      solution:
        "The pending-work-job lookup keyed only on VM ID, the same mistake that had been fixed on the attach path years earlier. I re-keyed the deduplication on the NIC UUID so two detaches of different NICs stop colliding, and added regression tests that fail on the old code and pass on the new. One of the CloudStack committers reproduced the race on a live deployment before approving: two detach calls five seconds apart, both returning success with the NICs still attached, both cleared once the patch was in.",
      highlights: [
        { value: "3", label: "Regression tests" },
        { value: "3", label: "Committer approvals" },
        { value: "149", label: "CI smoke tests green" },
        { value: "+106/-3", label: "Lines changed" },
      ],
      techStack: ["Java", "Apache CloudStack", "Concurrency", "Async Job Queue"],
    },
  ],
  skills: [
    {
      group: "Production",
      label: "Used at Yotta & Opslyft",
      items: ["AWS", "Apache CloudStack", "Vue.js", "Java", "Node.js", "React", "TypeScript", "ClickHouse", "RabbitMQ", "MySQL", "Kubernetes", "Grafana", "Okta"],
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
      tagline: "Load-testing tool that finds where your API breaks, not just how fast it is.",
      highlights: [
        { value: "1000+", label: "Concurrent VUs" },
        { value: "63%", label: "Scaling efficiency detected" },
        { value: "3.8x", label: "p95 latency regression caught" },
        { value: "10", label: "Auto-diagnostic rules" },
      ],
      description:
        "Built a load-testing tool that sustains 1000+ concurrent virtual users per process by running async VU loops on Node.js Worker Threads with pooled undici agents, rather than a thread per user. I pointed it at a production Vercel/MongoDB-Atlas API and found a capacity knee between 50 and 100 VUs: doubling load from 100 to 200 VUs bought only 1.26x more throughput (63% scaling efficiency), while p95 latency grew 3.8x, from 1.6s to 6.0s, and errors hit 8%. A rules engine sits on top with 10 rules, some per-run and some across runs, so those knees and latency regressions get flagged from the raw metrics instead of eyeballed off a graph.",
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
      tagline: "Real-time multiplayer chess powered by Elsa, a self-built 2500+ Elo C++ engine.",
      highlights: [
        { value: "50+", label: "Concurrent rooms" },
        { value: "2500+", label: "Elo (Elsa engine)" },
        { value: "95%", label: "Lighthouse score" },
        { value: "C++", label: "Custom engine" },
      ],
      description:
        "Built a real-time multiplayer chess platform on WebSockets (Socket.IO) that holds 50+ concurrent game rooms, with a frontend scoring 95% on Lighthouse across devices. Single-player mode plays against Elsa, a C++ engine I wrote myself. Its v3.0.0 release measures around 2516 CCRL-blitz-equivalent Elo, up 134 Elo on the previous version over 2505 head-to-head games, and the difficulty is adjustable.",
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
