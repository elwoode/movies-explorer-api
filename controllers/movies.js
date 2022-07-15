const Movie = require('../models/movie');
const BadRequest = require('../errors/BadRequest');
const NotFound = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const { errorMessages } = require('../utils/constants');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => {
      if (!movies) {
        throw new NotFound(errorMessages.notFoundErrorDBMessage);
      }
      res.send(movies);
    })
    .catch(next);
};

const createMovie = (req, res, next) => {
  const owner = req.user._id;

  Movie.create({ owner, ...req.body })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequest(errorMessages.validationErrorMessage);
      }
      next(err);
    })
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  const userId = req.user._id;
  const { movieId } = req.params;

  Movie.findById(movieId)
    .orFail(() => {
      throw new NotFound(errorMessages.movieNotFoundErrorMessage);
    })
    .then((movie) => {
      if (movie.owner.toString() === userId) {
        return Movie.findByIdAndRemove(movieId)
          .then((deletedMovie) => res.send(deletedMovie))
          .catch(next);
      }
      throw new ForbiddenError(errorMessages.forbiddenErrorMessage);
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
