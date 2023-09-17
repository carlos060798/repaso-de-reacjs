import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../heroues/pages/LoginPage";
import HeroesRouter from "../heroues/routes/HeroesRoute";
import PrivateRoute from "../heroues/routes/PrivateRoute";
import PublicRoute from "../heroues/routes/Public";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
             
                <Login />
            
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <HeroesRouter />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
