import { useState } from 'react';

function ProfileCard(){
  const [name, setName] = useState('Victory');

  const [age, setAge] = useState(21);

  const [location, setLocation] = useState('LFC Ozuoba');

  return(
    <>
      <p>Name: {name}</p>

      <p>Age: {age}</p>

      <p>Location: {location}</p>

      <button>Edit</button>
    </>
  )
}

export default ProfileCard;