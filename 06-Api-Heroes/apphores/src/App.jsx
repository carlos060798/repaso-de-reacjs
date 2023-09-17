import AppRouter from "./router/AppRoter";
import AuthProvaider from "./auth/contex/AuthProvaider";

function HeroesApp() {
  return (
    <>
     <AuthProvaider>

     <AppRouter />
     </AuthProvaider>
     
        
        
   
     

    </>
  );
}

export default HeroesApp;
