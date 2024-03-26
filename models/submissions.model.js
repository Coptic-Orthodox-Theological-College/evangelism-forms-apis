import mongoose, { Schema } from "mongoose";

const submissionsSchema = new Schema(
  {
    formId: { type: Schema.Types.ObjectId, ref: "Form", required: true },
    data: [
      {
        name: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Submissions = mongoose.model("Submissions", submissionsSchema);

export default Submissions;
