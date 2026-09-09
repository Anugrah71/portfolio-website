import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  adminLogin,
  verifyAdminToken,
  getActiveResume,
  getAllResumes,
  uploadResumeFile,
  activateResume,
  deleteResume,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  uploadProjectImage,
} from "../services/api";
import { projectData } from "../data/projectData";
import {
  FileText,
  Upload,
  CheckCircle2,
  Trash2,
  FolderGit2,
  Plus,
  Edit,
  Eye,
  EyeOff,
  LogOut,
  Lock,
  Download,
  AlertCircle,
  Sparkles,
  ExternalLink,
  Github,
  X,
  Image as ImageIcon,
} from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();

  // Auth state
  const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");

  // Navigation tabs
  const [activeTab, setActiveTab] = useState("resume"); // "resume" | "projects"

  // Resume states
  const [activeResume, setActiveResumeState] = useState(null);
  const [resumesList, setResumesList] = useState([]);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeVersion, setResumeVersion] = useState("");
  const [directResumeUrl, setDirectResumeUrl] = useState("");
  const [resumeUploading, setResumeUploading] = useState(false);
  const [resumeMessage, setResumeMessage] = useState({ type: "", text: "" });

  // Projects states
  const [projectsList, setProjectsList] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    tagline: "",
    keyMetric: "",
    description: "",
    overview: "",
    liveDemo: "",
    github: "",
    imageUrl: "",
    stack: "",
    images: "",
    carouselImages: [],
    isVisible: true,
  });
  const [imageUploading, setImageUploading] = useState(false);
  const [carouselUploading, setCarouselUploading] = useState(false);
  const [projectSaving, setProjectSaving] = useState(false);
  const [projectMessage, setProjectMessage] = useState({ type: "", text: "" });

  // Verify token on mount
  useEffect(() => {
    if (!token) {
      setAuthLoading(false);
      return;
    }
    verifyAdminToken(token).then((isValid) => {
      setIsAuthenticated(isValid);
      if (!isValid) {
        localStorage.removeItem("admin_token");
        setToken("");
      }
      setAuthLoading(false);
    });
  }, [token]);

  // Load data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadResumeData();
      loadProjectsData();
    }
  }, [isAuthenticated]);

  const loadResumeData = async () => {
    try {
      const active = await getActiveResume();
      setActiveResumeState(active);
      const all = await getAllResumes(token);
      setResumesList(all);
    } catch (err) {
      console.error(err);
    }
  };

  const loadProjectsData = async () => {
    setProjectsLoading(true);
    try {
      const projs = await getProjects(true, token);
      if (projs) setProjectsList(projs);
    } catch (err) {
      console.error(err);
    } finally {
      setProjectsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const receivedToken = await adminLogin(passwordInput);
      localStorage.setItem("admin_token", receivedToken);
      setToken(receivedToken);
      setIsAuthenticated(true);
    } catch (err) {
      setLoginError(err.message || "Invalid password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken("");
    setIsAuthenticated(false);
  };

  // ── Resume Handlers ──
  const handleResumeUpload = async (e) => {
    e.preventDefault();
    if (!resumeFile && !directResumeUrl) {
      setResumeMessage({ type: "error", text: "Please select a PDF file or enter a direct URL" });
      return;
    }

    setResumeUploading(true);
    setResumeMessage({ type: "", text: "" });

    try {
      const formData = new FormData();
      if (resumeFile) formData.append("resume", resumeFile);
      if (directResumeUrl) formData.append("fileUrl", directResumeUrl);
      if (resumeVersion) formData.append("version", resumeVersion);

      const updated = await uploadResumeFile(formData, token);
      setResumeMessage({ type: "success", text: "Resume uploaded and set as active!" });
      setResumeFile(null);
      setDirectResumeUrl("");
      setResumeVersion("");
      setActiveResumeState(updated);
      loadResumeData();
    } catch (err) {
      setResumeMessage({ type: "error", text: err.message || "Failed to upload resume" });
    } finally {
      setResumeUploading(false);
    }
  };

  const handleActivateResume = async (id) => {
    try {
      await activateResume(id, token);
      loadResumeData();
      setResumeMessage({ type: "success", text: "Active resume updated successfully" });
    } catch (err) {
      setResumeMessage({ type: "error", text: err.message });
    }
  };

  const handleDeleteResume = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resume version?")) return;
    try {
      await deleteResume(id, token);
      loadResumeData();
    } catch (err) {
      setResumeMessage({ type: "error", text: err.message });
    }
  };

  // ── Project Handlers ──
  const openNewProjectModal = () => {
    setEditingProject(null);
    setProjectForm({
      title: "",
      tagline: "",
      keyMetric: "",
      description: "",
      overview: "",
      liveDemo: "",
      github: "",
      imageUrl: "",
      stack: "",
      images: "",
      carouselImages: [],
      isVisible: true,
    });
    setProjectModalOpen(true);
  };

  const openEditProjectModal = (p) => {
    setEditingProject(p);
    const existingImages = Array.isArray(p.images) ? p.images : [];
    setProjectForm({
      title: p.title || "",
      tagline: p.tagline || "",
      keyMetric: p.keyMetric || "",
      description: p.description || "",
      overview: p.overview || "",
      liveDemo: p.liveDemo || "",
      github: p.github || "",
      imageUrl: p.imageUrl || "",
      stack: Array.isArray(p.stack) ? p.stack.join(", ") : "",
      images: existingImages.join("\n"),
      carouselImages: existingImages,
      isVisible: p.isVisible !== false,
    });
    setProjectModalOpen(true);
  };

  const handleProjectImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    try {
      const res = await uploadProjectImage(file, token);
      setProjectForm((prev) => ({ ...prev, imageUrl: res.url }));
      alert("Thumbnail image uploaded to Cloudinary successfully!");
    } catch (err) {
      alert("Image upload failed: " + err.message);
    } finally {
      setImageUploading(false);
    }
  };

  const handleCarouselImageUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setCarouselUploading(true);
    try {
      const newUrls = [];
      for (const file of files) {
        const res = await uploadProjectImage(file, token);
        newUrls.push(res.url);
      }
      setProjectForm((prev) => ({
        ...prev,
        carouselImages: [...(prev.carouselImages || []), ...newUrls],
      }));
      alert(`${newUrls.length} carousel screenshot(s) uploaded to Cloudinary!`);
    } catch (err) {
      alert("Carousel upload failed: " + err.message);
    } finally {
      setCarouselUploading(false);
    }
  };

  const handleRemoveCarouselImage = (indexToRemove) => {
    setProjectForm((prev) => ({
      ...prev,
      carouselImages: (prev.carouselImages || []).filter((_, i) => i !== indexToRemove),
    }));
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    setProjectSaving(true);
    setProjectMessage({ type: "", text: "" });

    try {
      const stackArray = projectForm.stack
        ? projectForm.stack.split(",").map((s) => s.trim()).filter(Boolean)
        : [];

      let imagesArray = projectForm.carouselImages && projectForm.carouselImages.length > 0
        ? projectForm.carouselImages
        : projectForm.images
        ? projectForm.images.split("\n").map((s) => s.trim()).filter(Boolean)
        : [];

      // Include main image in images array if not already present
      if (projectForm.imageUrl && !imagesArray.includes(projectForm.imageUrl)) {
        imagesArray.unshift(projectForm.imageUrl);
      }

      const payload = {
        title: projectForm.title,
        tagline: projectForm.tagline,
        keyMetric: projectForm.keyMetric,
        description: projectForm.description,
        overview: projectForm.overview,
        liveDemo: projectForm.liveDemo,
        github: projectForm.github,
        imageUrl: projectForm.imageUrl,
        stack: stackArray,
        images: imagesArray,
        isVisible: projectForm.isVisible,
      };

      if (editingProject) {
        await updateProject(editingProject.id || editingProject._id, payload, token);
        setProjectMessage({ type: "success", text: "Project updated successfully!" });
      } else {
        await createProject(payload, token);
        setProjectMessage({ type: "success", text: "Project created successfully!" });
      }

      setProjectModalOpen(false);
      loadProjectsData();
    } catch (err) {
      setProjectMessage({ type: "error", text: err.message || "Failed to save project" });
    } finally {
      setProjectSaving(false);
    }
  };

  const handleToggleVisibility = async (p) => {
    try {
      await updateProject(p.id || p._id, { isVisible: !p.isVisible }, token);
      loadProjectsData();
    } catch (err) {
      alert("Failed to toggle visibility: " + err.message);
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id, token);
      loadProjectsData();
    } catch (err) {
      alert("Failed to delete project: " + err.message);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#080B12] text-[#F1F3F5] flex items-center justify-center pt-20">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-[#7C6CFF] border-t-transparent rounded-full animate-spin" />
          <span>Verifying authentication...</span>
        </div>
      </div>
    );
  }

  // ── Login Screen ──
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#080B12] text-[#F1F3F5] flex flex-col items-center justify-center px-4 pt-24 pb-12">
        <div className="w-full max-w-md bg-[#10141D] border border-[#202632] rounded-2xl p-8 shadow-2xl">
          <div className="w-14 h-14 bg-[#7C6CFF]/10 text-[#7C6CFF] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#7C6CFF]/20">
            <Lock size={28} />
          </div>

          <h2 className="text-2xl font-bold text-center mb-2 text-[#F1F3F5]">Admin Portal</h2>
          <p className="text-sm text-[#8B93A1] text-center mb-6">
            Enter your admin passphrase to manage your resume and portfolio database.
          </p>

          {loginError && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-[#8B93A1] mb-2">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-sm focus:outline-none focus:border-[#7C6CFF] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white font-bold rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-xs text-[#8B93A1] hover:text-[#F1F3F5] transition cursor-pointer"
            >
              &larr; Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Authenticated Admin Panel ──
  return (
    <div className="min-h-screen bg-[#080B12] text-[#F1F3F5] pt-24 pb-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#202632] pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7C6CFF]/10 text-[#7C6CFF] rounded-full text-xs font-semibold mb-2 border border-[#7C6CFF]/20">
              <Sparkles size={14} /> Database Management Mode
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F1F3F5]">Portfolio Dashboard</h1>
            <p className="text-sm text-[#8B93A1] mt-1">
              Update your live resume and manage database projects with zero redeployments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-[#10141D] hover:bg-[#161c29] border border-[#202632] rounded-xl text-xs sm:text-sm font-semibold text-[#8B93A1] hover:text-[#F1F3F5] transition cursor-pointer"
            >
              View Portfolio
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab("resume")}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === "resume"
                ? "bg-[#7C6CFF] text-white shadow-lg"
                : "bg-[#10141D] text-[#8B93A1] hover:text-[#F1F3F5] border border-[#202632]"
            }`}
          >
            <FileText size={18} />
            <span>Resume Management</span>
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === "projects"
                ? "bg-[#7C6CFF] text-white shadow-lg"
                : "bg-[#10141D] text-[#8B93A1] hover:text-[#F1F3F5] border border-[#202632]"
            }`}
          >
            <FolderGit2 size={18} />
            <span>Projects ({projectsList.length})</span>
          </button>
        </div>

        {/* ──────── TAB 1: RESUME MANAGEMENT ──────── */}
        {activeTab === "resume" && (
          <div className="space-y-8">
            {resumeMessage.text && (
              <div
                className={`p-4 rounded-xl text-sm flex items-center gap-3 ${
                  resumeMessage.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                    : "bg-red-500/10 border border-red-500/30 text-red-300"
                }`}
              >
                {resumeMessage.type === "success" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                <span>{resumeMessage.text}</span>
              </div>
            )}

            {/* Current Active Resume Card */}
            <div className="bg-[#10141D] border border-[#202632] rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#202632] pb-5 mb-6">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
                    Live Active Resume
                  </span>
                  <h3 className="text-xl font-bold text-[#F1F3F5] flex items-center gap-2">
                    <FileText size={20} className="text-[#7C6CFF]" />
                    {activeResume?.fileName || "Anugrah_K_Resume.pdf"}
                  </h3>
                  <p className="text-xs text-[#8B93A1] mt-1">
                    Version: {activeResume?.version || "Default"} • Last Updated:{" "}
                    {activeResume?.updatedAt
                      ? new Date(activeResume.updatedAt).toLocaleDateString()
                      : "Initial"}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeResume?.fileUrl || "/Anugrah_K_Resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white font-bold rounded-xl text-xs sm:text-sm transition flex items-center gap-2"
                  >
                    <Download size={16} /> Test Download Link
                  </a>
                </div>
              </div>

              {/* Upload New Resume Form */}
              <form onSubmit={handleResumeUpload} className="space-y-4">
                <h4 className="text-base font-bold text-[#F1F3F5]">Upload New Resume PDF</h4>
                <p className="text-xs text-[#8B93A1]">
                  Uploading a new PDF replaces the download link on your homepage immediately.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1.5">
                      Select PDF File
                    </label>
                    <input
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                      className="w-full text-xs text-[#8B93A1] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#080B12] file:text-[#F1F3F5] hover:file:bg-[#161c29] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1.5">
                      Version Label (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Updated Sep 2026 - Backend focus"
                      value={resumeVersion}
                      onChange={(e) => setResumeVersion(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-xs focus:outline-none focus:border-[#7C6CFF]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1.5">
                    Or Direct PDF Cloud URL (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://res.cloudinary.com/... or Google Drive direct link"
                    value={directResumeUrl}
                    onChange={(e) => setDirectResumeUrl(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-xs focus:outline-none focus:border-[#7C6CFF]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={resumeUploading}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Upload size={16} />
                  <span>{resumeUploading ? "Uploading to Cloud..." : "Upload & Set as Active"}</span>
                </button>
              </form>
            </div>

            {/* Resume History */}
            {resumesList.length > 0 && (
              <div className="bg-[#10141D] border border-[#202632] rounded-2xl p-6 sm:p-8 shadow-xl">
                <h4 className="text-lg font-bold text-[#F1F3F5] mb-4">Resume Version History</h4>
                <div className="space-y-3">
                  {resumesList.map((r) => (
                    <div
                      key={r._id}
                      className="p-4 bg-[#080B12] border border-[#202632] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-[#F1F3F5]">{r.fileName}</span>
                          {r.isActive && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#8B93A1] mt-1">
                          {r.version} • {new Date(r.createdAt).toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={r.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-[#10141D] hover:bg-[#161c29] text-[#F1F3F5] border border-[#202632] rounded-lg text-xs transition"
                        >
                          View
                        </a>

                        {!r.isActive && (
                          <button
                            onClick={() => handleActivateResume(r._id)}
                            className="px-3 py-1.5 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white rounded-lg text-xs font-semibold transition cursor-pointer"
                          >
                            Make Active
                          </button>
                        )}

                        <button
                          onClick={() => handleDeleteResume(r._id)}
                          className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition cursor-pointer"
                          title="Delete version"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ──────── TAB 2: PROJECTS MANAGEMENT ──────── */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#F1F3F5]">Showcase Projects</h3>
              <button
                onClick={openNewProjectModal}
                className="px-5 py-2.5 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg transition flex items-center gap-2 cursor-pointer"
              >
                <Plus size={16} /> Add New Project
              </button>
            </div>

            {projectMessage.text && (
              <div
                className={`p-4 rounded-xl text-sm flex items-center gap-3 ${
                  projectMessage.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                    : "bg-red-500/10 border border-red-500/30 text-red-300"
                }`}
              >
                {projectMessage.type === "success" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                <span>{projectMessage.text}</span>
              </div>
            )}

            {projectsLoading ? (
              <div className="text-center py-12 text-[#8B93A1]">Loading database projects...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsList.map((p) => (
                  <div
                    key={p.id || p._id}
                    className="bg-[#10141D] border border-[#202632] rounded-2xl overflow-hidden flex flex-col shadow-xl"
                  >
                    {/* Thumbnail */}
                    <div className="h-44 bg-[#080B12] relative overflow-hidden border-b border-[#202632] flex items-center justify-center p-2">
                      <img
                        src={
                          p.imageUrl ||
                          projectData.find((item) => item.id === p.id)?.imageUrl ||
                          "/vite.svg"
                        }
                        alt={p.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-3 right-3 flex items-center gap-2">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md border ${
                            p.isVisible !== false
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                              : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                          }`}
                        >
                          {p.isVisible !== false ? "Visible" : "Hidden"}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-[#F1F3F5] mb-1">{p.title}</h4>
                        <p className="text-xs text-[#7C6CFF] font-medium mb-3">{p.tagline}</p>
                        <p className="text-xs text-[#8B93A1] line-clamp-2 mb-4 leading-relaxed">
                          {p.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {Array.isArray(p.stack) &&
                            p.stack.slice(0, 5).map((s, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-[#080B12] text-[#8B93A1] border border-[#202632] rounded text-[11px]"
                              >
                                {s}
                              </span>
                            ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-[#202632] flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEditProjectModal(p)}
                            className="px-3 py-1.5 bg-[#080B12] hover:bg-[#161c29] text-[#F1F3F5] border border-[#202632] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                          >
                            <Edit size={14} /> Edit
                          </button>

                          <button
                            onClick={() => handleToggleVisibility(p)}
                            className="px-3 py-1.5 bg-[#080B12] hover:bg-[#161c29] text-[#8B93A1] hover:text-[#F1F3F5] border border-[#202632] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                            title={p.isVisible ? "Hide from portfolio" : "Show on portfolio"}
                          >
                            {p.isVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                            <span>{p.isVisible ? "Hide" : "Show"}</span>
                          </button>
                        </div>

                        <button
                          onClick={() => handleDeleteProject(p.id || p._id)}
                          className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition cursor-pointer"
                          title="Delete project"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ──────── ADD / EDIT PROJECT MODAL ──────── */}
      {projectModalOpen && (
        <div className="fixed inset-0 z-[2000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#10141D] border border-[#202632] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl my-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#202632] mb-6">
              <h3 className="text-xl font-bold text-[#F1F3F5]">
                {editingProject ? "Edit Project" : "Add New Project"}
              </h3>
              <button
                onClick={() => setProjectModalOpen(false)}
                className="p-1.5 text-[#8B93A1] hover:text-[#F1F3F5] rounded-lg transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  placeholder="e.g., Job Application Tracker"
                  className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-sm focus:outline-none focus:border-[#7C6CFF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={projectForm.tagline}
                    onChange={(e) => setProjectForm({ ...projectForm, tagline: e.target.value })}
                    placeholder="Short highlight headline..."
                    className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-sm focus:outline-none focus:border-[#7C6CFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1">
                    Key Metric Badge
                  </label>
                  <input
                    type="text"
                    value={projectForm.keyMetric}
                    onChange={(e) => setProjectForm({ ...projectForm, keyMetric: e.target.value })}
                    placeholder="e.g., Reduced latency by 90%..."
                    className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-sm focus:outline-none focus:border-[#7C6CFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1">
                  Short Description (Card summary)
                </label>
                <textarea
                  rows={2}
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  placeholder="Brief summary displayed on project cards..."
                  className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-sm focus:outline-none focus:border-[#7C6CFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1">
                  Full Project Overview (Detailed view)
                </label>
                <textarea
                  rows={4}
                  value={projectForm.overview}
                  onChange={(e) => setProjectForm({ ...projectForm, overview: e.target.value })}
                  placeholder="Comprehensive description for the detail page..."
                  className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-sm focus:outline-none focus:border-[#7C6CFF]"
                />
              </div>

              {/* Image Upload / URL */}
              <div className="p-4 bg-[#080B12] border border-[#202632] rounded-xl space-y-3">
                <label className="block text-xs font-semibold text-[#8B93A1] uppercase">
                  Project Thumbnail Image
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="url"
                    value={projectForm.imageUrl}
                    onChange={(e) => setProjectForm({ ...projectForm, imageUrl: e.target.value })}
                    placeholder="Image URL or upload below..."
                    className="flex-1 px-4 py-2 bg-[#10141D] border border-[#202632] rounded-xl text-[#F1F3F5] text-xs focus:outline-none focus:border-[#7C6CFF]"
                  />
                  <label className="px-4 py-2 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white text-xs font-semibold rounded-xl cursor-pointer transition flex items-center gap-1.5 shrink-0">
                    <ImageIcon size={14} />
                    <span>{imageUploading ? "Uploading..." : "Upload Image"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProjectImageUpload}
                      disabled={imageUploading}
                      className="hidden"
                    />
                  </label>
                </div>
                {projectForm.imageUrl && (
                  <div className="h-28 rounded-lg overflow-hidden border border-[#202632] mt-2">
                    <img
                      src={projectForm.imageUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1">
                    Live Demo Link
                  </label>
                  <input
                    type="url"
                    value={projectForm.liveDemo}
                    onChange={(e) => setProjectForm({ ...projectForm, liveDemo: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-sm focus:outline-none focus:border-[#7C6CFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1">
                    GitHub Repo Link
                  </label>
                  <input
                    type="url"
                    value={projectForm.github}
                    onChange={(e) => setProjectForm({ ...projectForm, github: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-sm focus:outline-none focus:border-[#7C6CFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-1">
                  Stack Tags (Comma separated)
                </label>
                <input
                  type="text"
                  value={projectForm.stack}
                  onChange={(e) => setProjectForm({ ...projectForm, stack: e.target.value })}
                  placeholder="Node.js, React, Express.js, MongoDB, Docker"
                  className="w-full px-4 py-2.5 bg-[#080B12] border border-[#202632] rounded-xl text-[#F1F3F5] text-sm focus:outline-none focus:border-[#7C6CFF]"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="isVisibleCheck"
                  checked={projectForm.isVisible}
                  onChange={(e) => setProjectForm({ ...projectForm, isVisible: e.target.checked })}
                  className="w-4 h-4 rounded text-[#7C6CFF] focus:ring-0 bg-[#080B12] border-[#202632] cursor-pointer"
                />
                <label htmlFor="isVisibleCheck" className="text-xs text-[#F1F3F5] cursor-pointer">
                  Visible on public portfolio
                </label>
              </div>

              <div className="pt-4 border-t border-[#202632] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setProjectModalOpen(false)}
                  className="px-5 py-2.5 bg-[#080B12] hover:bg-[#161c29] text-[#8B93A1] hover:text-[#F1F3F5] border border-[#202632] rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={projectSaving}
                  className="px-6 py-2.5 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white rounded-xl text-xs font-bold shadow-lg transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{projectSaving ? "Saving..." : "Save Project"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
