import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'

const PrivetRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext);
    if(true){
        return <Navigate to="/" />
      }

      return children;
}

export default PrivetRoute;
