import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRoter";

function HeroesApp() {
  return (
    <>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
    
    </>
  );
}

export default HeroesApp;
