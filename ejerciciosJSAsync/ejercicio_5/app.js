
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function Persona(obtenerPersonaFake){
    var PersonaFake = obtenerPersonaFake.results[0];
    
    //console.log(PersonaFake);
    console.log('Nombre: ' + PersonaFake.name.title + ' ' + PersonaFake.name.first + ' ' + PersonaFake.name.last);
    console.log('Genero: ' + PersonaFake.gender);
    console.log('Pais: ' + PersonaFake.location.country + ' | Estado: ' + PersonaFake.location.state + ' | Ciudad: ' + PersonaFake.location.city + ' | Calle: ' + PersonaFake.location.street.name + ' ' + PersonaFake.location.street.number + ' | CP: ' + PersonaFake.location.postcode);
    console.log('Email: ' + PersonaFake.email);
    console.log('Nombre de Usuario: ' + PersonaFake.login.username);
    console.log('Password: ' + PersonaFake.login.password);
}
// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(Persona);
