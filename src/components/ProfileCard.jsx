import { useState } from 'react';

function ProfileCard(){

  const [name, setName] = useState('');
  const [message, setmessage] = useState('');
  const [output, setOutput] = useState({name:'', message:''});

  function handleSubmit(e){
    e.preventDefault();

    
  }
  return (
    <>
      <form action="" className='rounded-xl my-3 w-fit mx-auto p-2 bg-purple-900 text-white py-2 pr-10' onSubmit={e => handleSubmit(e)}>
        <label  className='block my-3 font-bold'>Name: 
          <input type="text" className='bg-white text-black p-1 ml-2' onChange={e => setName(e.target.value)}/>
        </label>
        
        <label className='block my-3 font-bold'>Message: 
          <input type="text" className='bg-white text-black p-1 ml-2' onChange={e => setmessage(e.target.value)}/>
        </label>

        <button className='bg-blue-800 py-2 px-4 rounded-full text-white font-bold hover:bg-white hover:text-blue-800 ease-in duration-200' type="submit">
          submit
        </button>
      </form>

      <article>
        <p className='block my-3 font-bold'>Name: </p>
        <p className='block my-3 font-bold'>Message: </p>
      </article>
    </>
  )
}

export default ProfileCard;