import{useContext} from 'react'
import { userContext } from './useContext/UserContext'

export default function Login() { 
  const {user,setUser}=useContext(userContext) // se usa para consumir el contexto  general sin props
  return (
    <div>
      <h1>Login</h1> 
     <pre>
         {JSON.stringify(user,null,3)}
     </pre>


     <button className='btn btn-primary' onClick={()=>setUser({
    name:"jose",
    age:23,
    email:"foo@example.com  "
})}>login</button>
    </div>
  )

}