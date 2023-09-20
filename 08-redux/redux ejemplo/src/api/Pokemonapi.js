// solicitud  ala api de pokemon mediante axios

import axios from "axios";

export const Pokemonaxios= axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    });
