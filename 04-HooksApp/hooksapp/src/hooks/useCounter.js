import { useState } from "react";


function useCounter(initvalue=10) {
    const [counter, setCounter] = useState(initvalue)
    const increment = () => {

    setCounter(counter+1)
    } 
    const decrement = () => {
     setCounter(counter-1)
    }

    const reset = () => {
     setCounter(initvalue)
    }
    return {counter
    , increment, decrement, reset };
}

export default useCounter;