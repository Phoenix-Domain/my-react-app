import Popup from "./Popup";

function Todo({ task }){

  return (
    <>
      <h1>{ task }</h1>
      <button>Delete</button>
    </>
  )
}

export default Todo