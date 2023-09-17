import { Route, Routes,Navigate } from "react-router-dom";
import { Navbar } from "../../componet/Navar";
import MarvelPages from "../pages/Marvel";
import DcPages from "../pages/Dc";
import Hero from "../pages/Hero";
import Search from "../pages/Search";

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