function Popup({ percent, name, age }) {
  const task = `Are you ${percent}% sure`;
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
            onClick={() => {
              console.log(name);
            }}
          >
            Yes
          </button>
          <button className="no">No</button>
        </div>
      </div>
    </>
  );
}

export default Popup;
