import styled from "styled-components";

const SuccessfulOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
  gap: 2.5rem;

  h1{
    color: ${({theme}) => theme.colors["yellow-dark"]};

  }

  > section{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const OrderDetailsContainer = styled.div`
  display: flex;
  padding: 2.5rem;

  /* max-width: 32rem; */

  flex-direction: column;
  gap: 2rem;

  position: relative;
  border-radius: 6px 36px;
  background: ${({theme}) => theme.colors.background};
  min-width: 32rem;

  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(
    ${({theme}) => theme.colors.background}, 
    ${({theme}) => theme.colors.background}), 
    linear-gradient(102deg, #dbac2c 2.61%, #8047f8 98.76%);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  /* &::before{
    content: "";
    position: absolute;
    z-index: -1;
    inset: -1px;
    
    border-radius: 6px 36px;
    background: 
  } */
`;

export { 
  SuccessfulOrderContainer,
  OrderDetailsContainer
};