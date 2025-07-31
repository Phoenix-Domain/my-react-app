import { useState } from 'react';
import Popup from './Popup';

function Todo({ task }){
  const [popUpCard, setPopUpCard] = useState(false);


  return(
    <>
      <h2>{task}</h2>
      <button onClick={() => {
        setPopUpCard(true)
      }}>Delete</button>
      {popUpCard && <Popup/>}
    </>
  )
}

export default Todo;