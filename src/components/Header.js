import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.header`
  align-items: center;
  display: flex;
  height: 75px;
  justify-content: space-between;
  padding: 20px;
`;

const Logo = styled.span`
  font-size: 40px;
  font-weight: 800;
`;

const StyledLink = styled(NavLink)`
  font-size: 20px;
  margin: 20px;
  text-decoration: none;
`;

const Header = (props) => {
  return (
    <>
      <Nav>
        <Logo>Fruit Emporium</Logo>
        <div>
          <StyledLink
            exact
            to="/"
            // stylize the link when active
            activeStyle={{
              color: "purple",
              textDecoration: "underline",
              fontWeight: "bolder",
            }}
          >
            Home
          </StyledLink>
          <StyledLink
            exact
            to="/about"
            // stylize the link when active
            activeStyle={{
              color: "purple",
              textDecoration: "underline",
              fontWeight: "bolder",
            }}
          >
            About
          </StyledLink>
        </div>
      </Nav>
    </>
  );
};

export default Header;
