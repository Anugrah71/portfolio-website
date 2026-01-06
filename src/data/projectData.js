// src/data/projectsData.js
import Todo1 from "../assets/Todo1.png";
import Todo2 from "../assets/Todo2.png";
import Todo3 from "../assets/Todo3.png";
import Todo4 from "../assets/Todo4.png";
import Todo5 from "../assets/Todo5.png";
import Todo6 from "../assets/Todo6.png";

import Food1 from "../assets/Food1.png";
import Food2 from "../assets/Food2.png";
import Food3 from "../assets/Food3.png";
import Food4 from "../assets/Food4.png";
import Food5 from "../assets/Food5.png";
import Food6 from "../assets/Food6.png";

import Quick1 from "../assets/Quick1.png";
import Quick2 from "../assets/Quick2.png";
import Quick3 from "../assets/Quick3.png";
import Quick4 from "../assets/Quick4.png";
import Quick5 from "../assets/Quick5.png";
import Quick6 from "../assets/Quick6.png";
import Quick7 from "../assets/Quick7.png";
import Quick8 from "../assets/Quick8.png";
import Quick9 from "../assets/Quick9.png";

// import Weather1 from "../assets/Weather1.png";
// import Weather2 from "../assets/Weather2.png";
// import Weather3 from "../assets/Weather3.png";
// import Weather4 from "../assets/Weather4.png";
// import Weather5 from "../assets/Weather5.png";
// import Weather6 from "../assets/Weather6.png";

import WeatherApp1 from "../assets/WeatherApp1.png";
import WeatherApp2 from "../assets/WeatherApp2.png";
import WeatherApp3 from "../assets/WeatherApp3.png";
import WeatherApp4 from "../assets/WeatherApp4.png";
import WeatherApp5 from "../assets/WeatherApp5.png";
import WeatherApp6 from "../assets/WeatherApp6.png";
import WeatherApp7 from "../assets/WeatherApp7.png";
import WeatherApp8 from "../assets/WeatherApp8.png";

