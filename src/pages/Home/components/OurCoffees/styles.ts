import styled from "styled-components";

const OurCoffeesContainer = styled.section`
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  
  gap: 3.375rem
`;

const CoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`;

export { OurCoffeesContainer, CoffeeGrid };