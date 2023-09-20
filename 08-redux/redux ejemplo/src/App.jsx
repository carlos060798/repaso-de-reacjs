import React from "react";
import { useSelector,useDispatch } from "react-redux";  // hooks de redux para las acciones  y la ejecuion de las mismas

import { decrement, increment, incrementtwo } from "./store/slices/counters";

function App() {
  const { counter } = useSelector((state) => state.counter);  // obtiene el counter del store
  const dispatch = useDispatch(); // dispatch disara la accion de incremento de counter slices
  return (
    <>
      <div>
        <h1>contador {counter}</h1>
        <button onClick={() =>dispatch(increment())}>
          suma
        </button>
        <button onClick={() =>dispatch(decrement())}>
          resta
        </button>
        <button onClick={() =>dispatch(incrementtwo (2))}>
          suma dos
        </button>
      </div>
    </>
  );
}

export default App;
