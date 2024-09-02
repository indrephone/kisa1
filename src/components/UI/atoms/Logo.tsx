// src/components/UI/atoms/Logo.tsx
import React from 'react';
import styled from 'styled-components';

// Styled component for the logo
const StyledLogo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

// Logo component
const Logo = () => {
  // Reference the image correctly from the public folder
  return <StyledLogo src="/runningCatLogo.jpeg" alt="Logo" />;
};

export default Logo;