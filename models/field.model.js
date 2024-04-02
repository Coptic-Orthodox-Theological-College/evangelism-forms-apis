import { Schema } from "mongoose";

export const FieldSchema = new Schema({
  order: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
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
    default: 1,
  },
});
