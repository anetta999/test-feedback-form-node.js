const express = require('express');
const { feedbacksRouter }= require('./routes/feedbacks')
const notFoundHandler = require('./middlewares/notFoundHandler');
const globalErrorHandler = require('./middlewares/globalErrorHandler');

const app = express();

app.use(express.json());

app.use('/feedbacks', feedbacksRouter);

app.use(notFoundHandler);

app.use(globalErrorHandler);

module.exports = app;