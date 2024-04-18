const Joi = require("joi");

const createFeedbackValidationSchema = Joi.object({
    name: Joi.string().min(2).max(15),
    email: Joi.string().email(),
    message: Joi.string().min(4),
});

module.exports = createFeedbackValidationSchema;