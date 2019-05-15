import React from "react";
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

const StyledHamburgerBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

const StyledHamburgerIco = styled(FaBars)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primaryColor};
`;

const Hamburger = ({ onClick }) => (
  <StyledHamburgerBtn onClick={onClick}>
    <StyledHamburgerIco />
  </StyledHamburgerBtn>);

export default Hamburger;