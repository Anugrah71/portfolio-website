// src/data/projectsData.js
export const projectData = [
  {
    id: 1,
    title: "The Gaffer",
    description:
      "A football tactics builder and tester built with the MERN stack.",
    imageUrl: "../src/assets/img1.png",
    tagline:
      "A tactical football builder app built with MERN and drag-and-drop support.",
    liveDemo: "#",
    github: "#",
    overview: `A full-featured tactics simulator built with MERN...`,
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    techStack: {
      Frontend: ["React", "Tailwind CSS", "Dnd Kit", "Tailwind CSS"],
      Backend: ["Node.js", "Express.js", "JWT", "bcrypt"],
      Tools: ["MongoDB", "Postman", "Vite"],
    },
    features: [
      { icon: "⚽", title: "Drag & Drop", desc: "Built with Dnd Kit..." },
      { icon: "🧠", title: "AI Assistant", desc: "OpenAI API integration..." },
    ],
    learningJourney: `This was my first serious MERN app...`,
    challenges: [
      {
        title: "Canvas Rendering",
        problem: "Lag when moving multiple elements...",
        solution: "Optimized with React memoization...",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
        caption: "Custom tactics builder UI",
      },
    ],
    outcome: {
      learned: `Improved my React performance handling.`,
      improvements: `Next time I’d implement player analytics with charts.`,
    },
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A full-stack MERN e-commerce application with authentication, payment processing, and modern UI.",
    imageUrl: "../src/assets/img2.png",
    tagline:
      "A scalable e-commerce platform built with MERN and Stripe integration.",
    liveDemo: "#",
    github: "#",
    overview: `A platform where users can browse, purchase, and manage products securely.`,
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    techStack: {
      Frontend: ["React", "Tailwind CSS", "Redux Toolkit", "Vite"],
      Backend: ["Node.js", "Express.js", "JWT", "bcrypt"],
      Tools: ["MongoDB", "Postman", "Stripe"],
    },
    features: [
      { icon: "💳", title: "Payments", desc: "Stripe integration." },
      { icon: "🛒", title: "Cart", desc: "Persistent shopping cart." },
    ],
    learningJourney: `Learned authentication and secure API integration.`,
    challenges: [
      {
        title: "CORS Policy",
        problem: "Blocked requests from frontend.",
        solution: "Configured Express CORS middleware correctly.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        caption: "Admin dashboard for product management.",
      },
    ],
    outcome: {
      learned: `Strengthened full-stack fundamentals.`,
      improvements: `Add better testing and CI/CD.`,
    },
  },
];
