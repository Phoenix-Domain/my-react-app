import { useState } from 'react';
import Display from './Display'
import Controls from './Controls'

function Counter(){
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 className='font-bold text-2xl text-center my-2'>
        Counter App
      </h1>

      <Display value={counter} />
      <Controls setCounter={setCounter} />
    </>
  )
}

export default Counter;