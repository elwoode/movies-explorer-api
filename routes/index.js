const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const { validationLogin, validationCreateUser } = require('../middlewares/validations');
const NotFound = require('../errors/NotFoundError');
const { errorMessages } = require('../utils/constants');

router.post('/signup', validationCreateUser, createUser);
router.post('/signin', validationLogin, login);

router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFound(errorMessages.notFoundOnSiteErrorMessage));
});

module.exports = router;
