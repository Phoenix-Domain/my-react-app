import { useState } from 'react';

function Counter (){
 const [count, setCount] = useState(0);

  return(
    <>
      <button>Count: {count}</button>
    </>
  )
}

export default Counter