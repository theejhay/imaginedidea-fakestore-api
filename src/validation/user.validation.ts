import Joi from "joi";

export const registerSchema = Joi.object({
  Username: Joi.string().min(2).max(50).required(),

  Email: Joi.string().email().required(),

  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  Email: Joi.string().email().required(),

  password: Joi.string().required(),
});
