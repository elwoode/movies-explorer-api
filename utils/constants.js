const errorMessages = {
  validationErrorMessage: 'Переданы некорректные данные',
  notFoundUserErrorMessage: 'Пользователь по указанному _id не найден',
  emailConflictErrorMessage: 'Пользователь с таким e-mail уже существует',
  forbiddenErrorMessage: 'В доступе отказано',
  notFoundErrorDBMessage: 'Данные не найдены!',
  movieNotFoundErrorMessage: 'Фильм с указанным _id не найден',
  authorizationErrorMessageJWT: 'Необходима авторизация',
  badRequestErrorMessage: 'Некорректный адрес URL',
  authorizationErrorMessageLogin: 'Неправильный e-mail или пароль',
  validationEmailErrorMessage: 'Некорректый адрес почты',
  notFoundOnSiteErrorMessage: 'Запрашиваемая страница не существует',
  serverErrorMessage: 'На сервере произошла ошибка',
  serverDeadErrorMessage: 'Сервер сейчас упадёт',
};

module.exports = { errorMessages };
