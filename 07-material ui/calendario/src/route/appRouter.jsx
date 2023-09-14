import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoute from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRouter";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Ruta de autenticación */}
        <Route path="/auth/*" element={<AuthRoute />} />
        {/* Rutas de la aplicación de diario */}
        <Route path="/*" element={<JournalRoutes />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
  
  
  
  
  
  
  
  
  