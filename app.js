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
    
    if(rut.value === null || rut.value === '' || rut.value.length >= 9 || rut.value.length <=10){
        mensajesError.push('Ingrese su Rut');
    }    
    if(appaterno.value === null || appaterno.value === '' || appaterno.value.length >= 3 || appaterno.value.length <= 20){
        mensajesError.push('Debe ingresar su Apellido Paterno');
    }    
    if(apmaterno.value === null || apmaterno.value === '' || apmaterno.value.length >= 3 || apmaterno.value.length <= 20){
        mensajesError.push('Debe ingresar su Apellido Materno');
    }    
    if(nombre.value === null || nombre.value === '' || nombre.value. length >= 3 || nombre.value.length <= 20){
        mensajesError.push('Debe ingresar su Nombre');
    }    
    if(fecnac.value === null || fecnac.value === ''){
        mensajesError.push('Debe ingresar su Fecha de Nacimiento');
    }   
    if(edad.value === null || edad.value === '' || edad.value.length >= 18 || edad.value.length <= 35){
        mensajesError.push('Debe ingresar su Edad');
    }    
    if(genero.value === null || genero.value === '' ){
        mensajesError.push('Debe seleccionar un género');
    }    
    if(email.value === null || email.value === '' ){
        mensajesError.push('Ingrese su Nombre');
    }    
    if(fono.value === null || fono.value === '' || fono.value.length >= 9 || fono.value.length <= 12){
        mensajesError.push('Ingrese su Nombre');
    }    
    if(profesion.value === null || profesion.value === '' ){
        mensajesError.push('Ingrese su Nombre');
    }    
    if(carta.value === null || carta.value === '' ){
        mensajesError.push('Es necesario agregar una carta de presentación');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
    });