import Joi from "joi";

const CartSchema = Joi.object({
  userId: Joi.number().integer().required(),
  productId: Joi.string().required(),
  quantity: Joi.number().min(1).max(100).required()
});

export default CartSchema;
