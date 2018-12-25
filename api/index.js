import pokemons from './pokemonList.json'
function getPokemons(cb){
    setTimeout(()=>{
        cb(pokemons)
    }, 2000)
}

export default { getPokemons }