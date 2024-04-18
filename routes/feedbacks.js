const express = require('express');
const createFeedback = require("../controllers/feedbacksController");
const createFeedbackValidationSchema = require("../utils/validation/feedbackValidationSchema");
const validationWrapper = require("../utils/validationWrapper");

const router = express.Router();

router.route('/').post(validationWrapper(createFeedbackValidationSchema), createFeedback);

module.exports = {
    feedbacksRouter: router,
}