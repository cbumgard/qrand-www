$(document).ready(function() {
  var socket = io.connect(window.location.href);
  socket.on('data', function(data) {
    $('.current').removeClass('current');
    var octetSpan = '<span class="current octet">' + data.octet + '</span> ';
    $('#octets').append(octetSpan).show();
  });
});