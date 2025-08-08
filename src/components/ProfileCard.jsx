import { useState } from 'react';

function ProfileCard(){
  const [input, setInput] = useState(null)

  const textValue = document.querySelector('#text')

 return(
  <>
    <form action="">
      <label htmlFor="name" className='block'>Name:
      <input type="text" id="name" className="border-2 my-5 mx-3 py-1 px-1"  onChange={() => {setInput(textValue.value)}}/>
      </label>

      <label htmlFor="message" className='block'>Message:
        <input type="text" id="message" className="border-2 my-5 mx-3 py-1 px-1"  onChange={() => {setInput(textValue.value)}}/>
      </label>
      <p>{input}</p>
    </form>
  </>
 )
}

export default ProfileCard;