// In local development, use localhost:5000. In production, require VITE_API_URL to prevent unwanted localhost network requests.
const API_URL =
  import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:5000/api" : "");

// ── Resume APIs ──
export const getActiveResume = async () => {
  if (!API_URL) {
    return {
      fileUrl: "/Anugrah_K_Resume.pdf",
      fileName: "Anugrah_K_Resume.pdf",
      version: "Default Local",
    };
  }

  try {
    const res = await fetch(`${API_URL}/resume/active`);
    if (!res.ok) throw new Error("Failed to fetch resume");
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.warn("Using fallback local resume:", error.message);
    return {
      fileUrl: "/Anugrah_K_Resume.pdf",
      fileName: "Anugrah_K_Resume.pdf",
      version: "Default Local",
    };
  }
};

export const getAllResumes = async (token) => {
  if (!API_URL) throw new Error("Backend API URL is not configured yet. Please set VITE_API_URL.");
  const res = await fetch(`${API_URL}/resume/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch resumes history");
  const json = await res.json();
  return json.data;
};

export const uploadResumeFile = async (formData, token) => {
  if (!API_URL) throw new Error("Backend API URL is not configured yet. Please set VITE_API_URL.");
  const res = await fetch(`${API_URL}/resume/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to upload resume");
  return json.data;
};

export const activateResume = async (id, token) => {
  if (!API_URL) throw new Error("Backend API URL is not configured yet. Please set VITE_API_URL.");
  const res = await fetch(`${API_URL}/resume/${id}/activate`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to activate resume");
  return json.data;
};

export const deleteResume = async (id, token) => {
  if (!API_URL) throw new Error("Backend API URL is not configured yet. Please set VITE_API_URL.");
  const res = await fetch(`${API_URL}/resume/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to delete resume");
  return json;
};

// ── Projects APIs ──
export const getProjects = async (includeHidden = false, token = null) => {
  if (!API_URL) {
    return null;
  }

  try {
    const headers = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    const url = `${API_URL}/projects${includeHidden ? "?all=true" : ""}`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error("Failed to fetch projects");
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.warn("API projects fetch error, falling back to local static data:", error.message);
    return null;
  }
};

export const getProjectById = async (id) => {
  if (!API_URL) {
    return null;
  }

  try {
    const res = await fetch(`${API_URL}/projects/${id}`);
    if (!res.ok) throw new Error("Project not found in API");
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.warn("API project detail fetch error:", error.message);
    return null;
  }
};

export const createProject = async (projectData, token) => {
  if (!API_URL) throw new Error("Backend API URL is not configured yet. Please set VITE_API_URL.");
  const res = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(projectData),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to create project");
  return json.data;
};

export const updateProject = async (id, projectData, token) => {
  if (!API_URL) throw new Error("Backend API URL is not configured yet. Please set VITE_API_URL.");
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(projectData),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to update project");
  return json.data;
};

export const deleteProject = async (id, token) => {
  if (!API_URL) throw new Error("Backend API URL is not configured yet. Please set VITE_API_URL.");
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to delete project");
  return json;
};

export const uploadProjectImage = async (file, token) => {
  if (!API_URL) throw new Error("Backend API URL is not configured yet. Please set VITE_API_URL.");
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${API_URL}/projects/upload-image`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to upload image");
  return json;
};

// ── Auth APIs ──
export const adminLogin = async (password) => {
  if (!API_URL) throw new Error("Backend API URL is not configured yet. Please set VITE_API_URL.");
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Authentication failed");
  return json.token;
};

export const verifyAdminToken = async (token) => {
  if (!API_URL) return false;
  try {
    const res = await fetch(`${API_URL}/auth/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.ok;
  } catch {
    return false;
  }
};
