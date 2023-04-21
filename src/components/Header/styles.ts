import styled from "styled-components";

const HeaderContainer = styled.nav`
  margin: 0 calc((100vw - 1120px) / 2);
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  div{
    display: flex;
    gap: 8px;
  }
`;

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  border: 0;
  gap: 2px;
  cursor: pointer;
`;

const Location = styled(BaseButton)`
  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};
  font-size: 0.875rem;
  

`;

const Cart = styled(BaseButton)`
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
`;

export { 
  HeaderContainer,
  Location,
  Cart
};

