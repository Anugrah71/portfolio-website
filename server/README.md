# Portfolio Backend API (MERN Stack)

This is the dedicated backend server for the portfolio website. It provides REST API endpoints to dynamically manage your resume PDF uploads and showcase projects in MongoDB Atlas without requiring any manual code edits or redeploying the Vite frontend.

---

## Features
- **Dynamic Resume Management**: Upload new PDF resumes directly to Cloudinary and MongoDB. The portfolio's "Download Resume" button updates instantly.
- **Projects Database**: Store, update, reorder, and toggle visibility of projects in MongoDB Atlas.
- **Image Uploads**: Stream screenshots directly to Cloudinary with automatic URL generation.
- **Admin Authentication**: JWT-secured endpoints with passphrase verification.
- **Instant Fallback**: The React frontend falls back to bundled static data if the server is offline or waking up from sleep, guaranteeing zero visitor downtime.

---

## Environment Variables (`server/.env`)

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_PASSWORD=your_admin_secret_password

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

CLIENT_URL=http://localhost:5173
```

---

## Quick Start

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The server will run on `http://localhost:5000`.

---

## API Endpoints

### Public Endpoints
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health check |
| `GET` | `/api/resume/active` | Get current live active resume |
| `GET` | `/api/projects` | List all visible projects |
| `GET` | `/api/projects/:id` | Get details for single project |

### Admin Endpoints (Require `Authorization: Bearer <token>`)
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/login` | Admin login with password |
| `GET` | `/api/auth/verify` | Verify admin token |
| `GET` | `/api/resume/all` | List all uploaded resume versions |
| `POST` | `/api/resume/upload` | Upload new PDF resume and set as active |
| `PATCH` | `/api/resume/:id/activate` | Activate an older resume version |
| `DELETE` | `/api/resume/:id` | Delete a resume version |
| `POST` | `/api/projects` | Create a new project |
| `PUT` | `/api/projects/:id` | Update project details |
| `DELETE` | `/api/projects/:id` | Delete project |
| `POST` | `/api/projects/upload-image` | Upload project screenshot to Cloudinary |

---

## Deploying to Render (Free Tier)
1. Push your repository to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com/) -> **New Web Service**.
3. Connect your GitHub repository.
4. Set:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add the Environment Variables from `server/.env` into Render's Environment tab.
6. Once deployed, copy your Render URL (e.g., `https://portfolio-api-xxxx.onrender.com`).
7. In Vercel (for your frontend), set `VITE_API_URL=https://portfolio-api-xxxx.onrender.com/api`.
