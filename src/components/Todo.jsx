import { useState, useEffect } from 'react';
import Popup from './Popup';

function Todo({ task }){
  const [popUpCard, setPopUpCard] = useState(false);
  

  function displayPopUp(){
    setPopUpCard(true);
  }

  function removePopUp(){
    setPopUpCard(false);
  }

  useEffect(() => {
    console.log('component mounted')
  }, [])
  return(
    <>
      <h2>{task}</h2>
      <button onClick={() => {displayPopUp()}}>Delete</button>
      {popUpCard && <Popup removePopUp={removePopUp}/>}
    </>
  )
}

export default Todo;