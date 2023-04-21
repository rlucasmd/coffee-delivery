import styled from "styled-components";

const TextWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  >p{
    
  }
`;

interface IconContainerProps {
  background: string;
}

const IconContainer = styled.div<IconContainerProps>`
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  color: ${props => props.theme.white};
  background: ${props => props.background};
`;

export { 
  TextWithIconContainer, 
  IconContainer
};
