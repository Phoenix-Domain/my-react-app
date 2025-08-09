import { useState } from 'react';

function ProfileCard(){
  return (
    <>
      <form action="" className='rounded-xl mt-3 w-fit mx-auto p-2 bg-purple-900 text-white py-2 pr-10'>
        <label className='block my-3 font-bold'>Name: 
          <input type="text" className='border-1 p-1 ml-2'/>
        </label>
        
        <label className='block my-3 font-bold'>Message: 
          <input type="text" className='border-1 p-1 ml-2'/>
        </label>

        <button className='bg-blue-800 py-2 px-4 rounded-full text-white font-bold hover:bg-white hover:text-blue-800 ease-in duration-200' type="submit">
          submit
        </button>
      </form>
    </>
  )
}

export default ProfileCard;