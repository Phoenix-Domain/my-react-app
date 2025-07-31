import { useState } from "react";

function Counter(){

  const [user, setUser] = useState({name: 'victory', age: 12})

  return(
    <>
      <h1 className="header">Counter App</h1>

      <h3></h3>

      <button>Increment</button>

      <button>Decrement</button>

      <button>Reset</button>
    </>
  )
}

export default Counter;