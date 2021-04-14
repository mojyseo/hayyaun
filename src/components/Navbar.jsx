import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const links = [
  { name: 'Home', to: '#home' },
  { name: 'About Me', to: '#about' },
  { name: 'Skills', to: '#skills' },
  { name: 'Gallery', to: '#gallery' },
  { name: 'Contact', to: '#contact' },
];

const Navbar = ({ location }) => {
  return (
    <Container>
      <div>
        <span>Hayyan Hami</span>
      </div>
      <LinksBox>
        {links.map(({ name, to }, i) => (
          <NavLink key={i} to={to} active={location.hash === to}>
            {name}
          </NavLink>
        ))}
      </LinksBox>
    </Container>
  );
};

export default Navbar;

const LinksBox = styled.div`
  display: flex;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  height: 64px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #ffffff15;
  font-family: 'Poppins';
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
  backdrop-filter: blur(20px) brightness(150%);
`;
