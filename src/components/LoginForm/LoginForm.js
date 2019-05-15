import React from "react";
import styled from 'styled-components';
import Title from "../Title";
import useFormValidation from "./useFormValidation";
import validateAuth from "./validateForm";


const INITIAL_STATE = {
  email: "",
  password: ""
};

const LoginForm = () => {
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
      <Title title="Sign In" />
      <form onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
          // className={errors.email && "error-input"}
          error = {errors.email}
          autoComplete="off"
          placeholder="Email"
        />
        {errors.email && <StyledErrorMsg>{errors.email}</StyledErrorMsg>}
        <StyledInput
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error = {errors.password}
          name="password"
          type="password"
          placeholder="Password"
        />
        {errors.password && <StyledErrorMsg>{errors.password}</StyledErrorMsg>}
        <StyledButton disabled={isSubmitting} type="submit" className="btn-primary">
          Sign In
        </StyledButton>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
    margin: 3rem;
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
  padding: 0.6rem 1.1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid ${({ error, theme }) => error ? 'red' : theme.mainGrey};
`;

const StyledErrorMsg = styled.p`
  color: ${(props)=>props.theme.primaryColor};
  font-size: 0.7rem;
`;

export default LoginForm;