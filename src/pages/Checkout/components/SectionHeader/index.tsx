import { ReactNode } from "react";
import { SectionHeaderContainer } from "./styles";
import { Text } from "../../../../components/Typography";

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}
function SectionHeader({ 
  icon,
  title,
  subtitle
} : SectionHeaderProps){
  return (
    <SectionHeaderContainer>
      {icon}
      <div>
        <Text size="m" color="subtitle">{title}</Text>
        <Text size="s" >{subtitle}</Text>
      </div>
    </SectionHeaderContainer>
  );
}

export { SectionHeader };