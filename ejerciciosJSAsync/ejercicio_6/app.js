
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then((x) => {
    PersonaFake = x.results[0];
    console.log(PersonaFake);
    console.log('Nombre: ' + PersonaFake.name.title + ' ' + PersonaFake.name.first + ' ' + PersonaFake.name.last);
    console.log('Genero: ' + PersonaFake.gender);
    console.log('Pais: ' + PersonaFake.location.country + ' | Estado: ' + PersonaFake.location.state + ' | Ciudad: ' + PersonaFake.location.city + ' | Calle: ' + PersonaFake.location.street.name + ' ' + PersonaFake.location.street.number + ' | CP: ' + PersonaFake.location.postcode);
    console.log('Email: ' + PersonaFake.email);
    console.log('Nombre de Usuario: ' + PersonaFake.login.username);
    console.log('Password: ' + PersonaFake.login.password);
});
