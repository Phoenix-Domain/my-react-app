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
      <button>Decreament</button>
      <button>Reset</button>
    </>
  )
}

export default Counter;