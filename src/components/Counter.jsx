import { useState } from 'react';

function Counter(){
  const [user, setUser] = useState([1,5,6,9,4]);

  return(
    <>
      <h1>Count: {user[0]}</h1>
      <div>
        <button>Increment</button>

        <button>Decrement</button>
        <button>Reset</button>
      </div>
    </>
  )
}


export default Counter;