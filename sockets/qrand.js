var config = require('../config')
  , qrand = require('qrand')
  ;

module.exports = function(socket, session) {
  setInterval(function() {
    qrand.getRandomHexOctets(1, function(err, octets) {
      if (err) {
        console.error(err);
        return;
      }
      if (octets === null || octets.length === 0) {
        console.error('No quantum numbers returned');
        return;
      }
      socket.emit('data', {
        'octet': octets.join(''),
      });
    })
  }, config.sockets.update_interval_ms);  
}