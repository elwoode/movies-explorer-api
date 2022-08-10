const jwt = require('jsonwebtoken');
const AuthError = require('../errors/AuthError');
const { JWT_KEY } = require('../utils/config');
const { errorMessages } = require('../utils/constants');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthError(errorMessages.authorizationErrorMessageJWT);
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (err) {
    throw new AuthError(errorMessages.authorizationErrorMessageJWT);
  }
  req.user = payload;

  next();
};
