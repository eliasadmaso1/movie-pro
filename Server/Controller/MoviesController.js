const movieModel = require('../Models/MovieModel');

async function getMovies(req, res) {
    try {
      await movieModel.find({}, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function postMovies(req, res) {
    try {
      await movieModel.insertMany(req.body, (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    } catch (e) {
      console.log(e);
    }
  }

  module.exports = {
    getMovies,
    postMovies,
  };
