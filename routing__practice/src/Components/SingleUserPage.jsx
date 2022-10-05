import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function getUsers(user__id){
    return fetch("https://reqres.in/api/users/"+user__id).then(
        (res) => res.json()
    )
}
const SingleUserPage = () => {
    const [data, setData] = useState({})
    const params = useParams();
    useEffect(()=>{
       getUsers(params.user__id).then(res => {
         setData(res.data);
       })
    },[params.user__id])

    console.log(data);
  return (
    <div>
      <h1>USER ID: {params.user__id} </h1>
      {data && (
            <>
            <img src={data.avatar} />
             <h3>Name: {`${data.first_name} ${data.last_name}`}</h3>    
             <h3>Email: {`${data.email}`}</h3> 
            </>   
           )}
      <Link to="/users">Go Back</Link>
    </div>
  )
}

export default SingleUserPage;
