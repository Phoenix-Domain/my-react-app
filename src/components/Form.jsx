import { useState } from 'react';

function Form(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return(
    <form action="">
      <article>
        <label> Name:
          <input type="text" className='border-1 block mb-4 p-0.5 bg-gray-300' />
        </label>
        <label>Email
          <input type="text" className='border-1 block mb-4 p-0.5 bg-gray-300' />
        </label>
        <label>Message
          <input type="text" className='border-1 block mb-4 p-0.5 bg-gray-300' />
        </label>
      </article>

      <button className="text-white font-bold bg-blue-700 py-2 px-4 rounded-full active:bg-red-700 mb-4">
        Submit
      </button>
    </form>
  )
}

export default Form