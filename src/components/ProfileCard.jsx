import { useState } from 'react';

function ProfileCard(){
  const [name, setName] = useState('Victory');

  const [age, setAge] = useState(21);

  const [location, setLocation] = useState('LFC Ozuoba');

  return(
    <>
      <p>
        Name: {name}

        <button className='border-1 py-2 px-5 rounded-full bg-purple-900 text-white font-bold text-xl active:bg-blue-900'>Change Name</button>
      </p>

      <p>
        Age: {age}

        <button className='border-1 py-2 px-5 rounded-full bg-purple-900 text-white font-bold text-xl active:bg-blue-900'>Change Age</button>
      </p>

      <p>
        Location: {location}

        <button className='border-1 py-2 px-5 rounded-full bg-purple-900 text-white font-bold text-xl active:bg-blue-900'>Change Location</button>
      </p>

      
    </>
  )
}

export default ProfileCard;