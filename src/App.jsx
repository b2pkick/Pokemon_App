import { useEffect, useState} from 'react'
// import {PokemonCard} from "./components/PokemonCard"

function App() {
  const [pokemon,setPokemon] = useState([])


  const API = "https://pokeapi.co/api/v2/pokemon?limit=24"
  useEffect(()=>{
    const pokemonData = async function(){
      let res = await fetch(API)
      let data = await res.json()
      const pokemonDataUrl = data.results.map(async (curr)=>{
        res = await fetch(curr.url)
        data = await res.json()
        return data
      })
      const pokemonFinalData = await Promise.all(pokemonDataUrl)
      setPokemon(pokemonFinalData)
      console.log(pokemonFinalData)
    }
    pokemonData()
  },[])


  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <h1>Pokemon Cards</h1>
      {pokemon.map(curr=>{
        return <p key={curr.id}>{curr.name}</p>
      })}
    </div>
  )
}

export default App
