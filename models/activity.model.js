import mongoose, { Schema } from "mongoose";

const activitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
