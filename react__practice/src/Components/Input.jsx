import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [state, setState] =useState("");
   
    const handleSubmit =(event)=> {
        event.preventDefault();
        console.log(event.target);
    }

 const handleChange =(event)=> {
    // event.preventDefault();
    // console.log(event.target.value);
 }




  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text"value="text" placeholder='Enter Name Here' />
        <input type="password" value="number" placeholder='Enter Password Here' />
        <button onChange={handleChange}>Submit</button>
        </form>
    </div>
  )
}

export default Input
