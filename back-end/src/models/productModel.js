import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: {
      type: String,
      enum: ["Men", "Women", "Kids"],
      required: true
    },
    sizes: {
      type: [String],
      enum: ["S", "M", "L", "XL"],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
