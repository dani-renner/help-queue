import React from "react";
import thisIsAnImage from "./../img/tickets.png";
import './../styles/Header.css';
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={thisIsAnImage} alt="tickets" width="300px" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;