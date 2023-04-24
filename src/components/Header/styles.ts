import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 6.5rem;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.background};

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
  background-color: ${({ theme }) => theme.colors["purple-light"]};
  color: ${({ theme }) => theme.colors["purple"]};
  font-size: 0.875rem;
`;

const Cart = styled(BaseButton)`
  position: relative;
  background-color: ${({ theme }) => theme.colors["yellow-light"]};
  color: ${({ theme }) => theme.colors["yellow-dark"]};
  overflow: visible;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors["yellow-dark"]};
    font-size: ${({theme}) => theme.textSizes["text-bold-s"]};
    font-weight: 700;
  }
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

