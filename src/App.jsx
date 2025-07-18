import Popup from "./components/Popup";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [popUpOpen, setPopUpOpen] = useState(false);
  
  
  return (
    <>
      <Todo task="Learn React" />
      <Todo task="Build a project" />
      <Todo task="Apply for jobs" />
      <Todo task="Chill and flex" />
      {popUpOpen && <Popup /> /*if statement*/} 
    </>
  )
}

export default App
