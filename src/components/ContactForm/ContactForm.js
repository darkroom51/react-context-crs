import React from "react";
import styled from 'styled-components';
import Title from "../Title";
import useFormValidation from "./useFormValidation";
import validateAuth from "./validateForm";


const INITIAL_STATE = {
  email: "",
  fullName: "",
  message: ""
};

const ContactForm = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateAuth);

  return (
    <StyledWrapper>
      <Title title="Get in touch" />
      <form onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
          // className={errors.email && "error-input"}
          error = {errors.email}
          autoComplete="off"
          placeholder="Your email address"
        />
        {errors.email && <StyledErrorMsg>{errors.email}</StyledErrorMsg>}
        <StyledInput
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          error = {errors.fullName}
          name="fullName"
          type="text"
          placeholder="Your Name"
        />
        {errors.fullName && <StyledErrorMsg>{errors.fullName}</StyledErrorMsg>}
        <StyledTextArea
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          error = {errors.message}
          name="message"
          placeholder="Your Message"
        />
        {errors.message && <StyledErrorMsg>{errors.message}</StyledErrorMsg>}
        <StyledButton disabled={isSubmitting} type="submit" className="btn-primary">
          Send Your Message
        </StyledButton>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
    max-width: 600px;
    margin: 3rem auto 4rem auto;
`;

const StyledButton = styled.button`
  display: inline-block;
  text-decoration: none;
  letter-spacing: ${({ theme }) => theme.mainSpacing};
  color: ${({ theme }) => theme.mainBlack};
  background: ${({ theme }) => theme.primaryColor};
  padding: 0.4rem 0.9rem;
  margin-top: 1rem;
  border: 3px solid ${({ theme }) => theme.primaryColor};
  transition: ${({ theme }) => theme.mainTransition};
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background: transparent;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  letter-spacing: ${({ theme }) => theme.mainSpacing};
  color: ${({ theme }) => theme.mainBlack};
  background: ${({ theme }) => theme.offWhite};
  padding: 0.4rem 0.9rem;
  margin: 0.5rem 0;
  border: 1px solid ${({ error, theme }) => error ? 'red' : theme.mainGrey};
`;

const StyledTextArea = styled.textarea`
  display: inline-block;
  width: 100%;
  min-height: 10rem;
  letter-spacing: ${({ theme }) => theme.mainSpacing};
  color: ${({ theme }) => theme.mainBlack};
  background: ${({ theme }) => theme.offWhite};
  padding: 0.4rem 0.9rem;
  margin: 0.5rem 0;
  border: 1px solid ${({ error, theme }) => error ? 'red' : theme.mainGrey};
`;

const StyledErrorMsg = styled.p`
  color: ${(props)=>props.theme.primaryColor};
  font-size: 0.7rem;
`;

export default ContactForm;