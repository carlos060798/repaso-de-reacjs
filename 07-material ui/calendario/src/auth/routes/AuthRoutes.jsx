import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/LoginPages";
import Registrer from "../pages/RegsiterPage";

function AuthRoute() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="registro" element={<Registrer />} />
      {/* Esta ruta redirecciona a /auth/login por defecto */}
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
}

export default AuthRoute;