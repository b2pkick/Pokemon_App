import { useEffect, useState} from 'react'
import {PokemonCard} from "./components/PokemonCard"
import "./app.css"

function App() {
  const [pokemon,setPokemon] = useState([])
  const [search,setSearch] = useState("")

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
  
  const searchedData = pokemon.filter((curr)=>
    curr.name.toLowerCase().includes(search.toLowerCase())
  )
  console.log(searchedData)
  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-400 to-emerald-600 select-none p-10'>
      <h1 className='text-5xl font-bold text-shadow-black heading-stroke mb-9'>Pokemon Cards</h1>
      <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)
      }} className='w-72 h-14 bg-white rounded-3xl border-4 p-3 text-2xl caret-transparent' spellCheck={false} placeholder='Search Your Pokemon'></input>
      <div className='w-full place-items-center gap-8 mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {searchedData.map(curr=>{
          return < PokemonCard key={curr.id} pokemonData={curr}/>
        })}
      </div>
    </div>
  )
}

export default App
