import { useState } from 'react';

function ProfileCard(){
  

 

 return(
  <>
    <form action="">
      <label htmlFor="name" className='block'>Name:
      <input type="text" id="name" className="border-2 my-5 mx-3 py-1 px-1"/>
      </label>

      <label htmlFor="message" className='block'>Message:
        <input type="text" id="message" className="border-2 my-5 mx-3 py-1 px-1"/>
      </label>

      <button className='border-1 py-2 px-5 rounded-full bg-blue-900 text-white font-bold text-2xl active:bg-red-900'>
        Submit Message
      </button>
    </form>

    <p></p>
  </>
 )
}

export default ProfileCard;