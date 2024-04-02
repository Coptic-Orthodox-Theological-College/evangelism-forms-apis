import mongoose, { Schema } from "mongoose";
import { submissionFieldSchema } from "./fieldSubmissions.model.js";

const submissionsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    formTemplateId: {
      type: Schema.Types.ObjectId,
      ref: "FormTemplates",
      required: true,
    },
    data: [submissionFieldSchema],
  },
  { timestamps: true }
);

const Submissions = mongoose.model("Submissions", submissionsSchema);

export default Submissions;
