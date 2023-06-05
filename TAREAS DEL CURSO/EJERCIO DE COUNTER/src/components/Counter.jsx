import { useState } from 'react';
import PropTypes from 'prop-types';

export  default  function Counter ({ value }){
    
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => { 
        // console.log(event)
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    }

    const handleSubstract = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    );
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}



/*function Counter(props) {

// eslint-disable-next-line react/prop-types
const {valor,handleincrement, handledecrement,Reset} = props
    return ( <>
    <h2>Soy tu contador {valor}</h2> 
  <button onClick={handleincrement}>+1</button>
  <button onClick={handledecrement}>-1</button>
<button onClick={Reset}>Reset</button>
    
    
    </> );
}

export default Counter;*/