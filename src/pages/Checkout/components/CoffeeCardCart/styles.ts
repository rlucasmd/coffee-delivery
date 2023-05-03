import styled from "styled-components";

const CoffeeCartCardContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({theme}) => theme.colors["base-button"]};

  > div{ 
    display: flex;
    align-items: center;
    gap: 1.25rem;
    img {
      height: 4rem;
      width: 4rem;
    }
  }
  > p{
    font-size: 1rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors["base-title"]};
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  height: 2rem;
  margin-top: 0.5rem;

  align-items: center;
  gap: 0.75rem;

  > div {
    max-width: 4.5rem;
  }
`;

const RemoveButton = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: 8px;
  background: ${({theme}) => theme.colors["base-button"]};
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({theme}) => theme.colors["base-text"]};

  transition: 0.4s;

  svg{
    color: ${({theme}) => theme.colors.purple};
  }

  &:hover{
    background: ${({theme}) => theme.colors["base-hover"]};
  }
`;

export { 
  CoffeeCartCardContainer,
  ActionsContainer,
  RemoveButton
};