import { Navigate, Route, Routes } from "react-router-dom";
import MarvelPages from "../heroues/pages/Marvel";
import DcPages from "../heroues/pages/Dc";
import Login from "../heroues/pages/LoginPage";
import { Navbar } from "../componet/Navar";


function AppRouter() {
    return (<>
    <Navbar/>
    <Routes>
        <Route path="/Marvel" element={<MarvelPages />} />
        <Route path="/Dc" element={< DcPages/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Navigate to="/Marvel" />} />
    </Routes>
    </>
    
   
     )
}

export default AppRouter ;