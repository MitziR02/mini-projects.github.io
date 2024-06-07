// Estableciendo la fecha objetivo
let fechaObjetivo = new Date('December 31, 2024 23:59:59').getTime();

// Declarando Variables
let diasElem = document.querySelector('.countD-dias-time');
let horasElem = document.querySelector('.countD-horas-time');
let minutosElem = document.querySelector('.countD-min-time');
let segundosElem = document.querySelector('.countD-sec-time');

// Actualizando el temporizador cada segundo
let intervalo = setInterval(function() {
    let ahora = new Date().getTime();
    let diferencia = fechaObjetivo - ahora;

    // Calculo de días, horas, minutos y segundos
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Monstrando en pantalla
    diasElem.textContent = dias;
    horasElem.textContent = horas;
    minutosElem.textContent = minutos;
    segundosElem.textContent = segundos;

    // Si la cuenta regresiva terminó
    if (diferencia < 0) {
        clearInterval(intervalo);
        document.querySelector('.titulo h1').textContent = "¡Ha llegado el Año Nuevo!";
    }
}, 1000);
