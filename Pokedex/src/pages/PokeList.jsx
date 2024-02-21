import { useEffect, useState } from "react"
import GetAllPokemons from "../components/GetData"

export const PokeList=()=>{

    //const [allPokemons,setAllPokemons] = useState([])

   const getData = async()=>{
        const data= await GetAllPokemons()
        console.log(data)
    }

    useEffect(()=>{
        getData()
    })

    return(
    <>

    </>
    )
}