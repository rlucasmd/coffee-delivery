import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex: 1;
`;
const InputContainer = styled.div`
  display: flex;
  flex: 1;
  height: 2.625rem;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid ${({theme}) => theme.colors["base-button"]};
  background: ${({theme}) => theme.colors["base-input"]};
  border-radius: 4px;

  &:focus-within{
    border-color: ${({theme}) => theme.colors["yellow-dark"]};
  }
`;

const InputStyled = styled.input`
  display: flex;
  height: 100%;
  flex: 1;
  border: 0;
  padding: 0 0.75rem;
  background: transparent;
  &:focus{
    outline: none;
  }
  
`;
const RightText = styled.p`
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  font-style: italic;
  margin: 0 0.75rem;
`;

export { 
  InputWrapper, 
  InputContainer, 
  RightText, 
  InputStyled 
};

