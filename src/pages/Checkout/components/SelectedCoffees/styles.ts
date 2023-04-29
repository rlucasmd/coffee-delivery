import styled from "styled-components";
import { BaseSectionStyle } from "../../styles";

const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

const DetailsSectionContainer = styled(BaseSectionStyle)`
  border-radius: 4px 44px;
  padding: 2.5rem;
`;

const ConfirmationSectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.75rem;

  div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export { 
  SelectedCoffeesContainer,
  DetailsSectionContainer,
  ConfirmationSectionContainer
};