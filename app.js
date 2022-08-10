const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const helmet = require('helmet');
const errorHandler = require('./middlewares/handelError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/rate-limiter');
const { errorMessages } = require('./utils/constants');
const { ENV_PORT, DB_URL } = require('./utils/config');
const routes = require('./routes');

const app = express();

app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(cors());
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error(errorMessages.serverDeadErrorMessage);
  }, 0);
});

app.use('/', routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
mongoose.connect(DB_URL, () => {
  console.log('Connection successful');
});
app.listen(ENV_PORT, () => {
  console.log(`Запуск сервера ${ENV_PORT}`);
});
