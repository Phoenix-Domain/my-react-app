import { useState } from "react";

function Counter(){

  const [user, setUser] = useState(['+1', '+3'])

  return(
    <>
      <h1 className="header">Info App</h1>

      <h3>Name: Victory</h3>
      <h3>Age: {user.join(', ')}</h3>

      <button onClick={() => {
        setUser(prevUser => ({
          ...prevUser,
          age: prevUser.age + 1
        }))
      }}>Increment Age</button>

      <button onClick={() => {
        setUser(prevUser => ({
          ...prevUser,
          age: prevUser.age - 1
        }))
      }}>Decrement Age</button>

      <button onClick={() => {
        setUser(prevUser => ({
          ...prevUser,
          age:21
        }))
      }}>Reset Age</button>
    </>
  )
}

export default Counter;