import styled from "styled-components";

const BaseSectionStyle = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: ${({theme}) => theme.colors["base-card"]};
  border-radius: 6px;
`;

const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
`;


export {
  CheckoutContainer,
  BaseSectionStyle
};