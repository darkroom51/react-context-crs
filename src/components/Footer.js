import React from "react";
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: inline-block;
  width:100%;
  background: rgba(0, 0, 0, 0.5);
  color: var(--mainWhite);
  padding: 2rem 1rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: ${({ theme }) => theme.mainSpacing};
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <p>This site is just a playground React App. It is not a real website :) !!!!1111!!</p>
    </StyledWrapper>
  );
};

export default Footer;
