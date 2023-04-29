import styled, { css } from "styled-components";

const PaymentMethodContainer = styled.div`
  input{
    appearance: none;
    visibility: hidden;
  }

  input:checked + label div{
    ${({theme}) => css`
      background: ${theme.colors["purple-light"]};
      border-color: ${theme.colors["purple-dark"]};
    `}

    &:hover{
      background: ${({theme}) => theme.colors["purple-light"]};
    }
  }
`;
const PaymentMethodContent = styled.div`
  cursor: pointer;
  padding: 0 1rem;
  display: flex;
  gap: 0.75rem;
  border: 1px solid ${({theme}) => theme.colors["base-button"]};
  color: ${({theme}) => theme.colors["base-text"]};
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  align-items: center;
  background: ${({theme}) => theme.colors["base-button"]};
  justify-content: flex-start;
  height: 3rem;

  transition: 0.4s;

  &:hover{
    background: ${({theme}) => theme.colors["base-hover"]}
  }
  svg{
    color: ${({theme}) => theme.colors.purple};
  }

  user-select: none;
`;

export { 
  PaymentMethodContainer,
  PaymentMethodContent
};