import { IconContainer, TextWithIconContainer } from "./styles";
import { ReactNode } from "react";

interface TextWithIconProps {
  icon: ReactNode;
  content: string | ReactNode;
  backgroundColor: string;
}

function TextWithIcon({icon, content, backgroundColor}: TextWithIconProps){
  return (
    <TextWithIconContainer>
      <IconContainer background={backgroundColor}>{icon}</IconContainer>
      {typeof content === "string" ? <p>{content}</p> : content}
    </TextWithIconContainer>
  );
}

export { TextWithIcon };