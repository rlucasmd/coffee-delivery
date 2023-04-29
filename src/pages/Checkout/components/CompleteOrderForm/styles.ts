import styled from "styled-components";
import { BaseSectionStyle } from "../../styles";

const CompleteOrderFormContainer = styled.form`
  display: flex;
  flex: 1;
  margin-top: 2.5rem;
  flex-direction: column;
`;

const FormSectionContainer = styled(BaseSectionStyle)`
  margin-top: 1rem;
  flex-direction: column;
  
  background: ${({theme}) => theme.colors["base-card"]};
`;

const AddressFormContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  width: 100%;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  grid-auto-flow: dense;

  .cep{
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street{
    grid-column: span 3;
  }
  .complement{
    grid-column: span 2;
  }
`;

const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 0.75rem;
`;



export {
  CompleteOrderFormContainer,
  FormSectionContainer,
  AddressFormContainer,
  PaymentMethodOptionsContainer
};