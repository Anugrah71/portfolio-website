import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    fileUrl: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      default: "Anugrah_K_Resume.pdf",
    },
    publicId: {
      type: String,
      default: "",
    },
    version: {
      type: String,
      default: "Latest",
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    sizeBytes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Resume = mongoose.model("Resume", resumeSchema);
