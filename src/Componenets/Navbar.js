import React from "react";
import { Link } from "react-router-dom";
import '../Style/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-h">
          <h2>
            <Link to='Body'>Furns</Link> 
            </h2>
        </div>
        <div className="nav-p">
          <p id="ho">
          <Link to='/'>Home</Link>
            </p>
          <p>About</p>
          <p>Shop</p>
          <p>Cart</p>
          <p>Contact</p>
        </div>
        <div id="nav-btn">
          <button id="btn-1">Log in</button>
          <p>Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
