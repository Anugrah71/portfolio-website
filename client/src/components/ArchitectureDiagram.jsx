import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Database, Cpu, Globe, Shield, ArrowRight, Layers, Box, Zap, Workflow } from "lucide-react";

const architectureDiagrams = {
  // Project ID 5: Job Application Tracker
  5: {
    title: "AI Recruitment & Workflow Automation Architecture",
    description: "Multi-tier micro-service style architecture powered by Next.js, Express API gateway, MongoDB, Gemini AI screening, and n8n webhook automation.",
    layers: [
      {
        name: "Client Layer",
        icon: Globe,
        color: "bg-blue-500",
        nodes: [
          { label: "Next.js App Router", detail: "SSR / CSR with React 19 & Redux Toolkit" },
          { label: "Role Views", detail: "Candidate, Company, Admin Dashboards" }
        ]
      },
      {
        name: "API & Auth Layer",
        icon: Shield,
        color: "bg-purple-500",
        nodes: [
          { label: "Express API Gateway", detail: "REST Endpoints with Zod schema validation" },
          { label: "Dual Auth Engine", detail: "JWT Access + Refresh Tokens & Google OAuth" }
        ]
      },
      {
        name: "AI & Automation Layer",
        icon: Cpu,
        color: "bg-amber-500",
        nodes: [
          { label: "Gemini 1.5 Pro API", detail: "Resume Scoring & Recruiter AI Screening" },
          { label: "n8n Workflow Engine", detail: "Scheduled Job Alerts & Brevo Email Triggers" }
        ]
      },
      {
        name: "Data & Storage Layer",
        icon: Database,
        color: "bg-emerald-500",
        nodes: [
          { label: "MongoDB Atlas", detail: "Multi-tenant Schemas & Index Optimization" },
          { label: "Cloudinary CDN", detail: "Resume PDF & Media Cloud Processing" }
        ]
      }
    ],
    connections: [
      "Client Requests ➔ Express API Gateway",
      "Gateway ➔ Zod Validation & JWT Middleware",
      "Protected Routes ➔ Gemini API (Resume Match) & MongoDB Atlas",
      "Async Events ➔ n8n Webhook Engine ➔ Brevo Transactional Email"
    ]
  },

  // Project ID 3: Food Delivery App
  3: {
    title: "Containerized MERN & Dual Auth Architecture",
    description: "Production Docker Compose container setup separating client, Express server, and database with Cloudinary offloading.",
    layers: [
      {
        name: "Frontend Container",
        icon: Globe,
        color: "bg-orange-500",
        nodes: [
          { label: "React 19 + Vite", detail: "Tailwind v4 UI & Dynamic Cart State" },
          { label: "Axios Interceptors", detail: "Auto Token Refresh on 401 Unauthorized" }
        ]
      },
      {
        name: "Backend Container",
        icon: Server,
        color: "bg-indigo-500",
        nodes: [
          { label: "Node.js / Express 5", detail: "Dual Token Rotation & Password Reset Engine" },
          { label: "Multer Storage", detail: "Buffer Interception for Cloud Processing" }
        ]
      },
      {
        name: "External Services",
        icon: Zap,
        color: "bg-pink-500",
        nodes: [
          { label: "Cloudinary Cloud API", detail: "100% Media Processing Offloaded" },
          { label: "Nodemailer SMTP", detail: "Signed Password Reset Email Verification" }
        ]
      },
      {
        name: "Database Container",
        icon: Database,
        color: "bg-emerald-500",
        nodes: [
          { label: "MongoDB Container", detail: "Persistent Data Volume & Mongoose Schemas" }
        ]
      }
    ],
    connections: [
      "React App ➔ Dockerized Express Server",
      "Auth Router ➔ Dual Token Middleware (Short-lived Access + Long-lived Refresh)",
      "File Upload ➔ Multer Middleware ➔ Cloudinary CDN Storage",
      "DB Queries ➔ Docker Network ➔ MongoDB Container Volume"
    ]
  },

  // Project ID 2: Weather Analytics Dashboard
  2: {
    title: "High-Performance API Proxy with Redis Caching",
    description: "Server-side proxy pattern with in-memory Redis caching with TTL expiry to dramatically optimize rate limits and latency.",
    layers: [
      {
        name: "Frontend Dashboard",
        icon: Globe,
        color: "bg-cyan-500",
        nodes: [
          { label: "React + Redux Toolkit", detail: "Debounced City Search & Recharts Analytics" },
          { label: "Persistent State", detail: "Local Favorites & Weather Preference Sync" }
        ]
      },
      {
        name: "Proxy Server Layer",
        icon: Server,
        color: "bg-blue-600",
        nodes: [
          { label: "Express API Proxy", detail: "Hides API Keys & Standardizes Payloads" },
          { label: "Rate Limiter", detail: "express-rate-limit (60 reqs/min per IP)" }
        ]
      },
      {
        name: "Cache Engine Layer",
        icon: Zap,
        color: "bg-red-500",
        nodes: [
          { label: "Redis In-Memory Store", detail: "TTL Expiry Strategy for Rapid Responses" }
        ]
      },
      {
        name: "External Weather API",
        icon: Workflow,
        color: "bg-sky-500",
        nodes: [
          { label: "WeatherAPI Provider", detail: "Real-time & 7-day Forecast Data Source" }
        ]
      }
    ],
    connections: [
      "User Search ➔ Express Proxy Endpoint",
      "Proxy Check ➔ Redis Cache HIT ? Return Instant (5ms) : Cache MISS",
      "Cache MISS ➔ Fetch WeatherAPI ➔ Store in Redis (10m TTL) ➔ Return Client",
      "Traffic Protection ➔ Express Rate Limiter IP Guard"
    ]
  },

  // Project ID 4: AI Content Creation Platform
  4: {
    title: "Multi-AI Service Controller & Freemium Architecture",
    description: "Centralized backend unifying Gemini API, Clipdrop, and Cloudinary with Clerk user metadata usage enforcement.",
    layers: [
      {
        name: "Client Interface",
        icon: Globe,
        color: "bg-purple-600",
        nodes: [
          { label: "React + Vite SPA", detail: "Markdown Renderers & Toast Feedbacks" },
          { label: "Clerk Auth Hook", detail: "Client-side Freemium Counter UI" }
        ]
      },
      {
        name: "Backend Gateway",
        icon: Server,
        color: "bg-violet-600",
        nodes: [
          { label: "Express AI Controller", detail: "Unified Request Routing & Parsing" },
          { label: "Usage Guard", detail: "Clerk Metadata Limit Guard (Max 10 Free)" }
        ]
      },
      {
        name: "AI Services Tier",
        icon: Cpu,
        color: "bg-amber-600",
        nodes: [
          { label: "Gemini 1.5 Flash", detail: "Text Generation & Resume PDF Parsing" },
          { label: "Clipdrop API", detail: "Text-to-Image Generation" },
          { label: "Cloudinary AI", detail: "Generative Background & Object Removal" }
        ]
      },
      {
        name: "PostgreSQL Database",
        icon: Database,
        color: "bg-emerald-600",
        nodes: [
          { label: "Neon PostgreSQL", detail: "Community Gallery Feed & Audit Logs" }
        ]
      }
    ],
    connections: [
      "Client Request ➔ Clerk Auth Token Verification",
      "Backend Guard ➔ Check Usage Count (Reject if > 10)",
      "Target Controller ➔ Dispatch to Gemini / Clipdrop / Cloudinary",
      "Response Payload ➔ Log Generation in Neon PostgreSQL Community Feed"
    ]
  },

  // Project ID 1: Todo App
  1: {
    title: "Full-Stack MVC & CSRF Security Architecture",
    description: "Monolithic MVC architecture powered by Express, EJS templating, PostgreSQL with Sequelize ORM, Passport.js session auth, and double-submit CSRF protection.",
    layers: [
      {
        name: "Presentation Tier",
        icon: Globe,
        color: "bg-blue-600",
        nodes: [
          { label: "EJS Dynamic Templates", detail: "Server-side rendered HTML with Tailwind CSS" },
          { label: "Client Views", detail: "Overdue, Due Today, & Due Later Task Filters" }
        ]
      },
      {
        name: "Security & Auth Tier",
        icon: Shield,
        color: "bg-purple-600",
        nodes: [
          { label: "Passport.js Auth Engine", detail: "Bcrypt Password Hashing & Cookie Sessions" },
          { label: "CSRF Guard", detail: "csurf Middleware & Double-Submit Token Guard" }
        ]
      },
      {
        name: "Service & Controller Tier",
        icon: Server,
        color: "bg-amber-600",
        nodes: [
          { label: "Express Controllers", detail: "Task CRUD Operations & Category Logic" },
          { label: "Sequelize ORM", detail: "Schema Migrations & Relational Data Mapping" }
        ]
      },
      {
        name: "Database Tier",
        icon: Database,
        color: "bg-emerald-600",
        nodes: [
          { label: "PostgreSQL Database", detail: "Relational Storage for Users & User-Task FKs" }
        ]
      }
    ],
    connections: [
      "HTTP Request ➔ CSRF Token & Session Cookie Verification",
      "Authenticated Session ➔ Passport.js Middleware Guard",
      "Task Operations ➔ Express Controller ➔ Sequelize ORM Queries",
      "DB Results ➔ EJS Template Rendering ➔ HTML Payload to Browser"
    ]
  }
};

