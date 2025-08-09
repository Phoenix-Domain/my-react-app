import { useState } from 'react';

function ProfileCard(){
  return (
    <>
      <form action="" className='border-1 p-2'>
        <label className='block my-3 font-bold'>Name: 
          <input type="text" className='border-1 p-1 ml-2'/>
        </label>
        
        <label className='block my-3 font-bold'>Message: 
          <input type="text" className='border-1 p-1 ml-2'/>
        </label>

        <button className='bg-blue-800 py-2 px-4 rounded-full text-white font-bold' type="submit">
          submit
        </button>
      </form>
    </>
  )
}

export default ProfileCard;