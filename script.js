// Obtener la zona horaria de España (UTC+2)
var timezoneOffset = 2;

// Fecha y hora objetivo (viernes 26 de mayo de 2023 a las 22:00 en España)
var targetDate = new Date('May 26, 2023 22:00:00 GMT+0200').getTime();

// Actualizar el contador cada segundo
var countdown = setInterval(function() {
  var now = new Date().getTime();
  var distance = targetDate - now;

  // Ajustar la diferencia de zona horaria
  distance -= timezoneOffset * 60 * 60 * 1000;

  // Cálculos para días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el contador en el elemento con id "countdown"
  document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

  // Si la cuenta regresiva termina, mostrar un mensaje
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = '¡Tiempo terminado!';
  }
}, 1000);
