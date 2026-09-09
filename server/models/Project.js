import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    tagline: {
      type: String,
      default: "",
    },
    keyMetric: {
      type: String,
      default: "",
    },
    liveDemo: {
      type: String,
      default: "",
    },
    github: {
      type: String,
      default: "",
    },
    overview: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    stack: {
      type: [String],
      default: [],
    },
    techStack: {
      type: Map,
      of: [String],
      default: {},
    },
    images: {
      type: [String],
      default: [],
    },
    features: [
      {
        title: { type: String, default: "" },
        desc: { type: String, default: "" },
      },
    ],
    challenges: [
      {
        title: { type: String, default: "" },
        problem: { type: String, default: "" },
        solution: { type: String, default: "" },
      },
    ],
    outcome: {
      learned: { type: String, default: "" },
      improvements: { type: String, default: "" },
    },
    order: {
      type: Number,
      default: 0,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model("Project", projectSchema);
