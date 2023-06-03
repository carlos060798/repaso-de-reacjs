function Counter(props) {

// eslint-disable-next-line react/prop-types
const {handleincrement, handledecrement,Reset} = props
    return ( <>
  <button onClick={handleincrement}>Incrementar</button>
  <button onClick={handledecrement}>Decrementar</button>
<button onClick={Reset}>Reset</button>
    
    
    </> );
}

export default Counter;