const express = require('express');
const Route = express.Router();

const Controller = require('../Controller/MoviesController');

Route.get('/List',Controller.getMovies);
Route.post('/List',Controller.postMovies);

module.exports = Route




