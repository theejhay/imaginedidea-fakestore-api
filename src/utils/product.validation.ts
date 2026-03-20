import Joi from "joi";

export const createCommentSchema = Joi.object({
    articleId: Joi.string().required(),
    userId: Joi.string().required(),
    text: Joi.string().min(1).max(500).required()
});