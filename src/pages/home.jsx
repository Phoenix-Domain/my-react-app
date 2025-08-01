import { useEffect, useState } from 'react';
import axios from 'axios'

function Home(){

  const [users, setUsers] = useState([]);

  async function fetchData(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  },[users])
  return(
    <>
      <h1>Home</h1>
      { users.length > 0 ? <p>{users[5]?.username}</p> : <p>Loading...</p> }
    </>
  )
}

export default Home;