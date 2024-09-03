import styled from "styled-components";
import { AiOutlineYoutube, AiOutlineTikTok, AiOutlineFacebook, AiOutlineInstagram, AiOutlinePinterest } from "react-icons/ai";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f3f4f6;
  color: #333;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Copyright = styled.span`
  font-size: 0.75rem;
  color: #666;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <NavContainer>
                <p>Invest</p>
                <p>Careers</p>
                <p>Legal</p>
                <p>Contact</p>
            </NavContainer>
            <SocialContainer>
                <span><AiOutlineYoutube /></span>
                <span><AiOutlineTikTok /></span>
                <span><AiOutlineFacebook /></span>
                <span><AiOutlineInstagram /></span>
                <span><AiOutlinePinterest /></span>
            </SocialContainer>
            <div>
                <Copyright>
                    &copy; 2024 by Indre
                </Copyright>
            </div>
        </StyledFooter>
    );
}

export default Footer;
