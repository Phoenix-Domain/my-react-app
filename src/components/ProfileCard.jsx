import { useState } from 'react';

function ProfileCard(){
  const [name, setName] = useState('Victory');

  const [age, setAge] = useState(21);

  const [location, setLocation] = useState('LFC Ozuoba');

  return(
    <>
      <p>Name: </p>

      <p>Age: </p>

      <p>Location: </p>

      <button>Edit</button>
    </>
  )
}

export default ProfileCard;