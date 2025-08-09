import { useState } from 'react';

function ProfileCard(){
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [output, setOutput] = useState({name:'', message:''})

  
  function handleSubmit(e){
    e.preventDefault();

    const finalOutput = { name, message };

    setOutput(finalOutput);

    console.log(output)
  }

 return(
  <>
    <form action="" onSubmit={e => handleSubmit(e)}>
      <label htmlFor="name" className='block'>Name:
      <input type="text" id="name" className="border-2 my-5 mx-3 py-1 px-1" onChange={e => {setName(e.target.value)}}/>
      </label>

      <label htmlFor="message" className='block'>Message:
        <input type="text" id="message" className="border-2 my-5 mx-3 py-1 px-1" onChange={e => {setMessage(e.target.value)}}/>
      </label>

      <button className='border-1 py-2 px-5 rounded-full bg-blue-900 text-white font-bold text-2xl active:bg-red-900' type="submit">
        Submit Message
      </button>
    </form>

    <p>My name is: {output.name}</p>
    <p>This is my message: {output.message}</p>
  </>
 )
}

export default ProfileCard;