import { useState } from 'react';
import Display from './Display';
import Controls from './Controls';

function Counter(){
  const [counter, setCounter] = useState(0);

  return(
    <>
      <h1 className='text-center text-5xl font-bold text-purple-800'>Counter App</h1>

      <Display counter={counter}/>

      <Controls setCounter={setCounter} />
    </>
  )
}

export default Counter;