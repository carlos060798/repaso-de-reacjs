import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux"
import { getPokemons } from "./store/thunks/thunkspokemon";

function Pokemonapp() {

    const dipatch= useDispatch();
    const {isloding,page, pokemons}= useSelector((state) => state.pokemon);
    useEffect(() => {
        dipatch(getPokemons())
    },[]);
    return (<>

    
    <h1>Pokemonapp</h1>
    <hr />
    <span>Loadgin: {!isloding ? 'True': 'False' }</span>
    <ul>
     { 
        pokemons.map((pokemon) => (
                <li key={pokemon.name}>
                    <p>{pokemon.name}</p>                
                </li>
            ))
        }

    </ul> 
     <button 
     disabled={isloding}
     onClick={() => dipatch(getPokemons(page))}
     
     >NEXT</button>
    </>  );
}

export default Pokemonapp;