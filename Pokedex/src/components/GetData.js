import { getPokemons, getPokemonsDetails } from "./ApiRequest"
import { URLS } from "./URL"

export default async function GetAllPokemons(){

  const getAllData= []
  const AllPokemons=[]
    const pokemons=await getPokemons(URLS.pokemons)
    const getPokemon=pokemons.data.results
    if(getPokemon.length > 0){
      getPokemon.forEach(async element => {
        let pokemon= await getPokemonsDetails(URLS.pokemonDetail,element.name)
        AllPokemons.push(pokemon.data)
      });
    }
    console.log(AllPokemons)
    getAllData.push(AllPokemons)
    console.log(getAllData)

  return getAllData;

}