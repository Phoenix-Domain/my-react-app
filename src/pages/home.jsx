import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
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
        <Link key={user.id} to={`/users/${user.id}`}>
          <User user={user} key={index} />
        </Link>
      ))}
      </div>
    
    
  )
}

export default Home;