import React from 'react'
import { useState } from 'react'

export const AuthContext = React.createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const toggleAuth = () => setIsAuth(!isAuth);
  return (
     <AuthContext.Provider value={{isAuth, toggleAuth}}>
       {children}
     </AuthContext.Provider>
  )
}

export default AuthContextProvider;
