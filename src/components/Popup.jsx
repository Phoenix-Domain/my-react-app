

function Popup({removePopUp}){

  return(
    <div>
      <div className='popup'>
        <h2>Are you sure?</h2>
        
        <div className="flex">
          <button className='yes'>Yes</button>
          <button className='no' onClick={removePopUp}>No</button>
        </div>
      </div>
      <div className="backdrop" onClick={removePopUp}></div>
    </div>
  )
}

export default Popup;