import styled from "styled-components";
import backgroundImageCover from "../../../../assets/background.png";
import { rgba } from "polished";
import { Title } from "../../../../components/Typography";

const IntroductionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34rem;
  background: ${({ theme: {colors} }) => `url(${backgroundImageCover}) no-repeat center,
      linear-gradient(
        0deg,
        ${colors.white} 0%,
        ${rgba(colors.background, 0.2)} 50%,
        ${colors.background} 100%
      )`};
  background-size: cover;
`;
const IntroductionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;
  width: 100%;

  div > section {
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
  } 
`;
const IntroductionTitle = styled(Title)`
  margin-bottom: 1rem;
`;

const BenefitsContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`;
export { 
  IntroductionContainer,
  IntroductionContent,
  IntroductionTitle,
  BenefitsContainer
};