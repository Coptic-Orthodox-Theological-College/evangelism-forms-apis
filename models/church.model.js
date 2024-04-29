import mongoose, { Schema } from "mongoose";

const churchSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
});

const Church = mongoose.model("Churches", churchSchema);

export default Church;