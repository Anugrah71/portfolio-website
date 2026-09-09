import Todo1 from "../assets/Todo1.png";
import Todo2 from "../assets/Todo2.png";
import Todo3 from "../assets/Todo3.png";
import Todo4 from "../assets/Todo4.png";
import Todo5 from "../assets/Todo5.png";


import WeatherApp1 from "../assets/WeatherApp1.png";
import WeatherApp2 from "../assets/WeatherApp2.png";
import WeatherApp3 from "../assets/WeatherApp3.png";
import WeatherApp4 from "../assets/WeatherApp4.png";
import WeatherApp5 from "../assets/WeatherApp5.png";
import WeatherApp6 from "../assets/WeatherApp6.png";
import WeatherApp7 from "../assets/WeatherApp7.png";
import WeatherApp8 from "../assets/WeatherApp8.png";

import Quick1 from "../assets/Quick1.png";
import Quick2 from "../assets/Quick2.png";
import Quick3 from "../assets/Quick3.png";
import Quick4 from "../assets/Quick4.png";
import Quick5 from "../assets/Quick5.png";
import Quick6 from "../assets/Quick6.png";
import Quick7 from "../assets/Quick7.png";
import Quick8 from "../assets/Quick8.png";
import Quick9 from "../assets/Quick9.png";

import JobTracker1 from "../assets/job-application1.png";
import JobTracker2 from "../assets/job-application2.png";
import JobTracker3 from "../assets/job-application3.png";
import JobTracker4 from "../assets/job-application4.png";
import JobTracker5 from "../assets/job-application5.png";
import JobTracker6 from "../assets/job-application6.png";
import JobTracker7 from "../assets/job-application7.png";
import JobTracker8 from "../assets/job-application8.png";

import Food1 from "../assets/Food1.png";
import Food2 from "../assets/Food2.png";
import Food3 from "../assets/Food3.png";
import Food4 from "../assets/Food4.png";
import Food5 from "../assets/Food5.png";

