import { useState } from "react";

function Counter(){

  const [count, setCount] = useState(0)

  return(
    <>
      <h1 className="header">Counter App</h1>

      <h3>Count: {count}</h3>

      <button onClick={() => {
        setCount(prevCount => prevCount + 1)
      }}>Increment</button>

      <button onClick={() => {
        setCount(prevCount => prevCount - 1)
      }}>Decrement</button>

      <button onClick={() => {setCount(0)}}>Reset</button>
      <button type="reset">Reset</button>
    </>
  )
}

export default Counter;