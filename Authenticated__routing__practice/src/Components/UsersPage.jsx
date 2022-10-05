import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function getUsers({ page = 1})
 
{
    return fetch(`https://reqres.in/api/users?page=${page}`).then(
        (res) => res.json()
    )
}
const UsersPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {isAuth} = useContext(AuthContext)
  const [data, setData] = useState({});
  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);
  const [text ,setText] = useState(searchParams.get("q") || "");

    useEffect(()=>{
     getUsers({page}).then((res) => {
        console.log(res);
        setData(res);
     });
    },[page])

    useEffect(()=> {
      setSearchParams({page, q : text})
    },[page,text, setSearchParams])
    // if(true){
    //   return <Navigate to="/" />
    // }
  return (
    <div>
      <h1>Users</h1>

      <input placeholder='Type Something' type="text" value={text} onChange={(e)=>setText(e.target.value)}/>

       {/* 👇👇not like this because it can create issues of use experiences 👆👆*/}
        
         {/* <button onClick={()=> navigate("/")}>Go Home</button> */}
     
       {/*👆👆 not like this because it can create issues of use experiences 👆👆*/}
   
   <button disabled={page === 1} onClick={()=> setPage(page-1)}>PREV</button>
   <button>{page}</button>
   <button disabled={page === 2} onClick={()=> setPage(page+1)}>NEXT</button>
   <br />
     <Link to="/">
       <button>Go Home</button>
     </Link>

      {
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
