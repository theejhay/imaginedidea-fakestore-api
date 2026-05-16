import Joi from "joi";

const CartSchema = Joi.object({
  userId: Joi.string().uuid().required(),
  productId: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/),
  quantity: Joi.number().min(1).max(100).required().integer()
});

export default CartSchema;
