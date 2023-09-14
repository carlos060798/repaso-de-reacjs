import { Navigate, Route, Router, Routes } from "react-router-dom";
import Login from "../pages/LoginPages";
import Registrer from "../pages/RegsiterPage";

// componentes de rutas de autenticacion
function AuthRoute() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registrar" element={<Registrer />} />
        7
        <Router path="*/" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
}

export default AuthRoute;
