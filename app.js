const express = require('express');
const { feedbacksRouter }= require('./routes/feedbacks')
const notFoundHandler = require('./middlewares/notFoundHandler');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/feedbacks', feedbacksRouter);

app.use(notFoundHandler);

app.use(globalErrorHandler);

module.exports = app;