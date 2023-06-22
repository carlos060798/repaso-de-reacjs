
import { useState } from "react";
import useCounter from "../hooks/useCounter";


export function MemoEjemplo() {
  const {counter,increment}= useCounter(1);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        counter <small>{counter}</small>
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={()=> increment()}>
        +1
      </button> 
      <button className="btn btn-primary" onClick={()=>setShow(!show)}>
        show / hide {JSON.stringify(show)}
      </button>
    </>
  );
}


