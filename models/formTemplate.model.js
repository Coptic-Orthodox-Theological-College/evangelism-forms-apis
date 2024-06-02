import mongoose, { Schema } from "mongoose";
import { FieldSchema } from "./field.model.js";

const FormTemplateSchema = new Schema({
  name: { type: String, required: true },
  activityId: { type: Schema.Types.ObjectId, ref: "Activities", required: true },
  description: { type: String, required: true },
  fields: [FieldSchema],
  submttedBy: [{
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    submissionId: { type: Schema.Types.ObjectId, ref: "Submissions" },
    submittedAt: { type: Date },
  }]
});

const FormTemplate = mongoose.model("FormTemplates", FormTemplateSchema);

export default FormTemplate;
