
import "./Header.css";

import React from 'react'

export const Header = () => {
  return (
    <header className="header">
           <nav>
               <ul>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Pricing</a></li>
                   <li><a href="#">Terms of use</a></li>
                   <li>
                   <input type="text" placeholder="Search" />
                   </li>
               </ul>
           </nav>
   </header>
  )
}

export default Header;