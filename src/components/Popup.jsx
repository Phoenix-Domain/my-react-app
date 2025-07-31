

function Popup({removePopUp}){

  return(
    <div className='popup'>
      <h2>Are you sure?</h2>
      
      <button className='yes'>Yes</button>
      <button className='no' onClick={removePopUp}>No</button>
    </div>
  )
}

export default Popup;