import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from "./Logo";
import StyledLoginBtn from "./StyledLoginBtn";
import Hamburger from "./Hamburger";

const StyledNavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 2rem;
  background: ${({ theme }) => theme.offWhite};
  z-index: 1;
`;

const StyledNavCenter = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;

    button {
      margin-left: auto;
    }
  }
`;

const StyledNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledNavLinks = styled.ul`
  height: ${({ isOpen }) => (isOpen ? '160px' : '0')};
  overflow: hidden;
  transition: var(--mainTransition);
  list-style-type: none;

  a {
    display: block;
    text-decoration: none;
    padding: 1rem 0;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--mainSpacing);
  }

  a:hover {
    color: var(--primaryColor);
  }

  ${({ theme }) => theme.mq.tablet} {
    height: auto;
    display: flex;
    margin-left: 4rem;

    a {
      margin: 0 1rem;
      padding: .7rem 0;
    }
  }
`;


class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <StyledNavWrapper>
        <StyledNavCenter>
          <StyledNavHeader>
            <Logo />
            <Hamburger onClick={this.handleToggle} />
          </StyledNavHeader>
          <StyledNavLinks isOpen={this.state.isOpen}>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/cars">Cars</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </StyledNavLinks>
          <StyledLoginBtn>Login</StyledLoginBtn>
        </StyledNavCenter>
      </StyledNavWrapper>
    );
  }
}

export default Navbar;
