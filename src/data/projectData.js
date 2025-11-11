// src/data/projectsData.js
 import Todo1 from "../assets/Todo1.png"
 import Todo2 from "../assets/Todo2.png"
 import Todo3 from "../assets/Todo3.png"
 import Todo4 from "../assets/Todo4.png"
 import Todo5 from "../assets/Todo5.png"
 import Todo6 from "../assets/Todo6.png"



export const projectData = [
  {
    id: 1,
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
    images:[Todo1,Todo2,Todo3,Todo4,Todo5,Todo6],
    features: [
      {
        icon: "🔐",
        title: "Authentication",
        desc: "Secure user login and signup using Passport.js and bcrypt password hashing.",
      },
      {
        icon: "🛡️",
        title: "CSRF Protection",
        desc: "Implemented CSRF protection using csurf middleware.",
      },
      {
        icon: "✅",
        title: "Task Management",
        desc: "Full CRUD operations for managing todo items.",
      },
      {
        icon: "📅",
        title: "Due Date Filtering",
        desc: "Todos automatically categorized into Overdue, Due Today, and Due Later sections.",
      },
      {
        icon: "💬",
        title: "User Feedback",
        desc: "Utilizes connect-flash for displaying success and error messages.",
      },
      {
        icon: "🧪",
        title: "Testing",
        desc: "Includes unit and integration tests written with Jest and Supertest.",
      },
    ],
    learningJourney: `Developed this application to solidify understanding of full-stack development principles, focusing on Node.js/Express, database integration with Sequelize, user authentication workflows with Passport.js, and implementing security best practices like CSRF protection.`, // Placeholder based on features
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
    screenshots: [
      {
        src: "https://placehold.co/800x600/png?text=Todo+App+Screenshot", // Placeholder image
        caption: "Main Todo list interface showing task categories.",
      },
    ],
    outcome: {
      learned: `Gained practical experience in building a secure, authenticated web application with Node.js, Express, Sequelize, and EJS. Improved skills in testing backend routes and implementing security measures.`, // Placeholder
      improvements: `Future enhancements could include adding email notifications for due dates, implementing more complex filtering/sorting options, or migrating the frontend to a framework like React or Vue.`, // Placeholder
    },
  },
  // {
  //   id: 2,
  //   title: "Finance Tracker",
  //   description:
  //     "A full-stack MERN application for tracking personal income and expenses with user authentication and data visualization.",
  //   imageUrl: "../src/assets/img4.png",
  //   tagline:
  //     "A secure personal finance tracker built with React, Node.js, Express, and MongoDB.",
  //   liveDemo: "#",
  //   github: "#",
  //   overview: `A full-stack application enabling users to register, log in, and manage their financial transactions (income and expenses). Features include adding, viewing, filtering (by type and category), and deleting transactions. It calculates and displays total income, total expenses, and the current balance. Includes data visualization with a pie chart showing the income vs. expense ratio. Built with Node.js, Express, and MongoDB on the backend, using Mongoose ODM. The frontend is built with React, using Axios for API calls, Bootstrap for styling, and Chart.js for visualization. Authentication is handled using JWT and bcrypt for password hashing.`, // Derived from multiple files
  //   stack: [
  //     "MongoDB",
  //     "Express.js",
  //     "React",
  //     "Node.js",
  //     "Chart.js",
  //     "Bootstrap",
  //   ],
  //   techStack: {
  //     Frontend: [
  //       "React",
  //       "React Router",
  //       "Axios",
  //       "Bootstrap",
  //       "Chart.js",
  //       "React Chartjs 2",
  //     ],
  //     Backend: [
  //       "Node.js",
  //       "Express.js",
  //       "Mongoose",
  //       "JWT",
  //       "bcryptjs",
  //       "cors",
  //       "dotenv",
  //     ],
  //     Tools: ["MongoDB", "Nodemon"],
  //   },
  //   features: [
  //     {
  //       icon: "🔐",
  //       title: "Authentication",
  //       desc: "Secure user registration and login using JWT and bcryptjs password hashing.",
  //     },
  //     {
  //       icon: "💸",
  //       title: "Transaction Management",
  //       desc: "Full CRUD operations for income and expense transactions.",
  //     },
  //     {
  //       icon: "📊",
  //       title: "Dashboard Summary",
  //       desc: "Displays total income, total expenses, and current balance.",
  //     },
  //     {
  //       icon: "📈",
  //       title: "Data Visualization",
  //       desc: "Pie chart showing the distribution of income vs. expenses using Chart.js.",
  //     },
  //     {
  //       icon: "🔍",
  //       title: "Filtering",
  //       desc: "Filter transactions by type (income/expense) and category.",
  //     },
  //   ],
  //   learningJourney: `This project focuses on building a MERN stack application with JWT authentication and data visualization. Key learning points include creating RESTful APIs with Express, interacting with MongoDB using Mongoose, managing user state with React, and integrating a charting library.`, // Placeholder based on features
  //   challenges: [
  //     {
  //       title: "JWT Authentication Flow",
  //       problem:
  //         "Implementing secure token generation, verification, and passing tokens between frontend and backend.",
  //       solution:
  //         "Used JWT for token creation on login/register, Bearer tokens in Authorization headers for protected routes, and middleware on the backend to verify tokens.", // Placeholder based on server/middleware/auth.js, client/src/utils/api.js
  //     },
  //     {
  //       title: "State Management in React",
  //       problem:
  //         "Efficiently managing and updating the list of transactions on the dashboard after additions or deletions.",
  //       solution:
  //         "Utilized React's useState hook to manage the transactions array and passed callback functions (onAdd, onDelete) down to child components to update the state in the parent Dashboard component.", // Placeholder based on client/src/pages/Dashboard.js
  //     },
  //   ],
  //   screenshots: [
  //     {
  //       src: "https://placehold.co/800x600/png?text=Finance+Dashboard", // Placeholder image
  //       caption: "Dashboard view showing summary and transaction list.",
  //     },
  //     {
  //       src: "https://placehold.co/800x600/png?text=Income+vs+Expense+Chart", // Placeholder image
  //       caption: "Pie chart visualizing income and expenses.",
  //     },
  //   ],
  //   outcome: {
  //     learned: `Strengthened MERN stack development skills, particularly in API creation, database modeling with Mongoose, JWT authentication, and integrating React with backend services. Gained experience with Chart.js for data visualization.`, // Placeholder
  //     improvements: `Future improvements could involve adding more detailed reporting (e.g., spending by category over time), implementing budget tracking features, or adding data export functionality.`, // Placeholder
  //   },
  // },
  {
    id: 3,
    title: "Food Website",
    description:
      "A full-stack MERN application for browsing food items, adding them to a cart, and placing orders, with user authentication.",
    imageUrl: "../src/assets/Food2.png",
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
    features: [
      {
        icon: "🔐",
        title: "Authentication",
        desc: "Secure user signup and login using JWT and bcryptjs password hashing, with input validation.",
      },
      {
        icon: "🍔",
        title: "Food Browsing & Search",
        desc: "Displays food items fetched from the database, categorized, and searchable.",
      },
      {
        icon: "🛒",
        title: "Shopping Cart",
        desc: "Allows users to add items with quantity/size options to a cart managed with Context API.",
      },
      {
        icon: "🛍️",
        title: "Order Placement",
        desc: "Users can checkout their cart, saving the order details linked to their user ID.",
      },
      {
        icon: "📜",
        title: "Order History",
        desc: "Users can view their past orders.",
      },
    ],
    learningJourney: `This project involved building a complete MERN stack application, focusing on integrating a React frontend with a Node/Express backend via REST APIs. Key aspects included database modeling with Mongoose, implementing JWT authentication, managing application state with React Context API, and handling asynchronous data fetching.`, // Placeholder based on features
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
    screenshots: [
      {
        src: "https://placehold.co/800x600/png?text=Food+Home+Page",
        caption: "Homepage displaying food categories and items.",
      },
      {
        src: "https://placehold.co/800x600/png?text=Shopping+Cart",
        caption: "Shopping cart view with selected items.",
      },
    ],
    outcome: {
      learned: `Gained experience in building a functional e-commerce type application with the MERN stack, focusing on user authentication, state management, and API integration. Practiced using Mongoose for database interactions.`, // Placeholder
      improvements: `Could add features like payment gateway integration, user profile management, admin panel for managing food items, or real-time order status updates.`, // Placeholder
    },
  },
  {
    id: 4,
    title: "React Weather App",
    description:
      "A React application that fetches and displays current weather data, forecasts, and air quality information based on user search.",
    imageUrl: "../src/assets/Weather3.png",
    tagline: "A weather dashboard built with React and the WeatherAPI.",
    liveDemo: "https://react-weather-app-five-iota.vercel.app/",
    github: "https://github.com/Anugrah71/React-Weather-App",
    overview: `This application allows users to search for a city and view detailed weather information. It fetches data from the WeatherAPI, including current conditions (temperature, humidity, wind speed, pressure, UV index, feels like temp), air quality index (AQI), and a multi-day forecast. It displays this information in a user-friendly interface, including icons for weather conditions and a line chart showing temperature trends over the next 24 hours. The app is built using React with Vite, utilizes Axios for API calls, and Chart.js for the temperature forecast chart.`, // Derived from README.md, App.jsx, Home.jsx, Weatherapi.js
    stack: ["React", "Axios", "Chart.js"],
    techStack: {
      Frontend: ["React", "Axios", "Chart.js", "React Chartjs 2", "Vite"],
      Tools: ["WeatherAPI"],
    },
    features: [
      {
        icon: "🔍",
        title: "City Search",
        desc: "Search for weather information by city name.",
      },
      {
        icon: "☀️",
        title: "Current Weather",
        desc: "Displays current temperature, condition, humidity, wind speed, pressure, feels like temp, and UV index.",
      },
      {
        icon: "💨",
        title: "Air Quality Index",
        desc: "Shows the current Air Quality Index (AQI) data.",
      },
      {
        icon: "📅",
        title: "Weather Forecast",
        desc: "Provides a multi-day weather forecast.",
      },
      {
        icon: "📈",
        title: "Temperature Chart",
        desc: "Visualizes the temperature forecast for the next 24 hours using Chart.js.",
      },
    ],
    learningJourney: `Developed this application to practice fetching data from external APIs in React, managing asynchronous operations, and displaying data dynamically. Focused on using Axios for API calls and integrating Chart.js for data visualization.`, // Placeholder based on features
    challenges: [
      {
        title: "API Integration",
        problem:
          "Handling asynchronous API calls to WeatherAPI and managing loading/error states.",
        solution:
          "Used Axios for making GET requests to the API endpoints and managed component state (e.g., weatherData, loading, error) using React's useState and useEffect hooks.", // Placeholder based on Home.jsx, Weatherapi.js
      },
      {
        title: "Data Structuring for Chart",
        problem:
          "Extracting and formatting the hourly forecast data correctly for use with Chart.js.",
        solution:
          "Processed the forecast data received from the API to create arrays for labels (time) and data points (temperature) suitable for the Chart.js line chart component.", // Placeholder based on TemperatureChart.jsx, Home.jsx
      },
    ],
    screenshots: [
      {
        src: "https://placehold.co/800x600/png?text=Weather+App+Main", // Placeholder image
        caption: "Main interface showing current weather and forecast.",
      },
      {
        src: "https://placehold.co/800x600/png?text=Temperature+Chart", // Placeholder image
        caption: "Hourly temperature forecast chart.",
      },
    ],
    outcome: {
      learned: `Improved skills in fetching and handling data from third-party APIs in a React application. Gained experience with data visualization using Chart.js and managing component state effectively.`, // Placeholder
      improvements: `Could enhance the app by adding geolocation to get weather for the user's current location, allowing users to save favorite locations, or adding more detailed charts (e.g., precipitation probability).`, // Placeholder
    },
  },
];
