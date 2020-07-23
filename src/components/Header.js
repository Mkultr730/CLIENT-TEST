import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const MainHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 4rem;
  background: #01d1d1;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Title = styled.div`
  h1{
    margin: 0;
    font-size: 2rem;
  }
`;

const Items = styled.nav`
  margin-left: 1.5rem;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover, a:active, a.active {
    color: white;
  }
`;

const Header = ({title, setHeader}) => {
    
  const change = () => {
    if (title === 'User') {
      setHeader('Area');
    } else if(title === 'Area') {
      setHeader('Users');
    }
  }
    
    return ( 
        <MainHeader>
          <Title>
            <h1> {title} CRUD</h1>
          </Title>
          <Items>
            <ul>
              <li onClick={change}><NavLink to="/user">Users</NavLink></li>
              <li onClick={change}><NavLink to="/area">Areas</NavLink></li>
            </ul>
          </Items>
        </MainHeader>
    );
}
 
export default Header;