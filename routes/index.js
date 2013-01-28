var home_page = require('./home-page')
  , config = require('../config')
;

module.exports = function(app) {  
  home_page(app);
}