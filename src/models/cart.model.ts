import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
  userId:{ String, required: true},
  productId:{ String, required: true},
  quantity:{ Number, required: true}
},
{timestamps: true}
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
