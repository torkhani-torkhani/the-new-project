import React from 'react'
import { NavLink} from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <h2>transaction tracker</h2>
      </nav>
      <div>
        <NavLink to="/">dashBoard</NavLink>
        <NavLink to="/add">addTransaction</NavLink>
      </div>
    </div>
  )
}

export default Navbar
