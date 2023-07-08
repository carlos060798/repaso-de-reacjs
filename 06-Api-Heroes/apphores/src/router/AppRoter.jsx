import { Route, Routes } from "react-router-dom";

import Login from "../heroues/pages/LoginPage";
import HeroesRouter from "./HeroesRoute";


function AppRouter() {
    return (<>
    <Routes>
     
        <Route  path="/login" element={<Login/>} />
        <Route path="/*" element={<HeroesRouter />} />
    </Routes>
    </>
    
   
     )
}

export default AppRouter ;