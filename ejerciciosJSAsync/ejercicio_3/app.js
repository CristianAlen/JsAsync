
const obtenerPokemon = require("./library");

// Codigo funcion callback     

function Pokemon(obtenerPokemon){
    var poke = obtenerPokemon;
    //console.log(poke);//general

    /* Nombre */
    console.log(poke.name);//Nombre del pokemon

    /* Habilidad */
    console.log(poke.abilities);//Habilidades
    //console.log(poke.abilities[0].ability);//Una habilidad que posee
    
}


obtenerPokemon('bulbasaur', Pokemon);



// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

//obtenerPokemon();