import { useState } from "react";

function Counter(){

  const [array, setArray] = useState(['+1', '+3'])

  return(
    <>
      <h1 className="header">Info App</h1>

      <h3>Name: Victory</h3>
      <h3>Age: {array.join(', ')}</h3>

      <button onClick={() => {}}>Increment Age</button>

      <button onClick={() => {}}>Decrement Age</button>

      <button onClick={() => {}}>Reset Age</button>
    </>
  )
}

export default Counter;