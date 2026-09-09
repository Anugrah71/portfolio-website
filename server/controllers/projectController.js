import { Project } from "../models/Project.js";
import { uploadBufferToCloudinary } from "../config/cloudinary.js";

// GET /api/projects (Public)
export const getProjects = async (req, res) => {
  try {
    const { all } = req.query;
    const filter = all === "true" ? {} : { isVisible: true };
    const projects = await Project.find(filter).sort({ order: 1, id: -1 });

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/projects/:id (Public)
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const numericId = Number(id);

    const project = isNaN(numericId)
      ? await Project.findById(id)
      : await Project.findOne({ id: numericId });

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/projects (Admin)
export const createProject = async (req, res) => {
  try {
    const projectData = req.body;

    // Auto-generate numeric ID if not provided
    if (!projectData.id) {
      const highest = await Project.findOne().sort({ id: -1 });
      projectData.id = highest && highest.id ? highest.id + 1 : 1;
    }

    const newProject = await Project.create(projectData);

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: newProject,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// PUT /api/projects/:id (Admin)
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const numericId = Number(id);

    const filter = isNaN(numericId) ? { _id: id } : { id: numericId };
    const updated = await Project.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE /api/projects/:id (Admin)
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const numericId = Number(id);

    const filter = isNaN(numericId) ? { _id: id } : { id: numericId };
    const deleted = await Project.findOneAndDelete(filter);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/projects/upload-image (Admin)
export const uploadProjectImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file uploaded" });
    }

    const result = await uploadBufferToCloudinary(req.file.buffer, {
      folder: "portfolio/projects",
      resource_type: "image",
    });

    return res.status(200).json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    console.error("Project image upload error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
