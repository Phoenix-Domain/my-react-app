import { useState } from 'react';

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Increment</button>

        <button onClick={() => {setCount(prevCount => prevCount - 1)}}>Decrement</button>
        <button onClick={() => {setCount(0)}}>Reset</button>
      </div>
    </>
  )
}


export default Counter;