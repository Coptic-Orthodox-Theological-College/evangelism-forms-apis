import mongoose, { Schema } from "mongoose";
import FormTemplate from "./formTemplate.model.js";

const activitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ifHaveOneForm: {
    type: Object,
    default: null,
  },
});

// check ifHaveOneForm and formId
activitySchema.pre("save", async function (next) {
  const count = await FormTemplate.countDocuments({ activityId: this._id });
  if (count === 1) {
    const form = await FormTemplate.findOne({ activityId: this._id });
    this.ifHaveOneForm = form;
  } else {
    this.ifHaveOneForm = null;
  }
  next();
});

const Activity = mongoose.model("Activities", activitySchema);

export default Activity;
