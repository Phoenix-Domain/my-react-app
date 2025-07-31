import { useState } from "react";

function Counter(){

  const [user, setUser] = useState({name: 'victory', age: 21})

  return(
    <>
      <h1 className="header">Info App</h1>

      <h3>Name: {user.name.toUpperCase()}</h3>
      <h3>Age: {user.age}</h3>

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