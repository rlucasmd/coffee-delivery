import styled from "styled-components";

const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 2.5rem;
  flex-direction: column;
`;

const FormSectionContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem;
  margin-top: 1rem;
  flex-direction: column;
  
  background: ${({theme}) => theme.colors["base-card"]};
`;


export {
  CompleteOrderFormContainer,
  FormSectionContainer
};