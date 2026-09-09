import { Resume } from "../models/Resume.js";
import cloudinary, { uploadBufferToCloudinary } from "../config/cloudinary.js";

// GET /api/resume/active (Public)
export const getActiveResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ isActive: true }).sort({ updatedAt: -1 });

    if (!resume) {
      return res.status(200).json({
        success: true,
        data: {
          fileUrl: "/Anugrah_K_Resume.pdf",
          fileName: "Anugrah_K_Resume.pdf",
          version: "Default",
          isActive: true,
        },
      });
    }

    return res.status(200).json({
      success: true,
      data: resume,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: {
        fileUrl: "/Anugrah_K_Resume.pdf",
        fileName: "Anugrah_K_Resume.pdf",
      },
    });
  }
};

// GET /api/resume/all (Admin)
export const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: resumes });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/resume/upload (Admin)
export const uploadResume = async (req, res) => {
  try {
    let fileUrl = "";
    let publicId = "";
    let fileName = req.body.fileName || "Anugrah_K_Resume.pdf";
    let sizeBytes = 0;
    const version = req.body.version || `Updated ${new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}`;

    if (req.file) {
      fileName = req.file.originalname || fileName;
      sizeBytes = req.file.size;

      // Upload PDF buffer to Cloudinary
      const uploadResult = await uploadBufferToCloudinary(req.file.buffer, {
        resource_type: "raw",
        folder: "portfolio/resumes",
      });

      fileUrl = uploadResult.secure_url;
      publicId = uploadResult.public_id;
    } else if (req.body.fileUrl) {
      fileUrl = req.body.fileUrl;
    } else {
      return res.status(400).json({ success: false, message: "Please provide a resume PDF file or URL" });
    }

    // Set all other resumes to inactive
    await Resume.updateMany({}, { isActive: false });

    // Create and save new active resume
    const newResume = await Resume.create({
      fileUrl,
      fileName,
      publicId,
      version,
      isActive: true,
      sizeBytes,
    });

    return res.status(201).json({
      success: true,
      message: "Resume updated successfully",
      data: newResume,
    });
  } catch (error) {
    console.error("Resume upload error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// PATCH /api/resume/:id/activate (Admin)
export const activateResume = async (req, res) => {
  try {
    const { id } = req.params;
    await Resume.updateMany({}, { isActive: false });
    const activated = await Resume.findByIdAndUpdate(id, { isActive: true }, { new: true });

    if (!activated) {
      return res.status(404).json({ success: false, message: "Resume not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Resume activated",
      data: activated,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/resume/:id (Admin)
export const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findById(id);

    if (!resume) {
      return res.status(404).json({ success: false, message: "Resume not found" });
    }

    if (resume.publicId) {
      try {
        await cloudinary.uploader.destroy(resume.publicId, { resource_type: "raw" });
      } catch (err) {
        console.warn("Could not delete from Cloudinary:", err.message);
      }
    }

    await Resume.findByIdAndDelete(id);

    // If deleted resume was active, make the most recent one active
    if (resume.isActive) {
      const latest = await Resume.findOne().sort({ createdAt: -1 });
      if (latest) {
        latest.isActive = true;
        await latest.save();
      }
    }

    return res.status(200).json({ success: true, message: "Resume deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
