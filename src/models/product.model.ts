import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    title: { type: String, required: true, min: 3 },
    price: { type: Number, required: true, min: 1 },
    description: { type: String, required: true, min: 10 },
    category: { type: String, required: true, min: 3 },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
