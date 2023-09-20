import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counters.js'
import { PokemonSlice } from './slices/Pokemonslice.js'

const store = configureStore({
 reducer: {
  counter: counterSlice.reducer,
    pokemon: PokemonSlice.reducer,

 }
})

export default store