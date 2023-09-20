import { Pokemonaxios } from "../../api/Pokemonapi";
import { starLoading, setPokemons} from "../slices/Pokemonslice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getstate) => {
    dispatch(starLoading());
  /* consulta de la api con fech
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );
    const data = await response.json();
    console.log(data);*/
   //consulta mediante axios
   const {data}= await Pokemonaxios.get(`/pokemon?limit=10&offset=${page * 10}`);
   console.log(data);

   
    dispatch(setPokemons({ pokemons: data.results, page: page+1 }));
  };
};
