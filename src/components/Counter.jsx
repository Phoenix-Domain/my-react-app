import { useState } from 'react';

function Counter(){
  const [user, setUser] = useState({name:'victory', age:21});

  return(
    <>
      <h1>Count: {user.age}{user.name}</h1>
      <div>
        <button onClick={() => {
          setUser(prevUser => ({
            ...prevUser,
            age: prevUser.age + 1
          }))
        }}>Increment</button>

        <button onClick={() => {
          setUser(prevUser => ({
            ...prevUser,
            age: prevUser.age - 1
          }))
        }}>Decrement</button>
        <button onClick={() => {
          setUser(prevUser => ({
            ...prevUser,
            age: 21
          }))
        }}>Reset</button>
      </div>
    </>
  )
}


export default Counter;