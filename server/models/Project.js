import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: { type: String },
  link: { type: String },
  description: { type: String },
  postedOn: { type: Date, default: Date.now },
});

export default mongoose.model("Projects", projectSchema);
