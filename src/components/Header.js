import React from "react";
import thisIsAnImage from "./../img/tickets.png";
import './../styles/Header.css';

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={thisIsAnImage} alt="An image of tickets" width="300px" />
    </React.Fragment>
  );
}

export default Header;