import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 6.5rem;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.background};

  >div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  min-height: 2.3rem;
  border-radius: 6px;
  border: none;
  gap: 4px;
  cursor: pointer;
  position: relative;
`;

const Location = styled(BaseButton)`
  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple"]};
  font-size: 0.875rem;
`;

const Cart = styled(BaseButton)`
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
`;

const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export { 
  HeaderContainer,
  Location,
  Cart,
  HeaderButtonsContainer
};
