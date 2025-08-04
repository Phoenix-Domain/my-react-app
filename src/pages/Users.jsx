import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'


function Users(){
  const { id } = useParams();
  const [data, setData] = useState([])

  async function getData(){
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    setData(data);
  }

  useEffect(() => {
    getData();
  },[])

  return(
    <div>
      <h1>{data.name}</h1>
      <h2>{data.username}</h2>
      <h3>{data.id}</h3>
    </div>
  )
}

export default Users;