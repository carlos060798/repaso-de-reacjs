import { useState } from "react"
import Counter from "./components/Counter"
function App() {
 let [valor, setValor] = useState(0)


const handleincrement = () => {
  setValor(valor += 1)
 }

const handledecrement = () => {
  setValor(valor-= 1)
}
const Reset=()=>{
  setValor(0)
}
  return (
    <>
     <h2>Soy tu contador {valor}</h2> 
     <Counter handleincrement={handleincrement} handledecrement={handledecrement} Reset={Reset} />
    </>
      
  )
}

export default App
