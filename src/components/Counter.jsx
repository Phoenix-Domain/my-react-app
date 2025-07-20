import { useState } from 'react';

function Counter(){
  const [array, setArray] = useState([]);

  return(
    <>
      <h1>Count: {array.toString()}</h1>
      <div>
        <button onClick={() => {
          setArray((prevArray) => [
            ...prevArray,
            '+1'
          ])
        }}>Increment</button>

        <button onClick={() => {
          setArray((prevArray) => [...prevArray, prevArray.forEach((x,i) => {x[i-1]})])
        }}>Decrement</button>
        <button onClick={() => {
          setArray([])
        }}>Reset</button>
      </div>
    </>
  )
}

// Create new component


export default Counter;