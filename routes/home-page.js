var logger = require('winston')
  , config = require('../config')
;

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('home-page', {});
  });
}