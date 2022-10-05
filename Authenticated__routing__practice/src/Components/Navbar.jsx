import React from 'react';
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const links = [
    {
      path:"/",
      title:"Home"
    },
    {
      path:"/about",
      title:"About"
    },
    {
      path:"contact",
      title:"Contact"
    },
    {
      path:"users",
      title:"Users"
    }
  ];

  // const activeStyle = {
  //   color:"red",
  //   textDecoration:"none"

  // }
  // const defaultStyle = {
  //   textDecoration:"none",
  //   color:"black"
  // }

  return (
    <div>

<Link to="/makeup">MAkeUP</Link>

      {/* {
        links.map((link) => {
          return <Link key={link.path} to={link.path}>{link.title}</Link>
        })
      }   */}

      {/*👇👇 upper code and lower code both are same 👇👇*/}
{
  links.map((link) =>  
    //  <NavLink style={({isActive}) => (isActive ? activeStyle : defaultStyle)}
    <NavLink className={({isActive}) => 
      isActive ? styles.active : styles.default
    }
    key={link.path} 
    to={link.path}
  >
     {link.title}
     </NavLink>
    )
}
    </div>
  )
}

export default Navbar;
