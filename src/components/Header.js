import React from "react";
import thisIsAnImage from "./../img/tickets.png";
import './../styles/Header.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
`;

function Header(){
  return (
    <React.Fragment>
      <HelpQueueHeader>
        <h1>Help Queue</h1>
      </HelpQueueHeader>
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