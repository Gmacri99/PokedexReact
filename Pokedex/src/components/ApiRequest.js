import axios from "axios";



export const getPokemons= async(url)=>{
    let list=[]
    try {
        const respuesta = await axios.get(url);
        list=respuesta
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
        return list
}

export const getPokemonsDetails= async(url,id)=>{
  let list=[]
  try {
      const respuesta = await axios.get(`${url}${id}/`);
      list=respuesta
    } catch (error) {
      console.error('Hubo un error al obtener los datos:', error);
    }
      return list
}