import { useState } from 'react';

function Counter(){
  const [array, setArray] = useState([1,2,3,4]);

  return(
    <>
      <h1>Count: {array}</h1>
      <div>
        <button onClick={() => {
          setArray((prevArray) => [
            ...prevArray,
            prevArray.map((x) => {x + 1})
          ])
        }}>Increment</button>

        <button onClick={() => {
          setArray((prevArray) => [...prevArray, prevArray.map((x) => {x - 1})])
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