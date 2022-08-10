const mongoose = require('mongoose');
const isUrl = require('validator/lib/isURL');
const { errorMessages } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isUrl(url),
      message: errorMessages.badRequestErrorMessage,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isUrl(url),
      message: errorMessages.badRequestErrorMessage,
    },
  },
  thumbnail: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
}, {
  versionKey: 'false',
});

module.exports = mongoose.model('movie', movieSchema);
