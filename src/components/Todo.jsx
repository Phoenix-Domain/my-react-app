import { useState } from 'react';
import Popup from './Popup';

function Todo({ task }){
  const [popUpCard, setPopUpCard] = useState(false);
  

  function displayPopUp(){
    setPopUpCard(true);
  }

  function removePopUp(){
    setPopUpCard(false);
  }

  return(
    <>
      <h2>{task}</h2>
      <button onClick={() => {displayPopUp()}}>Delete</button>
      {popUpCard && <Popup removePopUp={removePopUp}/>}
    </>
  )
}

export default Todo;