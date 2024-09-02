import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../atoms/Logo";


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 20px;
    `;
// Container to group logo and company name on the left
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between the logo and the company name */
  font-size: 1.5rem;
`;
const StyledNav = styled.nav`
flex: 1; /* Allows the nav to expand and center the links */
display: flex;
justify-content: center;

ul {
  display: flex;
  gap: 20px; /* Space between the nav items */
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
// Right side buttons
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Space between the buttons */

  button {
    padding: 8px 16px;
    border: none;
    background-color: #007bff; /* Example button color */
    color: white;
    cursor: pointer;
    border-radius: 4px;
    
    a {
      color: white;
      text-decoration: none;
    }
  }

  button:hover {
    background-color: #0056b3; /* Darker color on hover */
  }
`;


const Header = () => {
    return ( 
        <StyledHeader>
           <LogoContainer>
            <div  className="headerLogo"><Link to='/'><Logo /></Link></div>
            <span>CompanyName</span>
            </LogoContainer> 

            <StyledNav>
               <ul>
                <li><NavLink to=''>Home</NavLink></li>
                <li><NavLink to='about'>About</NavLink></li>
               </ul>
            </StyledNav>
            <ButtonContainer>
                <button><Link to='/login'>Login</Link></button>
                <button><Link to='/register'>Register</Link></button>
            </ButtonContainer>
        </StyledHeader>
     );
}
 
export default Header;