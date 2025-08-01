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
  },[])
  return(
    <div>
      {users.map((user, index) => (
        <div key={index} style={{border: '1px solid red', margin:'1rem 0'}}>
          <div>Name: {user?.name}</div>
          <div>Username: {user?.username}</div>
          <div>ID: {user?.id}</div>
        </div>
      ))}
    </div>
    
  )
}

export default Home;