import { Route, Routes,Navigate } from "react-router-dom";
import { Navbar } from "../componet/Navar";
import MarvelPages from "../heroues/pages/Marvel";
import DcPages from "../heroues/pages/Dc";
import Hero from "../heroues/pages/Hero";
import Search from "../heroues/pages/Search";

function HeroesRouter() {
    return (<>
        <Navbar/>
    <Routes>
        <Route path="/Marvel" element={<MarvelPages />} />
        <Route path="/Dc" element={< DcPages/>} />
         
         <Route path="/search" element={<Search/>} />
         <Route path="/heroe/:id" element={<Hero/>} />
        <Route path="/" element={<Navigate to="/Marvel" />} />
    </Routes>
    </>  );
}

export default HeroesRouter;