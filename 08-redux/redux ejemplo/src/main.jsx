import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import Pokemonapp from "./Pokemon.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <Provider store={store}>
     {/* <App /> /*} */}
     <Pokemonapp />
    </Provider>
);
