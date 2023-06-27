
import { useState } from "react";
import { userContext} from "./UserContext";
// provaider es un componente que envuelve a los componentes hijos y les envia datos que estos comparten consus hijos
/*const user={
    name:"jose",
    age:23,
    email:"foo@example.com  "
}*/


const UserProvider=({children})=>{
 const[user,setUser]=useState() // se usa para consumir el contexto  general sin props
   return(
  // <userContext.Provider value={{hola:"mundo", user:user}}>
  <userContext.Provider value={{user,setUser}}>
  {children}
   </userContext.Provider>
   ) 
}

export default UserProvider


// se coloca en el punto mas alto de la aplicacion dond elos hijos nesesiten la data