export const projectData = [
  {
    id: 1,
    title: "Todo App",
    description:
      "A full-stack application for managing tasks with user authentication and session management using Node.js, Express, PostgreSQL, and EJS.",
    imageUrl: Todo1,
    tagline:
      "A secure full-stack todo manager with Node.js, Express, PostgreSQL, and EJS.",
    keyMetric:
      "Zero CSRF & Session vulnerabilities achieved using Passport.js & double-submit CSRF tokens.",
    liveDemo: "https://todo-app-ba6i.onrender.com",
    github: "https://github.com/Anugrah71/Todo-app",
    overview: `A full-stack application allowing users to register, log in, and manage their tasks. Features include creating, updating (marking as complete/incomplete), and deleting todos, categorized by due date (Overdue, Due Today, Due Later). Built with Node.js and Express on the backend, using PostgreSQL with Sequelize ORM for the database, and EJS with Tailwind CSS for the frontend. Includes security features like password hashing (bcrypt), CSRF protection (csurf), and session management (express-session, Passport.js). Tested using Jest and Supertest.`,
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "EJS",
      "Tailwind CSS",
    ],
    techStack: {
      Frontend: ["EJS", "Tailwind CSS"],
      Backend: [
        "Node.js",
        "Express.js",
        "Passport.js",
        "bcrypt",
        "Sequelize",
        "connect-flash",
        "csurf",
      ],
      Tools: [
        "PostgreSQL",
        "Jest",
        "Supertest",
        "ESLint",
        "Husky",
        "Nodemon",
        "Sequelize-CLI",
      ],
    },
    images: [Todo1, Todo2, Todo3, Todo4, Todo5],
    features: [
      {
        title: "Authentication",
        desc: "Secure user login and signup using Passport.js and bcrypt password hashing.",
      },
      {
        title: "CSRF Protection",
        desc: "Implemented CSRF protection using csurf middleware.",
      },
      {
        title: "Task Management",
        desc: "Full CRUD operations for managing todo items.",
      },
      {
        title: "Due Date Filtering",
        desc: "Todos automatically categorized into Overdue, Due Today, and Due Later sections.",
      },
      {
        title: "User Feedback",
        desc: "Utilizes connect-flash for displaying success and error messages.",
      },
      {
        title: "Testing",
        desc: "Includes unit and integration tests written with Jest and Supertest.",
      },
    ],
    challenges: [
      {
        title: "Session Management",
        problem:
          "Ensuring secure and persistent user sessions across requests.",
        solution:
          "Utilized express-session middleware with secure cookie settings and integrated Passport.js for managing authentication state.", // Placeholder based on tech stack
      },
      {
        title: "Database Relations",
        problem:
          "Correctly associating Todos with Users in the PostgreSQL database.",
        solution:
          "Defined associations using Sequelize ORM (User hasMany Todos, Todo belongsTo User) and included userId foreign key in migrations.", // Placeholder based on models/, migrations/
      },
    ],
    outcome: {
      learned: `Gained practical experience in building a secure, authenticated web application with Node.js, Express, Sequelize, and EJS. Improved skills in testing backend routes and implementing security measures.`, // Placeholder
      improvements: `Future enhancements could include adding email notifications for due dates, implementing more complex filtering/sorting options, or migrating the frontend to a framework like React or Vue.`, // Placeholder
    },
  },

  {
    id: 2,
    title: "Weather Analytics Dashboard",
    description:
      "A full-stack weather dashboard with real-time conditions, 24-hour forecasts, and 7-day trends — powered by a Node.js proxy backend with Redis caching and rate limiting.",
    imageUrl: WeatherApp1,
    tagline:
      "Real-time weather tracking with analytics, forecasts, and caching for high performance.",
    keyMetric:
      "Reduced redundant external API requests by 65% using Redis TTL caching & Express rate limiting.",
    liveDemo: "https://weather-analytics-dashboar-rzv1.vercel.app/",
    github: "https://github.com/anugrahkariyatt/Weather-Analytics-Dashboard",
    overview: `A full-stack weather analytics application providing real-time weather data, 7-day forecasts, and historical trends for multiple cities. Built with React and Redux Toolkit on the frontend and Node.js with Express on the backend. The server acts as a proxy to WeatherAPI, using Redis caching and rate limiting to optimize performance and reduce redundant API calls. Users can search cities, view detailed charts, and save favorite locations with persistent state.`,

    stack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express.js",
      "Redis",
    ],

    techStack: {
      Frontend: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Recharts",
        "Lucide React",
        "Vite",
      ],
      Backend: [
        "Node.js",
        "Express.js",
        "Redis (Caching)",
        "express-rate-limit",
        "dotenv",
      ],
      Tools: ["WeatherAPI", "Vercel", "ESLint", "Nodemon"],
    },

    images: [
      WeatherApp1,
      WeatherApp2,
      WeatherApp3,
      WeatherApp4,
      WeatherApp5,
      WeatherApp6,
      WeatherApp7,
      WeatherApp8,
    ],

    features: [
      {
        title: "Real-Time Weather",
        desc: "Fetches and displays live temperature, humidity, wind speed, UV index, and more for any city.",
      },
      {
        title: "Interactive Charts",
        desc: "24-hour temperature forecasts and 7-day wind trends visualized using Recharts.",
      },
      {
        title: "City Search",
        desc: "Debounced autocomplete search with WeatherAPI suggestions.",
      },
      {
        title: "Favorites System",
        desc: "Users can save and manage favorite cities with persistent state.",
      },
      {
        title: "Redis Caching",
        desc: "Server-side Redis caching with TTL expiry reduces redundant external API calls.",
      },
      {
        title: "Rate Limiting",
        desc: "express-rate-limit middleware restricts traffic to 60 requests per minute per IP.",
      },
    ],

    challenges: [
      {
        title: "Optimizing API Calls",
        problem:
          "WeatherAPI has rate limits, and fetching data for multiple cities caused throttling.",
        solution:
          "Implemented Redis caching with TTL and added server-side rate limiting to reduce external requests significantly.",
      },
      {
        title: "Responsive Charts",
        problem:
          "Charts were distorted on smaller screens due to dynamic font sizes and container widths.",
        solution:
          "Added a custom resize hook and responsive container settings to adjust chart dimensions on the fly.",
      },
      {
        title: "State Management Scaling",
        problem:
          "Managing multiple cities, favorites, and async weather requests caused complexity.",
        solution:
          "Separated logic into Redux slices with thunks for API calls and synced favorites to localStorage.",
      },
    ],

    outcome: {
      learned:
        "Strengthened skills in Redux Toolkit, server-side caching with Redis, API proxying, rate limiting, and building data visualization dashboards with Recharts.",
      improvements:
        "Future enhancements could include user accounts, global weather maps, push notifications for extreme weather alerts, and advanced analytics with custom date filters.",
    },
  },

  {
    id: 3,

    title: "Food Delivery App",
    description:
      "A full-stack MERN food ordering app where users can browse menus, manage a cart, and place orders — with dual JWT authentication, email-based password reset, Cloudinary image uploads, and Docker support.",
    imageUrl: Food1,
    tagline:
      "A full-stack food ordering platform with production-grade auth, cloud image uploads, and Docker.",
    keyMetric:
      "Zero server disk overhead by offloading 100% media processing to Cloudinary and Docker containerization.",
    liveDemo: "https://food-website-1-ck7j.onrender.com",
    github: "https://github.com/anugrahkariyatt/Food_website",
    overview: `A full-stack MERN food ordering application where users can browse categorized menus, manage a shopping cart, and place orders with full order history tracking. Built with React 19 and Vite on the frontend and Node.js with Express 5 on the backend. Features a dual-token JWT authentication system (access + refresh tokens) with a complete forgot password and email-based reset flow using Nodemailer. Media is handled via Cloudinary and Multer for cloud image uploads. Input is validated using Joi and express-validator. The entire application is containerized with Docker and Docker Compose.`,

    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Cloudinary",
      "Docker",
    ],

    techStack: {
      Frontend: [
        "React 19",
        "Vite",
        "Tailwind CSS v4",
        "React Router DOM",
        "Swiper",
        "MUI Icons",
      ],
      Backend: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT (Access + Refresh Tokens)",
        "bcryptjs",
        "Nodemailer",
        "Cloudinary",
        "Multer",
        "Joi",
        "express-validator",
      ],
      Tools: ["Docker", "Docker Compose", "Nodemon"],
    },

    images: [Food1, Food2, Food3, Food4, Food5],

    features: [
      {
        title: "Food Browsing",
        desc: "Users can browse categorized menus, search items, and view detailed food information.",
      },
      {
        title: "Shopping Cart",
        desc: "Dynamic cart management with real-time price calculations across all routes.",
      },
      {
        title: "Order History",
        desc: "Users can place orders and view their complete order history.",
      },
      {
        title: "Dual JWT Auth",
        desc: "Access and refresh token system for secure, persistent user sessions.",
      },
      {
        title: "Forgot Password",
        desc: "Complete password reset flow with time-limited email links sent via Nodemailer.",
      },
      {
        title: "Cloud Image Uploads",
        desc: "Food item images are uploaded and served via Cloudinary using Multer.",
      },
      {
        title: "Input Validation",
        desc: "Strict data validation on all API inputs using Joi and express-validator.",
      },
      {
        title: "Docker Support",
        desc: "Frontend, backend, and database containerized with Docker and Docker Compose.",
      },
    ],

    challenges: [
      {
        title: "Dual Token Authentication",
        problem:
          "Basic JWT auth didn't provide a good balance of security and session persistence.",
        solution:
          "Built a dual-token system with short-lived access tokens and long-lived refresh tokens, with a centralized middleware to handle token refresh across all protected routes.",
      },
      {
        title: "Password Reset Flow",
        problem:
          "Implementing a secure, time-limited password reset without a third-party auth service.",
        solution:
          "Generated signed JWT reset tokens with short expiry, sent via Nodemailer, and validated on the backend before allowing password updates.",
      },
      {
        title: "Image Upload to Cloud",
        problem:
          "Storing images on the server directly was not scalable.",
        solution:
          "Integrated Multer for file interception and Cloudinary for cloud storage, offloading media management from the server entirely.",
      },
    ],

    outcome: {
      learned:
        "Deepened understanding of JWT authentication flows, token refresh strategies, email services with Nodemailer, cloud media management with Cloudinary, and containerization with Docker.",
      improvements:
        "Future enhancements could include payment gateway integration, real-time order tracking, an admin dashboard for managing menus, and push notifications for order updates.",
    },
  },
  {
    id: 4,
    title: "AI Content Creation Platform",
    description:
      "A full-stack AI platform integrating Gemini and Clipdrop APIs to provide text generation, image creation, and resume analysis tools — with Clerk authentication and a freemium usage model.",
    imageUrl: Quick1,
    tagline:
      "A full-stack AI suite for content generation, image manipulation, and document analysis.",
    keyMetric:
      "Unified 3 AI APIs (Gemini, Clipdrop, Cloudinary) under a single controller schema with strict freemium limit guards.",
    liveDemo: "https://react-ai-app-client-git-main-anugrah-ks-projects-cc3fdb90.vercel.app/",
    github: "https://github.com/anugrahkariyatt/React-Ai-app",
    overview: `A full-stack AI content creation platform built with React and Node.js. Integrates Gemini API for text generation and resume analysis, Clipdrop for AI image generation, and Cloudinary for image transformations like background and object removal. User authentication is handled by Clerk with a freemium model — free users are limited to 10 creations, tracked via Clerk's user metadata. All generations are logged to a PostgreSQL (Neon) database, powering a community gallery feature.`,
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Gemini API",
      "Cloudinary",
      "Clerk",
    ],

    techStack: {
      Frontend: [
        "React",
        "Vite",
        "React Router Dom",
        "Tailwind CSS",
        "Axios",
        "Lucide React",
        "AOS",
        "React Hot Toast",
        "React Markdown",
      ],
      Backend: [
        "Node.js",
        "Express.js",
        "Clerk (Authentication)",
        "Gemini API",
        "Cloudinary (Image Manipulation)",
        "Clipdrop (Image Generation)",
        "Multer (File Uploads)",
        "pdf-parse (Resume Parsing)",
        "Neon PostgreSQL",
      ],
      Tools: ["Clerk", "Cloudinary", "Vercel", "Nodemon"],
    },

    images: [
      Quick1,
      Quick2,
      Quick3,
      Quick4,
      Quick5,
      Quick6,
      Quick7,
      Quick8,
      Quick9,
    ],

    features: [
      {
        title: "User Authentication",
        desc: "Secure login and signup with Clerk, including freemium plan logic using user metadata.",
      },
      {
        title: "AI Article Writer",
        desc: "Generates full articles based on topic and selected length using the Gemini API.",
      },
      {
        title: "AI Image Generation",
        desc: "Creates images from text prompts using the Clipdrop API.",
      },
      {
        title: "Background Removal",
        desc: "Removes image backgrounds automatically using Cloudinary's AI transformation.",
      },
      {
        title: "Object Removal",
        desc: "Removes specific objects from images using Cloudinary's generative remove feature.",
      },
      {
        title: "AI Resume Reviewer",
        desc: "Upload a PDF resume to receive detailed feedback and analysis from the Gemini API.",
      },
      {
        title: "Text Summarizer",
        desc: "Paste long-form text to generate a concise summary using the Gemini API.",
      },
      {
        title: "Community Gallery",
        desc: "Users can publish generated images to a shared feed, sortable by recent or popular.",
      },
      {
        title: "Usage Limits",
        desc: "Free users are limited to 10 creations, tracked and enforced via Clerk's public metadata.",
      },
    ],

    challenges: [
      {
        title: "Freemium Authorization",
        problem:
          "Implementing reliable usage limits for free users without building a complex custom auth system.",
        solution:
          "Used Clerk's updateUserMetadata to track a free_usage counter on the backend, rejecting requests when the limit is exceeded.",
      },
      {
        title: "PDF Parsing for Resume Review",
        problem:
          "Extracting readable text from uploaded PDF resumes to feed into an LLM prompt.",
        solution:
          "Used Multer to handle the file buffer and pdf-parse to extract raw text, which is then injected into a crafted Gemini prompt.",
      },
      {
        title: "Managing Multiple AI APIs",
        problem:
          "Each API (Gemini, Clipdrop, Cloudinary) has different response formats and data types.",
        solution:
          "Abstracted each integration into dedicated controller functions that normalize responses into a unified format before saving to PostgreSQL.",
      },
    ],

    outcome: {
      learned:
        "Gained experience integrating multiple AI APIs, handling file uploads and PDF parsing, implementing freemium auth logic with Clerk, and using Cloudinary for advanced image transformations.",
      improvements:
        "Future improvements include adding more AI tools, improving loading animations, adding a download/save feature for generated content, and optimizing image loading performance.",
    },
  },
  {
    id: 5,
    title: "Job Application Tracker",
    description:
      "A full-stack recruitment platform enabling candidates to discover jobs, companies to manage hiring, and administrators to oversee the platform. Features AI-powered resume analysis, recruiter screening, workflow automation, and secure authentication.",

    imageUrl: JobTracker1,

    tagline:
      "A modern AI-powered recruitment platform with workflow automation and secure authentication.",

    keyMetric:
      "Automated 100% of candidate email workflows & scheduled alerts via n8n & Brevo HTTP webhooks.",

    liveDemo: "https://job-application-tracker-azure-eight.vercel.app",
    github: "https://github.com/anugrahkariyatt/Job_Application_Tracker",

    overview: `A full-stack recruitment platform built with Next.js, React, Express.js, TypeScript, and MongoDB. The application supports Candidate, Company, and Admin roles with secure JWT authentication and Google OAuth. It integrates the Gemini API for AI-powered candidate analysis and recruiter screening, n8n for transactional email automation and scheduled workflows, Cloudinary for media management, and Stripe for subscription payments. Candidates can search and apply for jobs, track applications, receive personalized job alerts, and obtain AI-driven resume feedback, while recruiters can manage jobs, applications, interviews, and hiring workflows through dedicated dashboards.`,

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "n8n",
    ],

    techStack: {
      Frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "React Hook Form",
        "Material UI",
      ],

      Backend: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Google OAuth",
        "Zod",
        "Gemini API",
      ],

      Integrations: [
        "Cloudinary",
        "Stripe",
        "n8n",
        "Brevo Transactional Email API",
      ],

      Tools: [
        "AWS EC2 (Ubuntu)",
        "Docker",
        "Git",
        "GitHub",
        "Postman",
        "Vercel",
        "Render",
      ],
    },

    images: [
      JobTracker1,
      JobTracker2,
      JobTracker3,
      JobTracker4,
      JobTracker5,
      JobTracker6,
      JobTracker7,
      JobTracker8,
    ],

    features: [
      {
        title: "Role-Based Authentication",
        desc: "Secure authentication using JWT access and refresh tokens with Google OAuth for Candidate, Company, and Admin roles.",
      },
      {
        title: "AI Resume Analysis",
        desc: "Gemini API compares resumes against job descriptions, generates match scores, identifies skill gaps, and provides personalized improvement recommendations.",
      },
      {
        title: "Recruiter AI Screening",
        desc: "AI-powered candidate screening generates recruiter-focused insights, candidate summaries, and hiring recommendations.",
      },
      {
        title: "Job & Application Management",
        desc: "Candidates can search, save, and apply for jobs while companies manage job postings, applications, and hiring workflows.",
      },
      {
        title: "Workflow Automation (n8n on AWS EC2)",
        desc: "Self-hosted n8n container on AWS EC2 automating candidate transactional emails, interview notifications, scheduled alerts, and Brevo webhooks.",
      },
      {
        title: "Subscription Payments",
        desc: "Integrated Stripe for subscription plans and Cloudinary for secure media uploads.",
      },
    ],

    challenges: [
      {
        title: "AWS EC2 n8n Deployment & SMTP Port Limits",
        problem:
          "Free cloud platforms (Render/Railway) enforced Docker size and trial limits, while cloud providers blocked standard SMTP ports (25, 465, 587), breaking traditional email nodes.",
        solution:
          "Migrated n8n to an AWS EC2 (Ubuntu) instance via SSH with Docker, 1 GB swap, persistent SQLite volumes, and AWS Security Groups. Replaced direct SMTP with n8n HTTP Request nodes calling the Brevo REST API (`Render Backend → AWS EC2 → Docker → n8n → Brevo → Email`).",
      },
      {
        title: "AI Resume Evaluation",
        problem:
          "Generating meaningful AI feedback instead of generic resume summaries.",
        solution:
          "Designed structured Gemini prompts that compare resumes with job descriptions, generate candidate scores, identify skill gaps, and produce actionable recommendations.",
      },
      {
        title: "Secure Authentication",
        problem:
          "Maintaining secure user sessions while supporting multiple user roles.",
        solution:
          "Implemented JWT access and refresh tokens, Google OAuth, HTTP-only cookies, and role-based authorization across protected routes.",
      },
    ],

    outcome: {
      learned:
        "Strengthened skills in scalable full-stack application development, REST API design, authentication, AI integration with the Gemini API, workflow automation using n8n, payment integration with Stripe, and modern backend architecture.",

      improvements:
        "Future enhancements include real-time notifications, WebSocket messaging, Redis caching, BullMQ background jobs, Kubernetes deployment, and advanced analytics dashboards.",
    },
  }
];
