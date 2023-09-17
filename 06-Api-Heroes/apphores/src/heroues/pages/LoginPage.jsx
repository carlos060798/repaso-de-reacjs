import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/contex/AuthContext";
import { useContext } from "react";

function Login() {
    const {login}=useContext(AuthContext)
    const  navigate=useNavigate()

    const onLoginApp=()=>{
        login("carlos")
     navigate('/Marvel', { replace: true }  );
    }
 
    return (<>
    <div className="container mt-5">
     <h1> login</h1>
     <button className='btn btn-primary'
      onClick={onLoginApp}
     >login</button>
    </div>
    </>  );
}

export default Login;