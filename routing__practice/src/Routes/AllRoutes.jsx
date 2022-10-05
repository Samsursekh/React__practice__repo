import React from 'react';
import { Route, Routes } from "react-router-dom";
import AboutPage from '../Components/AboutPage';
import Contact from '../Components/Contact';
import HomePage from '../Components/HomePage';
import SingleUserPage from '../Components/SingleUserPage';
import UsersPage from '../Components/UsersPage';
 const AllRoutes = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/users' element={<UsersPage />}></Route>
        <Route path='/makeup' element={<h1>MAkeUP</h1>}></Route>
        <Route path='/users/settings' element={<h1>Users settings</h1>}></Route>
        <Route path='/users/:user__id' element={<SingleUserPage />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes;