export const projectData = [
  {
    id: 1,
    title: "Weather Analytics Dashboard",
    description:
      "A full-stack weather monitoring dashboard that displays real-time conditions, forecasts, and historical analytics using React, Node.js, Express, and WeatherAPI.",
    imageUrl: WeatherApp1,
    tagline:
      "Real-time weather tracking with analytics, forecasts, and caching for high performance.",
    liveDemo: "https://weather-analytics-dashboar-rzv1.vercel.app/",
    github: "https://github.com/Anugrah71/Weather-Analytics-Dashboard",
    overview: `A full-stack weather analytics application providing real-time weather data, 7-day forecasts, and historical trends for multiple cities. Built with React (Vite + Redux Toolkit) on the frontend and Node.js with Express on the backend. The server acts as a proxy to WeatherAPI, with caching and rate limiting to optimize performance and reduce API usage. Users can search cities, view detailed charts, and save favorite locations with persistent state (localStorage).`,

    stack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express.js",
      "WeatherAPI",
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
        "cors",
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
        desc: "Fetches and displays live temperature, humidity, wind speed, UV index, and more.",
      },
      {
        title: "Advanced Charts",
        desc: "Hourly forecast, temperature trends, and wind patterns using Recharts.",
      },
      {
        title: "City Search",
        desc: "Debounced autocomplete search with WeatherAPI suggestions.",
      },
      {
        title: "Favorites System",
        desc: "Users can save cities locally; data persists through localStorage.",
      },
      {
        title: "Server Caching",
        desc: "In-memory caching layer reduces WeatherAPI calls and improves speed.",
      },
      {
        title: "Rate Limiting",
        desc: "Protects the backend from abuse using express-rate-limit middleware.",
      },
    ],

    challenges: [
      {
        title: "Optimizing API Calls",
        problem:
          "WeatherAPI has rate limits, and calling it repeatedly for multiple cities caused throttling.",
        solution:
          "Implemented in-memory caching with TTL and added server-side rate limiting to reduce external requests.",
      },
      {
        title: "Handling Responsive Charts",
        problem:
          "Charts were distorted on smaller screens due to dynamic font sizes and container widths.",
        solution:
          "Added a custom resize hook and responsive container settings to adjust chart dimensions on-the-fly.",
      },
      {
        title: "State Management Scaling",
        problem:
          "Managing multiple cities, favorites, and async weather requests caused complexity.",
        solution:
          "Separated logic into Redux slices, added thunks for API calls, and used localStorage syncing.",
      },
    ],

    outcome: {
      learned:
        "Strengthened skills in Redux Toolkit, building analytics dashboards, server-side caching, API proxying, and chart visualizations. Learned to optimize API usage with caching and rate limiting.",
      improvements:
        "Future enhancements could include user accounts, global maps with weather layers, push notifications for extreme weather alerts, and a more advanced analytics page with custom date filters.",
    },
  },

  {
    id: 2,
    title: "AI Content Creation Platform",
    description:
      "A full-stack MERN application that leverages multiple AI APIs to help users create articles, generate images, and analyze documents.",
    imageUrl: Quick1,
    tagline:
      "A full-stack AI suite for content generation, image manipulation, and document analysis.",
    liveDemo: null,
    github: "https://github.com/anugrah71/react-ai-app",
    overview: `This AI-powered content creation platform is a full-stack MERN application that leverages artificial intelligence to help users create various types of content. The platform provides a suite of AI tools for content generation (articles, blog titles), image manipulation (AI image generation, background removal, object removal), and document analysis (resume reviewer). It features a secure user authentication system using Clerk, with a free plan limited by usage counts stored in user metadata. The backend is built with Node.js/Express and communicates with multiple APIs (OpenAI/Gemini, Clipdrop, Cloudinary) to perform AI tasks, storing user creations in a PostgreSQL database (Neon). The frontend is a responsive React application built with Vite, using React Router for navigation and Axios for API communication.`,
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Cloudinary",
      "OpenAI",
    ],
    techStack: {
      Frontend: [
        "React",
        "Vite",
        "React Router Dom",
        "TailwindCSS",
        "Axios",
        "Lucide React",
        "AOS (Animate On Scroll)",
        "React Hot Toast",
        "React Markdown",
      ],
      Backend: [
        "Node.js",
        "Express.js",
        "Clerk (Authentication)",
        "OpenAI (Gemini API)",
        "Cloudinary (Image Manipulation/Storage)",
        "Clipdrop (Image Generation)",
        "Multer (File Uploads)",
        "pdf-parse (Resume Parsing)",
        "Neon (PostgreSQL)",
      ],
      Tools: [
        "Clerk",
        "Cloudinary",
        "OpenAI API",
        "Vercel (Deployment)",
        "Nodemon",
      ],
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
        desc: "Secure login/signup and user management handled by Clerk, including premium/free plan logic.",
      },
      {
        title: "AI Article Writer",
        desc: "Generates full articles based on a topic and selected length (Short, Medium, Long) using the Gemini API.",
      },
      {
        title: "AI Image Generation",
        desc: "Creates images from text prompts and style selections using the Clipdrop API.",
      },
      {
        title: "Image Background Removal",
        desc: "Upload an image to automatically remove the background using Cloudinary's AI transformation.",
      },
      {
        title: "Image Object Removal",
        desc: "Upload an image and specify an object to remove, processed by Cloudinary's generative remove feature.",
      },
      {
        title: "AI Resume Reviewer",
        desc: "Upload a PDF resume to receive a detailed analysis and constructive feedback from the Gemini API.",
      },
      {
        title: "Text Summarizer",
        desc: "Pastes long-form text to generate a concise summary using the Gemini API.",
      },
      {
        title: "Community Page",
        desc: "Users can publish their generated images to a community feed, with features to sort by 'recent' or 'popular' (most liked).",
      },
      {
        title: "Usage & Plan Limits",
        desc: "Free users are limited to 10 creations; this is tracked via Clerk's public metadata.",
      },
    ],
    outcome: {
      learned:
        "Gained advanced skills in React hooks, API integration (RESTful APIs, auth), and full-stack development communication. Practiced secure user management with Clerk, media management with Cloudinary, and integrating multiple third-party AI APIs (OpenAI, Cloudinary).",
      improvements:
        "The `README.md` suggests future enhancements like adding more AI tools (summarizer, filters), improving the UI/animations, adding a 'Save' or 'Download' feature for content, and optimizing image loading.",
    },
  },
  // {
  //   id: 3,
  //   title: "React Weather App",
  //   description:
  //     "A React application that fetches and displays current weather data, forecasts, and air quality information based on user search.",
  //   imageUrl: Weather1,
  //   tagline: "A weather dashboard built with React and the WeatherAPI.",
  //   liveDemo: "https://react-weather-app-five-iota.vercel.app/",
  //   github: "https://github.com/Anugrah71/React-Weather-App",
  //   overview: `This application allows users to search for a city and view detailed weather information. It fetches data from the WeatherAPI, including current conditions (temperature, humidity, wind speed, pressure, UV index, feels like temp), air quality index (AQI), and a multi-day forecast. It displays this information in a user-friendly interface, including icons for weather conditions and a line chart showing temperature trends over the next 24 hours. The app is built using React with Vite, utilizes Axios for API calls, and Chart.js for the temperature forecast chart.`, // Derived from README.md, App.jsx, Home.jsx, Weatherapi.js
  //   stack: ["React", "Axios", "Chart.js"],
  //   techStack: {
  //     Frontend: ["React", "Axios", "Chart.js", "React Chartjs 2", "Vite"],
  //     Tools: ["WeatherAPI"],
  //   },
  //   images: [Weather1, Weather2, Weather3, Weather4, Weather5, Weather6],

  //   features: [
  //     {
  //       title: "City Search",
  //       desc: "Search for weather information by city name.",
  //     },
  //     {
  //       title: "Current Weather",
  //       desc: "Displays current temperature, condition, humidity, wind speed, pressure, feels like temp, and UV index.",
  //     },
  //     {
  //       title: "Air Quality Index",
  //       desc: "Shows the current Air Quality Index (AQI) data.",
  //     },
  //     {
  //       title: "Weather Forecast",
  //       desc: "Provides a multi-day weather forecast.",
  //     },
  //     {
  //       title: "Temperature Chart",
  //       desc: "Visualizes the temperature forecast for the next 24 hours using Chart.js.",
  //     },
  //   ],
  //   challenges: [
  //     {
  //       title: "API Integration",
  //       problem:
  //         "Handling asynchronous API calls to WeatherAPI and managing loading/error states.",
  //       solution:
  //         "Used Axios for making GET requests to the API endpoints and managed component state (e.g., weatherData, loading, error) using React's useState and useEffect hooks.", // Placeholder based on Home.jsx, Weatherapi.js
  //     },
  //     {
  //       title: "Data Structuring for Chart",
  //       problem:
  //         "Extracting and formatting the hourly forecast data correctly for use with Chart.js.",
  //       solution:
  //         "Processed the forecast data received from the API to create arrays for labels (time) and data points (temperature) suitable for the Chart.js line chart component.", // Placeholder based on TemperatureChart.jsx, Home.jsx
  //     },
  //   ],
  //   outcome: {
  //     learned: `Improved skills in fetching and handling data from third-party APIs in a React application. Gained experience with data visualization using Chart.js and managing component state effectively.`, // Placeholder
  //     improvements: `Could enhance the app by adding geolocation to get weather for the user's current location, allowing users to save favorite locations, or adding more detailed charts (e.g., precipitation probability).`, // Placeholder
  //   },
  // },
  {
    id: 3,
    title: "Food Website",
    description:
      "A full-stack MERN application for browsing food items, adding them to a cart, and placing orders, with user authentication.",
    imageUrl: Food1,
    tagline:
      "A food ordering platform built with React, Node.js, Express, and MongoDB.",
    liveDemo: "https://food-website-1-ck7j.onrender.com",
    github: "https://github.com/Anugrah71/Food_website",
    overview: `A MERN stack application where users can sign up, log in, browse food items categorized and displayed with details (name, image, description, options, price), search for items, add selected items (with quantity and size options) to a shopping cart, view the cart, and place orders. User authentication is handled using JWT and bcrypt for password hashing. The backend fetches food items and categories from a MongoDB database and provides APIs for user management, data retrieval, and order placement. The frontend uses React with React Router for navigation and Context API for managing the shopping cart state. Styling is done using Bootstrap and custom CSS.`, // Derived from README.md and code structure
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Bootstrap"],
    techStack: {
      Frontend: ["React", "React Router", "Bootstrap", "Context API"],
      Backend: [
        "Node.js",
        "Express.js",
        "Mongoose",
        "JWT",
        "bcryptjs",
        "Express Validator",
      ],
      Tools: ["MongoDB", "Nodemon"],
    },
    images: [Food1, Food2, Food3, Food4, Food5, Food6],

    features: [
      {
        title: "Authentication",
        desc: "Secure user signup and login using JWT and bcryptjs password hashing, with input validation.",
      },
      {
        title: "Food Browsing & Search",
        desc: "Displays food items fetched from the database, categorized, and searchable.",
      },
      {
        title: "Shopping Cart",
        desc: "Allows users to add items with quantity/size options to a cart managed with Context API.",
      },
      {
        title: "Order Placement",
        desc: "Users can checkout their cart, saving the order details linked to their user ID.",
      },
      {
        title: "Order History",
        desc: "Users can view their past orders.",
      },
    ],
    challenges: [
      {
        title: "Context API for Cart",
        problem:
          "Managing the global state of the shopping cart across different components.",
        solution:
          "Implemented React's Context API with a reducer function (ContextReducer.js) to handle adding, removing, and updating items in the cart state.", // Placeholder based on frontend/src/context/ContextReducer.js
      },
      {
        title: "Backend Data Fetching",
        problem:
          "Efficiently fetching and sending categorized food data from MongoDB to the frontend.",
        solution:
          "Created backend routes (DisplayData.js) using Mongoose to query two collections (food_items, foodCategory) and send them as a combined response for the frontend to render.", // Placeholder based on backend/db.js, backend/Routes/DisplayData.js
      },
    ],
    outcome: {
      learned: `Gained experience in building a functional e-commerce type application with the MERN stack, focusing on user authentication, state management, and API integration. Practiced using Mongoose for database interactions.`, // Placeholder
      improvements: `Could add features like payment gateway integration, user profile management, admin panel for managing food items, or real-time order status updates.`, // Placeholder
    },
  },

  {
    id: 4,
    title: "Todo App",
    description:
      "A full-stack application for managing tasks with user authentication and session management using Node.js, Express, PostgreSQL, and EJS.",
    imageUrl: Todo1,
    tagline:
      "A secure full-stack todo manager with Node.js, Express, PostgreSQL, and EJS.",
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
    images: [Todo1, Todo2, Todo3, Todo4, Todo5, Todo6],
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
];
