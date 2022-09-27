import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


function getData({page}){
   return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then(
    res=>{
       return res.json();
    })
   
}




const Posts = () => {
const [loading,setLoading] = useState(false)
const [page,setPage] = useState(1);

  useEffect(()=>{
    handleFetchData(page);
  },[page]);

const [posts,setPosts] = useState([])
const handleFetchData = async(page=1)=> {
    try{
        setLoading(true);
       const data = await getData({page});
       setPosts(data);
       setLoading(false)
      //  console.log(data);
    }
    catch(err){
      setLoading(false);
        console.log("error");
    }
}    
console.log(posts);

const handlePageChange =(changeBy) => {
  setPage(page+changeBy);
  // handleFetchData(page+changeBy);    or i can pass page in the 
  // dependancy array itself
}

if(loading){
  return <h3>Loading</h3>
}
  return (
    <div>
      <h3>Posts</h3>
        {/* {loading && <h3>Loading</h3>}      */}
      {/* <button onClick={handleFetchData}>GET POSTS</button> */}
     <ul>
        {
            posts.map(item=> <li id={item.id} key={item.id}>  {item.title}</li>)
        }
     </ul>
     <button onClick={()=>handlePageChange(-1) } disabled={page === 1}>PREV</button>
     <button>{page}</button>
     <button onClick={()=> handlePageChange(+1)} disabled={page === 10}>NEXT</button>
    </div>
  )
}

export default Posts
