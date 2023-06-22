import { useCallback, useState } from "react";
import {Show} from "./showincrement";
// manejo del usecallback sirve para rememorar una funcion y no se vuelva a renderizar
function UseCalbackEjemplo() {
    const [counter, setCounter] = useState(1);
    const increment= useCallback(()=>{
        setCounter((value)=>value+1);

    },[]);
    
    return (<>
    <h1>counter {counter}</h1>
    <Show incrementUno={increment}/>
    </>  );
}

export default UseCalbackEjemplo;