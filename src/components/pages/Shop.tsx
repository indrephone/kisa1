import styled from "styled-components";
import React from "react";

// Define a styled component without expecting props for the background URL
const StyleProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-image: url(''); // Directly set the background image here
  background-size: cover;
  background-position: center;
  color: red;
  font-size: 36px;
  text-align: center;
`;

const Shop: React.FC = () => {
    return (
      <StyleProducts>
        <h2>Products</h2>
        <div>
            
        </div>
      </StyleProducts>
    );
};

export default Shop;