import { useNavigate } from "react-router-dom";

function Login() {
    const  navigate=useNavigate()

    const onLoginApp=()=>{
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