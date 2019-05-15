import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import LoginForm from "./LoginForm";

ReactModal.setAppElement('#root');

const StyledCloseBtn = styled(FaTimes)`
  position: absolute;
  top:10px;
  right: 10px;
  font-size: 1.5rem;
  color: ${({theme})=>theme.darkGrey};
  cursor: pointer;
`;

const styledModal = {
  position: 'absolute',
  margin: 'auto',
  width: '30rem',
  height: '28rem',
  background: 'var(--mainWhite)',
  boxShadow: 'var(--lightShadow)',
  borderRadius: '5px',
  outline: 'none'
};

const LoginModal = (props) => {

  return (
    <ReactModal
      isOpen={props.showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={props.handleCloseModal}
      style={{content:styledModal}}
      // overlayClassName="rm-overlay"
    >
      <LoginForm />
      <StyledCloseBtn onClick={props.handleCloseModal} />
    </ReactModal>
  );
}

export default LoginModal;