import { useState } from 'react';

function ProfileCard(){
  const [input, setInput] = useState(null)

  const textValue = document.querySelector('#text')

 return(
  <>
    <form action="">
      <input type="text" id="text" className="border-2 my-5 mx-3 py-1 px-1"  onChange={() => {setInput(textValue.value)}}/>
      {/* <p>{input}</p> */}
    </form>
  </>
 )
}

export default ProfileCard;