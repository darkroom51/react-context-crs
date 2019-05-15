import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  letter-spacing: ${({ theme }) => theme.mainSpacing};
  color: ${({ theme }) => theme.mainBlack};
  background: ${({ theme }) => theme.primaryColor};
  padding: 0.4rem 0.9rem;
  border: 3px solid ${({ theme }) => theme.primaryColor};
  transition: ${({ theme }) => theme.mainTransition};
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background: transparent;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const Button = ({ to, caption }) => {
  return (
    <StyledLink to={to}>
      {caption}
    </StyledLink>
  );
}

export default Button;