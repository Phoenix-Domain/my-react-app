import { useState } from 'react';

function Counter (){
 const [count, setCount] = useState(0);

  return(
    <>
      <button className='border-1 py-2 px-5 rounded-full bg-blue-900 text-white font-bold text-2xl active:bg-red-900' onClick={() => {setCount(prevCount => prevCount + 1)}}>
        Count: {count}
      </button>
    </>
  )
}

export default Counter