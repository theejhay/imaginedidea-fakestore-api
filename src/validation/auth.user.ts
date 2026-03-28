import Joi from "joi";

export const loginSchema = Joi.object({
  Email: Joi.string().email().trim().lowercase().required(),

  password: Joi.string().min(6).required(),
});
