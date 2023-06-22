import useCounter from "../hooks/useCounter";

function CounterwithuseCounter() {

const {counter,increment,decrement,reset} = useCounter();
    return (<>

    <h1>counter with useCounter : {counter} </h1>
    <button className="btn" onClick={increment}>+1</button>
    <button className="btn" onClick={reset}>reset</button>
    <button className="btn"onClick={decrement}>-1</button>
    
    </>  );
}

export default  CounterwithuseCounter ;