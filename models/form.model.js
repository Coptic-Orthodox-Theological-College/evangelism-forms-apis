import mongoose, { Schema } from "mongoose";

const formSchema = new Schema(
  {
    formName: { type: String, required: true },
    fields: [
      {
        name: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

export default Form;
