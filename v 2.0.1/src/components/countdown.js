export function countdown(countdownDate , setDowDate ) {

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
         setDowDate({days: days, hours:hours,minutes:minutes,seconds:seconds})

}