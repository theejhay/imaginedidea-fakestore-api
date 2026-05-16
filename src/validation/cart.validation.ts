import Joi from "joi";

const CartSchema = Joi.object({
  userId: Joi.number().integer().required().min(1).max(100),
  productId: Joi.string().required(),
  quantity: Joi.number().min(1).max(100).required().integer()
});

export default CartSchema;
