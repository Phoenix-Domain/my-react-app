import { useState } from 'react';

function ProfileCard(){
  const [name, setName] = useState('Victory');

  const [age, setAge] = useState(21);

  const [location, setLocation] = useState('LFC Ozuoba');

  return(
    <>
      <p className="mt-5 ml-3 font-bold">
        Name: {name}

        <button className='border-1 py-2 px-5 rounded-full block mb-5 bg-purple-900 text-white font-bold text-xl active:bg-blue-900'>Change Name</button>
      </p>

      <p className="mt-5 ml-3 font-bold">
        Age: {age}

        <button className='border-1 py-2 px-5 rounded-full block mb-5 bg-purple-900 text-white font-bold text-xl active:bg-blue-900'>Change Age</button>
      </p>

      <p className="mt-5 ml-3 font-bold">
        Location: {location}

        <button className='border-1 py-2 px-5 rounded-full block mb-5 bg-purple-900 text-white font-bold text-xl active:bg-blue-900'>Change Location</button>
      </p>

      
    </>
  )
}

export default ProfileCard;