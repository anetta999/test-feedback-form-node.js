const createFeedbackService = require("../services/feedbacksServices");
const controllerWrapper = require("../utils/controllerWrapper");

const createFeedback = controllerWrapper(async (req, res) => {
  const newFeedback = await createFeedbackService(req.body);
  res.status(201).json(newFeedback);
});

module.exports = createFeedback;