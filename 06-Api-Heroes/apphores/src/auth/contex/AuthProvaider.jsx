// consume el contsto para que sea accesible desde cualquier componente que este dentro de su alcanze
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { Types } from "../types/types";
import AuthReducer from "./AuthReducer";



const init=()=>{ //funcion  que  guarda el estado de login   
    const user=JSON.parse( localStorage.getItem('user')); 

    return {
        logged:!!user,
        user,
    }
}
function AuthProvaider({children}) {

    const [authState, dispatch] = useReducer(AuthReducer, {},init)

    const login = (name="") => { // funcion que se encarga de hacer el login
        const user={ Id:"ABC",
        name:name}

      const  action={
            type:Types.login,
            payload:user
        } 

        localStorage.setItem('user',JSON.stringify(user)) // guarda el estado de login en el localstorage
    
        dispatch(action) 
    }
    const logout = () => { // funcion que se encarga de hacer el logout
        localStorage.removeItem('user') // elimina el estado de login en el localstorage
        const  action={type:Types.logout}
        dispatch(action)
    }
    return (<>
        <AuthContext.Provider value={{authState,login:login ,logout}}>
            {children}
        </AuthContext.Provider>
    
    
    </>  );
}

export default AuthProvaider;