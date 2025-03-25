export const resumeData = {
  aboutme: {
    name: 'Ayush Sinha',
    role: 'Full-Stack Developer',
    summary:
      "I'm a Full-Stack Developer passionate about building scalable and efficient web applications. I love exploring new technologies, optimizing performance, and solving complex problems. In my free time, you’ll find me coding, experimenting with new tools, or gaming.",
    socialLinks: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/ayushsinha3199',
      },
      {
        name: 'github',
        url: 'http://github.com/Andr0human',
      },
      {
        name: 'email',
        url: 'mailto:ayushsinha3199@gmail.com',
      },
    ],
  },
  education: [
    {
      degree: 'Bachelors Degree',
      school: 'Galgotias College of Engineering and Technology',
      year: '2019 - 2023',
      description:
        'I completed my Bachelor of Technology degree in Computer Science from Galgotias College of Engineering and Technology, located in Greater Noida, Uttar Pradesh.',
    },
    {
      degree: 'Senior Secondary Education',
      school: 'Hope Hall Foundation School, New Delhi',
      year: '2017 - 2019',
      description:
        'I completed my Senior Secondary Education with a focus on science subjects at Hope Hall Foundation School in New Delhi. This period provided a strong academic foundation and helped shape my interest in pursuing a career in technology.',
    },
  ],
  experiences: [
    {
      role: 'Associate Software Developer',
      company: 'Successive Digital',
      duration: 'Sept 2023 - Present',
      achievements: [
        'Executed a pivotal role in the WASL project, personally contributing to the successful integration of 2500+ images onto the main website.',
        'Implemented optimization strategies resulting in a noteworthy 40% improvement in response time for bulk job listing data uploads, thereby streamlining system efficiency and elevating overall performance.',
        'Migrated Mongoose from version 5 to 8 across 12+ projects, improving database performance, security, and compatibility with modern MongoDB features.',
      ],
    },
    {
      role: 'Associate Software Developer',
      company: 'Pheture Studios Pvt Ltd',
      duration: 'Nov 2022 - Apr 2023',
      achievements: [
        'Conducted 20+ interviews to evaluate technical skills and cultural fit, aiding in building a robust engineering team.',
        'Developed Brandlytics, an analytic tool for YouTube videos, collectively analyzed the effectiveness of modifying video titles and thumbnails in improving the click-through rate (CTR) of the content.',
      ],
    },
  ],
  skills: {
    primary: [
      { name: 'HTML5/CSS', level: 95 },
      { name: 'C/C++', level: 93 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 82 },
      { name: 'JavaScript', level: 88 },
      { name: 'PHP', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'MySQL', level: 90 },
    ],
    secondary: [
      { name: 'Node.js', level: 95 },
      { name: 'React', level: 90 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 85 },
      { name: 'Git', level: 100 },
      { name: 'Unity', level: 70 },
      { name: 'Postman', level: 85 },
      { name: 'TensorFlow', level: 75 },
    ],
  },
  projects: [
    {
      title: 'CPTrackr',
      description:
        'CPTrackr project is a web application designed to help competitive programmers track, manage, and prepare for coding contests across multiple platforms like Codeforces, CodeChef, and LeetCode.',
      url: 'project_cptrackr.webp',
      demoLink: 'https://project.cp-trackr.ayushsinha.dev',
      githubLink: 'https://github.com/Andr0human/CPTrackr',
      techStack: ['JavaScript', 'React.js', 'Node.js', 'Express', 'TypeScript'],
    },
    {
      title: 'JobNest',
      description:
        'JobNest is a comprehensive job searching and tracking platform designed to help users manage their applications efficiently. It features a dynamic job tracking dashboard with analytics, a user-friendly interface, and OAuth-based authentication for secure access.',
      url: 'project_jobnest.webp',
      demoLink: 'https://project.job-nest.ayushsinha.dev',
      githubLink: 'https://github.com/Andr0human/Job-Nest',
      techStack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Chessmate',
      description:
        'A feature-rich chess application built with Unity, offering an AI-powered opponent using the Minimax algorithm with Alpha-Beta Pruning. Designed for Windows, it delivers an immersive and responsive gameplay experience with a sleek UI and smooth animations.',
      url: 'project_chessmate.webp',
      demoLink: '',
      githubLink: 'https://github.com/Andr0human/ChessMate',
      techStack: ['Unity', 'C#', 'C++'],
    },
    {
      title: 'SignStream',
      description:
        'An innovative deep-learning model designed for real-time sign language recognition. Using a CNN-LSTM architecture, it enables accurate gesture detection with an interactive and optimized UI for low-latency performance.',
      url: 'project_slr.webp',
      demoLink: '',
      githubLink: 'https://github.com/Andr0human/Sign-Language-Recognition',
      techStack: ['Python', 'TensorFlow', 'OpenCV'],
    },
  ],
};
