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
        
      ))}
    </div>
    
  )
}

export default Home;