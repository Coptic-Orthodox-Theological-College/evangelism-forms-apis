import { Schema } from "mongoose";

export const submissionFieldSchema = new Schema({
  value: { type: String, required: true },
  fieldId: { type: String, required: true },
});
