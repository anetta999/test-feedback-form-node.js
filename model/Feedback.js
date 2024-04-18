const { Schema, model } = require("mongoose");

const schema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    },
  message: {
    type: String,
    required: true,
  },
});

const Feedback = model("feedback", schema);

module.exports = Feedback;