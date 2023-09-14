import { Routes, Route, Navigate } from "react-router-dom";
import JournalPage from "../page/JournalPage";

function JournalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      {/* Esta ruta redirecciona a / por defecto */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default JournalRoutes;