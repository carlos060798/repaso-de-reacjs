import { createSlice } from '@reduxjs/toolkit'
// slice para la api de pokemon mediante el consumo


export const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState:{
    page: 0,
    pokemons: [],
    isloding: false,

  },
  reducers: {
    starLoading: (state) => {
      state.isloding = true
    },
    setPokemons: (state,action) => {
      state.isloding = false
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    },
  }
})

// Action creators are generated for each case reducer function
export const {starLoading, setPokemons} = PokemonSlice.actions