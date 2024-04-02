import mongoose, { Schema } from "mongoose";
import { FieldSchema } from "./field.model.js";

const FormTemplateSchema = new Schema({
  name: { type: String, required: true },
  activityId: { type: Schema.Types.ObjectId, ref: "Activity", required: true },
  description: { type: String, required: true },
  fields: [FieldSchema],
});

const FormTemplate = mongoose.model("FormTemplates", FormTemplateSchema);

export default FormTemplate;
