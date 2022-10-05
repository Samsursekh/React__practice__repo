import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

function getUsers(){
    return fetch("https://reqres.in/api/users").then(
        (res) => res.json()
    )
}
const UsersPage = () => {
    const [data, setData] = useState({});
    useEffect(()=>{
     getUsers().then((res) => {
        console.log(res);
        setData(res);
     });
    },[])
  return (
    <div>
      <h1>Users</h1>
      {data &&
        data?.data?.map((item) => {
            return(
                <div key ={item.id}>
                   <Link to={`/users/${item.id}`} >{item.first_name}</Link>
                </div>
           )
        })
      }

    </div>
  )
}

export default UsersPage;
