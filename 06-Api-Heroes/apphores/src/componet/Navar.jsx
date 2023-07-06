import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
   const[isactive,setIsActive]=useState(false)
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
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
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className={`nav-item nav-link ${isactive ? 'active' : ''}`}
                        to="/Login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}