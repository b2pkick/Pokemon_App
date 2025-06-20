export function PokemonCard(props){
    return(
        <>
            <div className="h-96 w-72 border-8 flex flex-col border-blue-300 rounded-2xl bg-white items-center group hover:scale-105 transition-all duration-500">
                <div className="w-full h-[80%] flex justify-center items-center relative group">
                    <div className="absolute w-40 h-24 border-0 rounded-[20%_40%_30%_60%/30%_50%_60%_90%] bg-cyan-200 group-hover:rounded-[60%_20%_70%_30%/40%_80%_30%_60%] transition-all duration-500"></div>
                    <div className="w-16 h-16 z-30">
                        <img src={props.pokemonData.sprites.other.showdown.front_default} className="w-16 h-16"></img>
                    </div>
                </div>
                <h2 className="text-3xl mb-3">{props.pokemonData.name}</h2>
                <div className="w-full h-full grid grid-cols-2 gap-2 p-2 place-items-center">
                    <div className="border-4 w-fit rounded-2xl p-1 h-fit text-[18px] border-cyan-700 min-w-32 flex justify-center items-center">id:{props.pokemonData.id}</div>
                    <div className="border-4 w-fit rounded-2xl p-1 h-fit text-[18px] border-cyan-700 min-w-32 flex justify-center items-center">weight:{props.pokemonData.weight}</div>
                    <div className="border-4 w-fit rounded-2xl p-1 h-fit text-[18px] border-cyan-700 min-w-32 flex justify-center items-center">height:{props.pokemonData.height}</div>
                    <div className="border-4 w-fit rounded-2xl p-1 h-fit text-[18px] border-cyan-700 min-w-32 flex justify-center items-center">exp:{props.pokemonData.base_experience
}</div>
                    <div className="border-4 w-fit rounded-2xl p-1 h-fit text-[18px] border-cyan-700 min-w-32 flex justify-center items-center">order:{props.pokemonData.order}</div>
                    <div className="border-4 w-fit rounded-2xl p-1 h-fit text-[18px] border-cyan-700 min-w-32 flex justify-center items-center">weight:{props.pokemonData.weight}</div>
                </div>
            </div>
        </>
    )
}