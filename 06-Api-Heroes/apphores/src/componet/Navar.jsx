import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const [isactive,setIsactive]= useState(false)
   const  navigate=useNavigate()

   const closeLogin=()=>{
    navigate('/login', { replace: true })
   }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5">
            
            <Link 
                className="navbar-brand" 
            
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                <NavLink 
                        className={`nav-item nav-link ${isactive ? 'active' : ''}`}
                        to="/Marvel"
                    >
                        Marvel
                    </NavLink> 
                   

                    <NavLink 
                    className={`nav-item nav-link ${isactive ? 'active' : ''}`}
to="/Dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={`nav-item nav-link ${isactive ? 'active' : ''}`}
                        to="/search"
                    >
                     Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  
                    <button className='btn nav-item nav-link ' onClick={closeLogin}>  Logout</button>
                  
                </ul>
            </div>
        </nav>
    )
}