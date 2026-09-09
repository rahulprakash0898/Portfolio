import { ResumeData, ImpactHighlight } from "./types";

export const resumeData: ResumeData = {
  basics: {
    name: "Rahul Prakash",
    titles: [
      "Full Stack Developer",
      "MERN Stack Specialist",
      "AI / LLM Integration Engineer",
      "React.js & Next.js Specialist",
      "Node.js & Express API Architect",
      "AWS & DevOps Enthusiast",
      "HackerRank 5-Star (Java & SQL)"
    ],
    summary: [
      "Full Stack Developer with strong expertise in delivering production-ready applications across the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, TypeScript, PostgreSQL, and Redis. Experienced in scaling applications for 100,000+ user visits through robust REST APIs, intelligent database query optimization, and Redis caching.",
      "Hands-on background in integrating AI/LLM capabilities into full-stack workflows, building real-time WebSocket communication systems, and streamlining deployments down to 20 minutes using Docker, AWS EC2, Nginx, and GitHub Actions CI/CD pipelines."
    ],
    location: "New Delhi / Greater Noida, India",
    email: "rahulprakash0898@gmail.com",
    phone: "+91 6388689662",
    linkedin: "https://linkedin.com/in/rahul-prakash-dev",
    github: "https://github.com/rahulprakash0898",
    liveUrl: "https://rahulprakash-dev.netlify.app"
  },
  experience: [
    {
      company: "Axepert Exhibits Private Limited",
      role: "Full Stack Developer",
      dates: "May 2025 – Aug 2026",
      location: "New Delhi, India",
      bullets: [
        "Delivered 10+ full-stack projects using Node.js, Express.js, React.js, MongoDB, PostgreSQL, and Redis for production applications.",
        "Supported applications serving 100,000+ user visits through scalable REST APIs, optimized database queries, database indexing, Redis caching, pagination, and efficient client-server communication.",
        "Reduced production deployment turnaround to approximately 20 minutes using Docker, Nginx, AWS EC2, Linux/VPS infrastructure, and GitHub Actions CI/CD.",
        "Integrated AI/LLM capabilities into full-stack applications by connecting AI services with Node.js backend APIs and React.js interfaces for application workflows and user-facing features.",
        "Implemented secure application architecture using JWT/OAuth, RBAC, API validation, Socket.IO/WebSockets, Redux Toolkit, and TanStack Query for scalable authentication, real-time communication, and data management."
      ]
    },
    {
      company: "Myndtree Business Services",
      role: "Software DM Trainee (Internship)",
      dates: "Feb 2024 – May 2024",
      location: "Noida, India",
      bullets: [
        "Developed responsive web pages and improved UI layouts while collaborating with development teams in an Agile environment.",
        "Supported frontend development through debugging, coordination, communication, and implementation of maintainable web interfaces."
      ]
    },
    {
      company: "Aditya Birla Hindalco Industries Ltd",
      role: "Oracle APEX / PL/SQL Intern",
      dates: "Jul 2023 – Sep 2023",
      location: "Renukoot, Uttar Pradesh, India",
      bullets: [
        "Worked with PL/SQL queries, stored procedures, functions, and database operations during a 3-month internship.",
        "Used Oracle APEX for database-driven applications, data handling, application logic, and relational database workflows."
      ]
    }
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "Zustand"]
    },
    {
      category: "Backend & AI",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "WebSockets", "AI/LLM Integration"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS EC2", "AWS S3", "Docker", "Nginx", "GitHub Actions", "Linux", "VPS/KVM"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Postman", "MongoDB Compass"]
    },
    {
      category: "Professional Skills",
      skills: ["Communication", "Collaboration", "Problem-Solving", "Teamwork", "Coordination", "Adaptability", "Time Management", "Agile"]
    }
  ],
  certifications: [
    "HackerRank 5-Star – Java and SQL (2024 – Present)",
    "MERN Stack Developer Training – JSpiders (July 2024 – May 2025)",
    "Full Stack Web Development (React, Node.js, Express, MongoDB)",
    "Oracle APEX & PL/SQL Database Operations"
  ],
  education: [
    {
      institution: "Galgotias College of Engineering and Technology",
      degree: "Master of Computer Applications (MCA) with Honors",
      date: "Nov 2021 – Sep 2023",
      location: "Greater Noida, India"
    },
    {
      institution: "Bundelkhand University",
      degree: "Bachelor of Computer Applications (BCA) with Honors",
      date: "Jul 2018 – Jul 2021",
      location: "Jhansi, India"
    }
  ],
  languages: [
    "Hindi (Native / Full Professional)",
    "English (Professional Working Proficiency)"
  ],
  projects: [
    // 1. FULL STACK PROJECTS
    {
      title: "Real-Time Full Stack Chat App",
      category: "Full Stack",
      description: "Full-stack real-time chat application with instant messaging, online presence tracking, authentication, and media uploads.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Zustand", "Tailwind CSS", "DaisyUI"],
      bullets: [
        "Architected live bidirectional messaging with low-latency Socket.IO streaming and room broadcasting.",
        "Implemented secure JWT/Bcrypt.js auth, Cloudinary image pipeline, and responsive UI with Tailwind & DaisyUI.",
        "Engineered global state management with Zustand and instant notification indicators."
      ],
      githubUrl: "https://github.com/rahulprakash0898/fullstack-chat-app.git",
      demoUrl: "https://fullstack-chat-app-5ane.onrender.com/"
    },
    {
      title: "E-Commerce Web Application",
      category: "Full Stack",
      description: "Comprehensive full-stack e-commerce platform featuring dynamic product filtering, cart drawer, checkout, and PayPal payment integration.",
      stack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "PayPal API", "Cloudinary"],
      bullets: [
        "Built responsive client storefront with live catalog search, category filtering, and cart state synchronization.",
        "Integrated PayPal sandbox payment processing, order lifecycle tracking, and JWT-authenticated customer portals.",
        "Engineered resilient error handling and optimized API communication using Axios interceptors."
      ],
      githubUrl: "https://github.com/rahulprakash0898/E-Commerce-App.git",
      demoUrl: "https://e-commerce-app-rahul-dev.vercel.app/"
    },
    {
      title: "Interactive Polling Application",
      category: "Full Stack",
      description: "Full-stack real-time voting and opinion polling system with live vote counters, user authentication, and poll creator dashboard.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      bullets: [
        "Created real-time poll creation and instant voting interface with dynamic percentage tally updates.",
        "Implemented secure user login / registration authentication flow to ensure single-vote integrity per user.",
        "Constructed clean mobile-first responsive dashboard with analytical vote breakdown visualizations."
      ],
      githubUrl: "https://github.com/rahulprakash0898/Polling-App",
      demoUrl: "https://polling-app-rahul-dev.vercel.app/login"
    },
    {
      title: "Data Stream Pro",
      category: "Full Stack",
      description: "Full-stack real-time data streaming and analytical monitoring platform featuring reactive charts, API streams, and telemetry feeds.",
      stack: ["React.js", "Node.js", "Express.js", "TypeScript", "Tailwind CSS", "Data Streams"],
      bullets: [
        "Constructed high-throughput full-stack telemetry engine visualizing live system metrics and streaming event logs.",
        "Implemented modular chart widgets with dynamic data refresh intervals and threshold alerting.",
        "Delivered smooth 60fps animations, optimized state caching, and responsive cyber dark UI."
      ],
      githubUrl: "https://github.com/rahulprakash0898/DataStream-Pro.git",
      demoUrl: "https://data-stream-pro-rahul-dev.vercel.app/"
    },
    {
      title: "Smart Todo Productivity Platform",
      category: "Full Stack",
      description: "Full-stack task management application with backend synchronization, priority sorting, status filtering, and local persistence.",
      stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "LocalStorage API", "Motion"],
      bullets: [
        "Implemented complete CRUD functionality for personal task tracking with instant category filtering.",
        "Persisted user tasks using browser LocalStorage and state pipelines to maintain continuity across reloads.",
        "Added fluid completion animations, priority color badges, and clean search filters."
      ],
      githubUrl: "https://github.com/rahulprakash0898/Todo.git",
      demoUrl: "https://todo-rahul-dev.vercel.app/"
    },

    // 2. FRONTEND PROJECTS (Zomato, HubSpot, Dell Technologies ONLY)
    {
      title: "Zomato Food Delivery Web App",
      category: "Frontend",
      description: "Feature-rich restaurant discovery and food ordering portal clone with location filtering, dish browsing, and responsive UI.",
      stack: ["React.js", "Tailwind CSS", "RESTful APIs", "Context API", "Lucide Icons"],
      bullets: [
        "Engineered restaurant listings and menu categorization filters mimicking commercial food delivery workflows.",
        "Implemented responsive interactive cart and meal selection drawer with dynamic subtotal calculations.",
        "Designed high-converting modern layouts optimized for quick viewport discovery on mobile and desktop."
      ],
      githubUrl: "https://github.com/rahulprakash0898/Zomato.git",
      demoUrl: "https://zomato-rahul-dev.vercel.app/"
    },
    {
      title: "HubSpot Solutions Portal Clone",
      category: "Frontend",
      description: "Pixel-perfect modern landing and enterprise solutions interface inspired by HubSpot's design architecture.",
      stack: ["HTML5", "CSS3", "JavaScript", "Responsive Grid", "UI Systems"],
      bullets: [
        "Crafted accessible and responsive corporate marketing layouts with cross-browser compatibility.",
        "Engineered smooth interactive navigation menus, promotional banners, and lead acquisition mockups.",
        "Optimized asset loading speeds and lightweight DOM rendering performance."
      ],
      githubUrl: "https://github.com/rahulprakash0898/HubSpot.git",
      demoUrl: "https://hubspot-rahul-dev.netlify.app/"
    },
    {
      title: "Dell Technologies Portal Clone",
      category: "Frontend",
      description: "Enterprise product showcase and technology catalog portal inspired by Dell Technologies' digital storefront.",
      stack: ["React.js", "Tailwind CSS", "Component System", "Vite"],
      bullets: [
        "Designed structured multi-tier enterprise hardware catalog with specification tabs and comparison tables.",
        "Built responsive product cards with hover states, dynamic image galleries, and pricing badges.",
        "Implemented modular, reusable UI components adhering to modern accessibility guidelines."
      ],
      githubUrl: "https://github.com/rahulprakash0898/DELL-Technologies.git",
      demoUrl: "https://dell-technologies-rahul-dev.netlify.app/"
    },

    // 3. API & DEVOPS PROJECTS
    {
      title: "Media Converter Service",
      category: "API & DevOps",
      description: "High-performance media conversion & transcoding backend microservice built with Node.js and FFmpeg pipeline streams.",
      stack: ["Node.js", "Express.js", "FFmpeg", "Streams API", "Docker", "REST APIs"],
      bullets: [
        "Constructed scalable media processing worker capable of transcoding video and audio formats asynchronously.",
        "Utilized Node.js native streams and buffer piping to minimize memory overhead during large file conversions.",
        "Structured RESTful job dispatch endpoints with progress telemetry and webhook callback handlers."
      ],
      githubUrl: "https://github.com/rahulprakash0898/Media_Converter.git"
    },
    {
      title: "Express Observability Stack",
      category: "API & DevOps",
      description: "Production observability infrastructure for Express.js APIs using Prometheus metrics, Grafana dashboards, and structured logging.",
      stack: ["Node.js", "Express.js", "Prometheus", "Grafana", "Winston", "DevOps"],
      bullets: [
        "Integrated Prometheus metrics exporter tracking HTTP request durations, memory utilization, and error rates.",
        "Designed Grafana dashboard templates for real-time monitoring of service latency (P95/P99) and throughput.",
        "Implemented standardized structured JSON logger with correlation IDs for distributed tracing."
      ],
      githubUrl: "https://github.com/rahulprakash0898/express-observability-stack.git"
    },
    {
      title: "Async Queue Monitoring Microservices",
      category: "API & DevOps",
      description: "Distributed background job processing and queue monitoring system powered by BullMQ, Redis, and Express workers.",
      stack: ["Node.js", "Redis", "BullMQ", "Microservices", "Docker", "Worker Threads"],
      bullets: [
        "Engineered scalable asynchronous task processing queue with automatic retry mechanisms and exponential backoff.",
        "Built real-time queue health monitoring UI showing active, completed, delayed, and failed job states.",
        "Containerized Redis cluster and worker services using Docker Compose for isolated local development."
      ],
      githubUrl: "https://github.com/rahulprakash0898/async-queue-monitoring-microservices.git"
    },
    {
      title: "Persistent Priority Queue (SARALWEB)",
      category: "API & DevOps",
      description: "Persistent disk-backed priority queue engine designed for guaranteed message ordering and crash-resilient task execution.",
      stack: ["Node.js", "Data Structures", "Disk Persistence", "Concurrency", "TypeScript"],
      bullets: [
        "Implemented robust priority queue algorithm with dual in-memory heap structures and persistent append-only logs.",
        "Ensured zero data loss on abrupt server restarts through write-ahead logging (WAL) and state rehydration.",
        "Optimized enqueue/dequeue latency to sub-millisecond speeds under heavy concurrent workloads."
      ],
      githubUrl: "https://github.com/rahulprakash0898/Persistent-Priority-Queue-SARALWEB-.git"
    },
    {
      title: "Git & GitHub Automation Workflows",
      category: "API & DevOps",
      description: "Collection of enterprise GitHub Actions CI/CD workflows, automated release scripts, and repository governance tools.",
      stack: ["GitHub Actions", "CI/CD", "Bash", "YAML", "GitOps", "Docker"],
      bullets: [
        "Created modular reusable GitHub Actions pipelines for automated linting, testing, and Docker image builds.",
        "Automated semantic versioning and changelog generation on main branch merges.",
        "Implemented automated vulnerability scanning and branch protection compliance checks."
      ],
      githubUrl: "https://github.com/rahulprakash0898/Git_and_Github.git"
    },
    {
      title: "Khoj Search & Query Engine",
      category: "API & DevOps",
      description: "Fast full-text search and indexing backend API engine with fuzzy matching and optimized query execution.",
      stack: ["Node.js", "Express.js", "Indexing Algorithms", "RESTful APIs", "Regex"],
      bullets: [
        "Developed custom indexing structures allowing rapid full-text search across large dataset documents.",
        "Implemented intelligent fuzzy search algorithms and relevance scoring for ranked query retrieval.",
        "Built efficient paginated REST endpoints with sub-10ms response times on indexed collections."
      ],
      githubUrl: "https://github.com/rahulprakash0898/Khoj.git"
    },
    {
      title: "BDI - Backend Data Integration",
      category: "API & DevOps",
      description: "Enterprise data integration pipeline facilitating ETL transformations, schema validation, and multi-source API syncing.",
      stack: ["Node.js", "Express.js", "ETL Pipelines", "Data Validation", "MongoDB"],
      bullets: [
        "Built high-throughput ETL data pipeline transforming heterogeneous input formats into standardized JSON models.",
        "Implemented strict schema validation using Joi / Zod to catch malformed payloads before database ingestion.",
        "Engineered batch processing routines with checkpointing and error isolation for uninterrupted ingestion."
      ],
      githubUrl: "https://github.com/rahulprakash0898/BDI.git"
    }
  ]
};

export const impactHighlights: ImpactHighlight[] = [
  {
    metric: "10+ Projects",
    context: "Delivered 10+ full-stack production projects using Node.js, Express, React, MongoDB, PostgreSQL, and Redis.",
    source: "Delivered 10+ full-stack projects using Node.js, Express.js, React.js, MongoDB, PostgreSQL, and Redis for production applications."
  },
  {
    metric: "100k+ Visits",
    context: "Scaled web applications serving 100,000+ user visits through REST APIs, Redis caching, and database indexing.",
    source: "Supported applications serving 100,000+ user visits through scalable REST APIs and efficient client-server communication."
  },
  {
    metric: "20-Min CI/CD",
    context: "Reduced production deployment turnaround to ~20 minutes using Docker, Nginx, AWS EC2, and GitHub Actions CI/CD.",
    source: "Reduced production deployment turnaround to approximately 20 minutes using Docker, Nginx, AWS EC2, and CI/CD."
  },
  {
    metric: "AI/LLM Integration",
    context: "Connected AI/LLM services with Node.js backend APIs and React.js interfaces for intelligent user workflows.",
    source: "Integrated AI/LLM capabilities into full-stack applications by connecting AI services with backend APIs."
  }
];
