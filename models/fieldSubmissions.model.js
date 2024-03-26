import mongoose, { Schema } from "mongoose";

export const submissionFieldSchema = new Schema({
  fieldId: { type: Schema.Types.ObjectId, ref: "Field", required: true },
  name: { type: String, required: true }, // field name for easy reference
  order: { type: Number, required: true },
  value: { type: String, required: true },
});

const SubmissionField = mongoose.model(
  "submissionField",
  submissionFieldSchema
);

export default SubmissionField;
