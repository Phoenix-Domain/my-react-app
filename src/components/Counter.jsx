import { useState } from 'react';

function Counter(){
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 cl>Count: {count}</h1>
    </>
  )
}

export default Counter;