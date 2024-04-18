const Joi = require("joi");

const createFeedbackValidationSchema = Joi.object({
    name: Joi.string().min(2).max(15).required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(4).required(),
});

module.exports = createFeedbackValidationSchema;