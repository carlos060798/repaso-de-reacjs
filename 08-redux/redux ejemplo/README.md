# uso de reducer y redux  

redux maneja una etiqueta de provaider que se le provea el store y el componente que se va a renderizar 

# configuracion basica del store 
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
 reducer: {}
})

export default store

# se debe elevar la componete mas alto de la aplicacion en este caso de ejemplo se va elevar asta el app 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
     <App />
    </Provider>
    <App />
  </React.StrictMode>,
)

# Un "slice" es una parte del estado global de Redux que se encarga de un área específica de la aplicación.

ejemplo de un slice en codigo 

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
  
  },
})

// Action creators are generated for each case reducer function
export const { increment} = counterSlice.actions 

# ejemplo de uso de redux con contador  

import React from "react";
import { useSelector,useDispatch } from "react-redux";  // hooks de redux para las acciones  y la ejecuion de las mismas

import { increment } from "./store/slices/counters";

function App() {
  const { counter } = useSelector((state) => state.counter);  // obtiene el counter del store
  const dispatch = useDispatch(); // dispatch disara la accion de incremento de counter slices
  return (
    <>
      <div>
        <h1>Redux</h1>
        <button onClick={() =>dispatch(increment())}>
          counter is{counter}
        </button>
      </div>
    </>
  );
}

export default App;

# los thunks  son  funciones asincronas que ejecutan acciones de redux