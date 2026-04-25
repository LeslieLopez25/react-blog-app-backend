import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    images: [
      {
        url: String,
        filename: String,
      },
    ],
    notes: [
      {
        content: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    status: {
      type: String,
      enum: ["idea", "in-progress", "completed"],
      default: "idea",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Project", projectSchema);
