const { errorMessages } = require('../utils/constants');

module.exports = (err, _, res, next) => {
  const { statusCode = 500, message } = err;
  if (err.kind === 'ObjectId') {
    res.status(400).send({
      message: errorMessages.validationErrorMessage,
    });
  } else {
    res.status(statusCode).send({
      message: statusCode === 500
        ? errorMessages.serverErrorMessage
        : message,
    });
  }
  next();
};
