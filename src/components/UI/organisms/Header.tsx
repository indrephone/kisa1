import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../atoms/Logo";
import UsersContext from "../../../contexts/UsersContext"; // Correct the import

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
`;

const StyledNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3;
    }

    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const Header = () => {
  const context = useContext(UsersContext);
  
  // Ensure context is properly used with a null check if needed
  const { loggedInUser, logOutUser } = context || { loggedInUser: null, logOutUser: () => {} };

  const handleLogout = () => {
    logOutUser();  // Call logOutUser to update context and logout the user
  };

  return (
    <StyledHeader>
      <LogoContainer>
        <div className="headerLogo">
          <Link to="/"><Logo /></Link>
        </div>
        <span>CompanyName</span>
      </LogoContainer>

      <StyledNav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </StyledNav>

      <ButtonContainer>
        {loggedInUser ? (
          <React.Fragment>
            <span>Welcome, {loggedInUser.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button><Link to="/login">Login</Link></button>
            <button><Link to="/register">Register</Link></button>
          </React.Fragment>
        )}
      </ButtonContainer>
    </StyledHeader>
  );
};

export default Header;
