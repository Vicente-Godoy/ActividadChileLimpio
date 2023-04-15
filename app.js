var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
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