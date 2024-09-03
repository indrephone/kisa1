import styled from "styled-components";

// Define a styled component without expecting props for the background URL
const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://cdn.pixabay.com/photo/2015/05/29/03/11/wallpaper-788850_1280.png'); // Directly set the background image here
  background-size: cover;
  background-position: center;
  color: white;
  font-size: 36px;
  text-align: center;
`;

const about: React.FC = () => {
    return (
      <StyledAbout>
        <h2>About Us</h2>
      </StyledAbout>
    );
};

export default about;
