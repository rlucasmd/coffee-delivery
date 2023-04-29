import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 2.875rem;
  background: ${({theme}) => theme.colors.yellow};
  border: none;
  border-radius: 6px;
  line-height: 1.3;
  text-transform: uppercase;
  
  transition: 0.4s;

  font-weight: 700;
  font-size: 0.875rem;
  color: ${({theme}) => theme.colors.white};

  margin-top: 0.75rem;

  &:disabled{
    opacity: 0.7rem;
    cursor: not-allowed;
  }

  &:not(:disabled):hover{
    background: ${({theme}) => theme.colors["yellow-dark"]};
  }
`;

export { ButtonContainer };