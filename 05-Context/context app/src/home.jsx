import { useContext } from "react";
import { userContext } from "./useContext/UserContext";

function Home() {
    const {user} = useContext(userContext)
    return ( <>
      <h1>home <small>{user?.name}</small></h1> 
      <pre>
         {JSON.stringify(user,null,2)}
     </pre>
    </> );
}

export default Home;