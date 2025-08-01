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
    <div style={{border:'1px solid red', padding:'1rem'}}>
      {
        users.length > 0 ? <div>
        <div>Name: {users[0]?.name}</div>
        <div>Username: {users[0]?.username}</div>
        <div>ID: {users[0]?.id}</div>
        </div> : <div>Loading...</div>
      }
    </div>
  )
}

export default Home;