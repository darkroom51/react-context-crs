import styled from "styled-components";

const StyledLoginBtn = styled.button`
    display: block;
    text-decoration: none;
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0.1rem;
    color: var(--mainBlack);
    background: #ff5722;
    margin: 0.3rem 0;
    padding: 0.3rem 0.7rem;
    border: 1px solid #ff5722;
    border-radius: 4px;
    transition: var(--mainTransition);
    text-transform: uppercase;
    cursor: pointer;
    justify-self: end;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export default StyledLoginBtn;
