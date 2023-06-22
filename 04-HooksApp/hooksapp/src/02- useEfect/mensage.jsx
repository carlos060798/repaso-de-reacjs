import { useEffect } from "react";

function Mensage() {

    // use efect con return para evitar segir consumiendo recursos en caso de una  api o peticiones https
 useEffect(() => {
    console.log("componente montado");

  return ()=>{
    console.log("componente desmontado");
  }
 },[]);
    return ( <>
    <h3>usuario exite</h3>
    </>  );
}

export default Mensage;
