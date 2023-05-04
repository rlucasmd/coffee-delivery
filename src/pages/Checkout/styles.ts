import styled from "styled-components";

const BaseSectionStyle = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: ${({theme}) => theme.colors["base-card"]};
  border-radius: 6px;
`;

const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  margin: 2.5rem 0;
`;


export {
  CheckoutContainer,
  BaseSectionStyle
};