import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
});

export const Category = mongoose.model("Category", categorySchema);
