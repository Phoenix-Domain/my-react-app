import { useState } from 'react';

function ProfileCard(){
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [output, setOutput] = useState({name, message})

  
  function handleSubmit(e){
    e.preventDefault();

    console.log(name)
  }

 return(
  <>
    <form action="">
      <label htmlFor="name" className='block'>Name:
      <input type="text" id="name" className="border-2 my-5 mx-3 py-1 px-1"/>
      </label>

      <label htmlFor="message" className='block'>Message:
        <input type="text" id="message" className="border-2 my-5 mx-3 py-1 px-1"/>
      </label>

      <button className='border-1 py-2 px-5 rounded-full bg-blue-900 text-white font-bold text-2xl active:bg-red-900' onClick={e => handleSubmit(e)}>
        Submit Message
      </button>
    </form>

    <p>My name is: {name}</p>
    <p>This is my message: {message}</p>
  </>
 )
}

export default ProfileCard;