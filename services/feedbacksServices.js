const Feedback = require("../model/Feedback");

const createFeedbackService = async (body) => {
  return await Feedback.create(body);
};

module.exports = createFeedbackService;