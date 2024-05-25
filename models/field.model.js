import { Schema } from "mongoose";

export const FieldSchema = new Schema({
  order: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  isRequired: { type: Boolean, required: true },
  isEnum: { type: Boolean, required: false, default: false },
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
  isNumber: { type: Boolean, required: false, default: false },
  ifNumber: {
    type: {
      isPriced: { type: Boolean, required: false },
      price: {
        type: Number, required: function () {
          return this.isPriced;
        }
      },
      maxNumber: { type: Number, required: false, default: -1 },
      nameTitle: { type: String, required: false },
      minRequiredNames: { type: Number, required: false, default: 0 },
      maxRequiredNames: { type: Number, required: false, default: 0 },
    },
    required: function () {
      return this.isNumber;
    },
  },
});
