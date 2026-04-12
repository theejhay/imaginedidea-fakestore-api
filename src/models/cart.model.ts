import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
})

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;