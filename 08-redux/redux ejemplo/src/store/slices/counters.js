import { createSlice } from '@reduxjs/toolkit'

const initialState = { // 
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        // Redux Toolkit nos permite escribir lógica "mutante" en reductores. Él
        // en realidad no muta el estado porque usa la biblioteca Immer,
        // que detecta cambios en un "estado borrador" y produce un nuevo
        // estado inmutable basado en esos cambios
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementtwo: (state,action) => {
        state.counter += action.payload
      },
  
  },
})

// Action creators are generated for each case reducer function
export const { increment ,decrement,incrementtwo} = counterSlice.actions

