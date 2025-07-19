import { useState } from 'react';

function Counter(){
  const [array, setArray] = useState([]);

  return(
    <>
      <h1>Count: {array}</h1>
      <div>
        <button onClick={() => {
          setArray((prevArray) => [
            ...prevArray,
            '+1'
          ])
        }}>Increment</button>

        <button onClick={() => {
          setArray((prevArray) => [...prevArray, -1])
        }}>Decrement</button>
        <button onClick={() => {
          setArray([])
        }}>Reset</button>
      </div>
    </>
  )
}


export default Counter;