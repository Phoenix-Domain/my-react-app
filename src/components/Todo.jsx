import Popup from "./Popup";

function Todo(){

  let task;
  return(
    <>
    <label htmlFor="task">Input Your Task:</label>
    <input type="text" onChange={(e) => {
      task = e.target.value;
    }} />
    <Popup task= {task} />
  </>
  )
}

export default Todo