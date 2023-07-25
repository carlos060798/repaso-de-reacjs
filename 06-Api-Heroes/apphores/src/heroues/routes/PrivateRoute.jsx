import { useContext } from "react";
import { AuthContext } from "../../auth/contex/AuthContext";
import { Navigate }  from "react-router-dom";

// este comoponete r controlas las rutas privadas
function PrivateRoute({children}) {
    const {logout}= useContext(AuthContext) //extrae la funcion de login del contexto
    return (logout) 
    ? children : 
    <Navigate to="/login"/>; // si esta logeado muestra el componente si no lo esta redirecciona al login

}

export default PrivateRoute;