const ArchitectureDiagram = ({ projectId }) => {
  const data = architectureDiagrams[projectId] || architectureDiagrams[5];
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-800 my-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-800 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-full mb-2">
            <Layers size={14} /> Under The Hood Architecture
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            {data.title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base mt-1 max-w-3xl">
            {data.description}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-gray-800/80 p-1.5 rounded-xl border border-gray-700">
          {data.layers.map((layer, idx) => (
            <button
              key={idx}
              onClick={() => setActiveLayer(idx)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeLayer === idx
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              Step {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Pipeline Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {data.layers.map((layer, idx) => {
          const Icon = layer.icon;
          const isActive = activeLayer === idx;

          return (
            <motion.div
              key={idx}
              onClick={() => setActiveLayer(idx)}
              whileHover={{ y: -4 }}
              className={`cursor-pointer rounded-xl p-5 border transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? "bg-gray-800 border-emerald-500 shadow-lg ring-2 ring-emerald-500/30"
                  : "bg-gray-800/40 border-gray-800 hover:border-gray-700 opacity-80"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-lg text-white ${layer.color}`}>
                  <Icon size={20} />
                </div>
                <span className="text-xs font-bold text-gray-500">0{idx + 1}</span>
              </div>

              <h4 className="font-bold text-base text-white mb-2">{layer.name}</h4>

              <div className="space-y-2">
                {layer.nodes.map((node, nIdx) => (
                  <div key={nIdx} className="bg-gray-900/80 p-2.5 rounded-lg border border-gray-800">
                    <p className="text-xs font-semibold text-gray-200">{node.label}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{node.detail}</p>
                  </div>
                ))}
              </div>

              {idx < data.layers.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-gray-900 border border-gray-700 text-emerald-400 p-1 rounded-full">
                  <ArrowRight size={12} />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Data Flow & Connection Pipeline */}
      <div className="bg-gray-950 rounded-xl p-5 border border-gray-800">
        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Zap size={14} /> End-to-End System Execution Flow
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.connections.map((conn, i) => (
            <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-300 bg-gray-900/90 p-3 rounded-lg border border-gray-800/80">
              <span className="bg-gray-800 text-emerald-400 font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                Flow #{i + 1}
              </span>
              <span className="leading-tight">{conn}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
