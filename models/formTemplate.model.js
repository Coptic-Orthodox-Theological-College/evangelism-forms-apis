import mongoose, { Schema } from "mongoose";
import { FieldSchema } from "./field.model.js";

const FormTemplateSchema = new Schema({
  name: { type: String, required: true },
  activityId: { type: Schema.Types.ObjectId, ref: "Activity", required: true },
  description: { type: String, required: true },
  fields: [
    {
      type: FieldSchema,
      required: true,
    },
  ],
});

const FormTemplate = mongoose.model("FormTemplate", FormTemplateSchema);

export default FormTemplate;
