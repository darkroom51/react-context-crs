import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCarAlt } from "react-icons/fa";

const StyledLink = styled(Link) `
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const StyledIcon = styled(FaCarAlt) `
  font-size: 2.5rem;
  color: var(--primaryColor);
`;

const StyledTypo = styled.h2`
  padding: 0;
  margin: 0 15px;
  color: var(--mainBlack);
`;


const Logo = () => {
  return (
    <StyledLink to="/">
      <StyledIcon />
      <StyledTypo>RentCar</StyledTypo>
    </StyledLink>
  )
}

export default Logo;
