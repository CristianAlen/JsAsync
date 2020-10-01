
const obtenerChiste = require("./library");

// Codigo funcion callback

function ContameElChiste(algo){
    var modeloChiste = algo[0];
    console.log(modeloChiste.id);
    console.log(modeloChiste.type);
    console.log(modeloChiste.setup);
    console.log(modeloChiste.punchline);
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(ContameElChiste);
