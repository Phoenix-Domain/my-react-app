import { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../components/User';

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
        <User user={user} key={index} />
      ))}
    </div>
    
  )
}

export default Home;