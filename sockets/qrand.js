var config = require('../config')
  , qrand = require('qrand')
  ;

module.exports = function(socket, session) {
  setInterval(function() {
    qrand.getRandomHexOctets(1, function(err, octets) {
      socket.emit('data', {
        'octet': octets.join(''),
      });
    })
  }, config.sockets.update_interval_ms);  
}