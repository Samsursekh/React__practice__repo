import React from 'react'
import { useState } from 'react'

const Counter = () => {
    // const { initial } = props;
    const [state, setState] = useState(0);
    
    const handleAdd =()=> {
    setState(state+1);
    }
    const handleDelete =()=> {
     setState(state-1);
    }
   
    const handleReset =()=> {
        setState(0);
    }

  return (
    <div>
         <h1>Counter: {state} </h1>
      <button disabled={state===10} onClick={handleAdd}>ADD NUMBER</button>
      <button disabled={state === 0} onClick={handleDelete}>REMOVE NUMBER</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  )
}

export default Counter
