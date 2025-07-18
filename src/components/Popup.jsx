function Popup({ percent, name, age }) {
  const task = `Are you ${percent}% sure`;

  function confirmation(){
      console.log(name)
    }
  function log(e){
    console.log(e.target.value);
  }
  return (

    <>
      <div className="popup">
        <h1 className="PopQuestion">
          {task} {name}?
        </h1>
        <p>You are just {age} years old</p>
        <div className="flex">
          <button
            className="yes"
            onClick={confirmation}
          >
            Yes
          </button>
          <button className="no">No</button>
        </div><br />

        <label htmlFor="">Name</label>
        <input type="text" placeholder="Your Name" onChange={log} />
      </div>
    </>
  );
}

export default Popup;
