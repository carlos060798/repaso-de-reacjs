import { useRef } from "react";

function UserefEJEMPLO() {

const inputvalue = useRef();
    return ( <>
        <h1>useRef</h1>
        <input  ref={inputvalue}  />
       <button onClick={()=>{console.log(inputvalue.current.value)}}>Click</button>
        
    </> );
}

export default UserefEJEMPLO;