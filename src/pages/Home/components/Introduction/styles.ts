import styled from "styled-components";
import backgroundImageCover from "../../../../assets/background.png";
import { rgba } from "polished";

const IntroductionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${backgroundImageCover}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.white} 0%,
        ${rgba(theme.background, 0.2)} 50%,
        ${theme.background} 100%
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
    gap: 1rem;
  } 
`;
const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.3;
  color: ${props => props.theme["base-title"]};
`;
const Subtitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 26px;

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
  Title,
  Subtitle,
  BenefitsContainer
};