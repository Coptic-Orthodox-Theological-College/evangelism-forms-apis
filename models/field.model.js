import mongoose, { Schema } from "mongoose";

export const FieldSchema = new Schema({
  order: { type: Number, required: true },
  name: { type: String, required: true },
  isRequired: { type: Boolean, required: true },
  isEnum: { type: Boolean, required: true },
  values: {
    type: [String],
    required: function () {
      return this.isEnum;
    },
  },
  numberOfChoices: {
    type: Number,
    required: function () {
      return this.isEnum;
    },
    default: 1,
  },
});

const Field = mongoose.model("Field", FieldSchema);

export default Field;
