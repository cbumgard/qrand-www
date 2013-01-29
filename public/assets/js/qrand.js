$(document).ready(function() {
  var socket = io.connect(window.location.href);
  socket.on('data', function(data) {
    $('#placeholder').hide('slow');
    $('.current').removeClass('current');
    var octetSpan = '<span class="current octet" style="display:none">' + data.octet + '</span> ';
    $('#octets').append(octetSpan);
    $('.current').fadeIn('slow');
  });
});