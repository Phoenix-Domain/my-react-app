import { useState } from 'react';
import Display from './Display'

function Counter(){
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='font-bold text-2xl text-center my-2'>
        Count: <Display count={count} />
      </h1>
    </>
  )
}

export default Counter;