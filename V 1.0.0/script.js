// Obtener el elemento del contador de tiempo
let daysLabel = document.getElementById('countdown__timer--days');
let hoursLabel=document.getElementById('countdown__timer--hours');
let minutesLabel=document.getElementById('countdown__timer--minutes');
let secondsLabel=document.getElementById('countdown__timer--seconds');

// Establecer la fecha de finalización del contador
const countdownDate = new Date('Jul 09 2023 18:00:00 GMT-0500');

// Actualizar el contador cada segundo
var countdownInterval = setInterval(function(){
    
    //Obtener fecha actual y milisegundos
    let now = new Date();

    //Obtener las distancias entre ambas fechas
    let distance = (countdownDate - now +1000)/1000;
  
    // Calcular los dias, horas, minutos y segundos restantes  
    let days = Math.floor(distance / (3600 * 24));
    let hours= ('0'+Math.floor(distance / 3600 % 24)).slice(-2);
    let minutes = ('0'+Math.floor(distance / 60 % 60)).slice(-2);
    let seconds = ('0'+Math.floor(distance % 60)).slice(-2);
  
    // Mostrar el contador en el elemento
    daysLabel.textContent=days;
    hoursLabel.textContent=hours;
    minutesLabel.textContent=minutes;
    secondsLabel.textContent=('0' + seconds).slice(-2);
    
}, 1000);





