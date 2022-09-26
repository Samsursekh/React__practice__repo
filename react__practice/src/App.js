// import logo from './logo.svg';
// import Counter from './Components/Counter';
// import './App.css';
// import Input from './Components/Input';

import { useState } from "react";
import Posts from "./Components/Posts";

function App() {

  return (
    <div className="App" style={{textAlign:"center" }}>

    <Posts />
    </div>
  );
}

export default App;
//   const [text,setText] = useState("");
//  const [todos,setTodos] =useState([]);



//   const handleChange =(e)=> {
//     setText(e.target.value)
//   };

//   const handleAdd = () => {
//     setTodos([
//       ...todos,
//       {title: text, 
//         status:false, 
//         id:Date.now().toString()
//        } 
      
//     ])
//     setText("");
//   }
// console.log(todos);
// console.log(todos.length);

 
    {/* <br />
    <br />
    <br />
     <input value={text} onChange= {handleChange} placeholder="Enter Something Here" />
     <button disabled={todos.length === 5} onClick={handleAdd}>ADD</button>

    <div>
      <ul>
      {
        todos.map(item=> <li key={item.id} >{item.title} </li>)
      }
      </ul>
    </div> */}






      {/* <Counter /> */}
      {/* <br /> */}
      {/* <Input /> */}
  
