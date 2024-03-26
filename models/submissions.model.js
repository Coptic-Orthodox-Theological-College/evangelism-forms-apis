import mongoose, { Schema } from "mongoose";
import { submissionFieldSchema } from "./fieldSubmissions.model.js";

const submissionsSchema = new Schema(
  {
    formId: {
      type: Schema.Types.ObjectId,
      ref: "FormTemplate",
      required: true,
    },
    data: [
      {
        type: submissionFieldSchema,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Submissions = mongoose.model("Submissions", submissionsSchema);

export default Submissions;
