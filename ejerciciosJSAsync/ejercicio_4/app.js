
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("bulbasaur").then((poke) => {
    pokemon = poke;
    habilidad = poke.abilities;
    
    console.log('Nombre: ' + pokemon.name);//Nombre
    console.log('Habilidades: ' + habilidad[0].ability.name);//habilidad 1
    console.log('Habilidades: ' + habilidad[1].ability.name);//habilidad 2

})
