import { useState } from "react";

function Counter(){

  const [array, setArray] = useState(['+1', '+3'])

  return(
    <>
      <h1 className="header">Info App</h1>

      <h3>Name: Victory</h3>
      <h3>Age: {array.join(', ')}</h3>

      <button onClick={() => {
        setArray(prevArray => [...prevArray, '+1'])
      }}>Increment Age</button>

      <button onClick={() => {
        setArray(prevArray => [...prevArray, '-1'])
      }}>Decrement Age</button>

      <button onClick={() => {
        setArray([])
      }}>Reset Age</button>
    </>
  )
}

export default Counter;