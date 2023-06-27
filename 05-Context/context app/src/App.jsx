import { Navigate, Route,Routes } from "react-router-dom"

import Home from "./home"
import About from "./about"
import Login from "./Login"
import Navbar from "./Nabar"
import UserProvider from "./useContext/userProvaider"


function App() {
  

  return (
    <UserProvider>
  
    <Navbar/>
    <hr />
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/About" element={<About />} />
      <Route  path="/login" element={<Login />} />

      {/*solucion  de problema de rutas no encontradas*/}

      <Route  path="/*" element={ <Navigate to="/login" />} />
    </Routes>
     
    </UserProvider >
  )
}

export default App
