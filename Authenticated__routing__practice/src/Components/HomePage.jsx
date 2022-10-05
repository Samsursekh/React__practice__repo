import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'

const HomePage = () => {
  const {isAuth, toggleAuth} = useContext(AuthContext);
  if(isAuth){
    return <Navigate to="/users" />;
  }
  return (
    <div>
      <h1>Home Page</h1>

      <div>
        <button onClick={toggleAuth}>LOGIN</button>
      </div>
    </div>
  )
}

export default HomePage
