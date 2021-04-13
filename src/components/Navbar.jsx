import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <Container>
      <div>
        <span>Hayyan Hami</span>
      </div>
      <LinksBox>
        <NavLink active>Home</NavLink>
        <NavLink>About Me</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Gallery</NavLink>
        <NavLink>Contact</NavLink>
      </LinksBox>
    </Container>
  );
};

export default Navbar;

const LinksBox = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  height: 64px;
  border-bottom: 1px solid #fff1;
  font-family: 'Poppins';
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
`;
