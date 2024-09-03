import styled from "styled-components";
import React from "react";

// Define a styled component without expecting props for the background URL
const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://cdn.pixabay.com/photo/2022/02/20/20/09/field-7025238_1280.jpg'); // Directly set the background image here
  background-size: cover;
  background-position: center;
  color: white;
  font-size: 24px;
  text-align: center;
`;

const Home: React.FC = () => {
    return (
      <StyledHome>
        <h2>Welcome to Our Page</h2>
      </StyledHome>
    );
};

export default Home;
