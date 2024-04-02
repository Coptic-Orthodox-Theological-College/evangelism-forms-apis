import mongoose, { Schema } from "mongoose";

const activitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Activity = mongoose.model("Activities", activitySchema);

export default Activity;
