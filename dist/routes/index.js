"use strict";

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.json({
      status: 'API Fran-Gym'
    });
  });
};