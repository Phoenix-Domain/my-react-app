import { useState } from "react";

function Counter(){

  const [user, setUser] = useState({name: 'victory', age: 21})

  return(
    <>
      <h1 className="header">Info App</h1>

      <h3>Name: {user.name.toUpperCase()}</h3>
      <h3>Age: {user.age}</h3>

      <button>Increment</button>

      <button>Decrement</button>

      <button>Reset</button>
    </>
  )
}

export default Counter;