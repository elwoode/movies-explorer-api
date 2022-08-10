# Бэкенд Диплома Movies Explorer API
### *Учебный проект от [Яндекс.Практикум](https://practicum.yandex.ru/web/)*

## Описание проекта
Репозиторий для дипломной работы Movies Explorer, включающий бэкенд часть приложения со следующими возможностями: авторизации и регистрации пользователей, операции с фильмами и пользователями.

## Функционал:
- Роуты для пользователей:
  - GET /users/me — возвращает информацию о пользователе;
  - PATCH /users/me — обновляет информацию о пользователе.

- Роуты для фильмов:
  - GET /movies — возвращает все фильмы из базы;
  - POST /movies — создаёт фильм с переданными в теле запроса country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU и nameEN;
  - DELETE /movies/:movieId — удаляет фильм по _id.

## Стек технологий:
- JavaScript:
  - Промисы (Promise);
  - Асинхронность и оптимизация;
  - Rest API;
- Node.js;
- Express;
- MongoDB;
- Сelebrate;
- Winston.
- express-rate-limit.
- helmet.
## Директории
* `/controllers` – содержит файлы описания моделей пользователя и фильма;
* `/models` – содержит файлы описания схем пользователя и фильма;
* `/routes` — содержит описание основных роутов для пользователя и фильма;
* `/errors` – содержит описание ошибок.

## Установка и запуск проекта:
Клонировать репозиторий:

    git clone https://github.com/elwoode/movies-explorer-api.git

Установить зависимости:

    npm install

Запустить сервер:

    npm run start

Запустить сервер с hot-reload:

    npm run dev

## Языки:
- JavaScript

## Библиотеки:
- Express

## База данных:
- MongoDB


# Ссылки:
- Backend: https://api.dumanaev.nomoredomains.xyz
- Frontend: 
  - Repository: https://github.com/elwoode/movies-explorer-frontend
  - Website: https://Dumanaev.nomoredomains.xyz

IP: 62.84.122.77
