import { useState } from "react";

function Counter(){

  useState(0)

  return(
    <>
      <h1 className="header">Counter App</h1>
      <h3>Count: 0</h3>
      <button>Increment</button>
      <button>Decreament</button>
      <button>Reset</button>
    </>
  )
}

export default Counter;