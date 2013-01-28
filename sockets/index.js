var config = require('../config')
  , logger = require('winston')
  , qrand = require('qrand')
  , EventEmitter = require('events').EventEmitter
;

module.exports = function(io, sessionSockets, listeners) {  

  var emitter = new EventEmitter();

  var interval = setInterval(function() {
    qrand.getRandomHexOctets(1, function(err, octets) {
      if (err) {
        console.error(err);
        return;
      }
      if (octets === null || octets.length === 0) {
        console.error('No quantum numbers returned');
        return;
      }
      emitter.emit('data', {
        'octet': octets.join(''),
      });
    })
  }, config.sockets.update_interval_ms);  

  // Initialize socket.io to listen for long poll client requests to update feed:
  io.set('log level', config.sockets.log_level); // 3 == debug, 2 == info, 1 == warn, 0 == error
  sessionSockets.on('connection', function (err, socket, session) {
    if (err) { 
      logger.error('socket.io error on connection: ', err); 
      return;
    }
    listeners.forEach(function(listener) {
      listener(socket, session);
    });
    // So we listen on a single timer shared by all connections that requests
    // a random quantum number every second. That single timer emits the data
    // once received. Each socket in turn listens for that, and emits it back
    // to their respective clients. If a client disconnects, remove the listener
    // on the main emitter so we no longer try to send data back to that client.
    var socketListener = function(qrand) {
      socket.emit('data', qrand);
    };
    emitter.on('data', socketListener);    
    socket.on('disconnect', function() {
      emitter.removeListener('data', socketListener);
    });
  });  
}