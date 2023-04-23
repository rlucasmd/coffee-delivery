import styled from "styled-components";


const QuantityInputContainer = styled.div`
  display: flex;
  gap: 4px;
  flex: 1;
  height: 100%;
  border-radius: 6px;
  background: ${({theme}) => theme.colors["base-button"]};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0 0.5rem;

  input{
    width: 100%;
    text-align: center;
    border: none;
    background: transparent;
    
    &:focus{
      outline: 0;
    }
  }
`;

const ButtonIconWrapper = styled.button.attrs({
  type: "button"
})`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.purple};
  background: none;
  border: none;
  transition: 0.4s;

  &:hover:not(:disabled){
    color: ${({theme}) => theme.colors["purple-dark"]};
  }

  &:disabled{
    cursor: not-allowed;
  }
`;



export { QuantityInputContainer, ButtonIconWrapper };