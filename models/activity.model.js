import mongoose, { Schema } from "mongoose";
import FormTemplate from "./formTemplate.model.js";

const activitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Activity = mongoose.model("Activities", activitySchema);

export default Activity;
