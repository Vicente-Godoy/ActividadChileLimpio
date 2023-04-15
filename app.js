var rut = document.getElementById('rut');
var appaterno = document.getElementById('appaterno');
var apmaterno = document.getElementById('apmaterno');
var nombre = document.getElementById('nombre');
var fecnac = document.getElementById('fecnac');
var edad = documet.getElementById('edad');
var genero = document.getElementById('genero');
var email = document.getElementById('email');
var fono = document.getElementById('fono');
var profesion = document.getElementById('profesion');
var carta = document.getElementById('carta');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
   console.log('Enviando Formulario...');

 }

var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();

    var mensajesError = [];

    if(nombre.value === null || nombre.value === '' ){
        mensajesError.push('Ingrese su Nombre');
    }
    if(password.value === null || password.value === '' ){
        mensajesError.push('Ingrese su Password');
    }
    error.innerHTML = mensajesError.join(', ');

    return false;
    });