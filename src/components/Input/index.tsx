import { InputHTMLAttributes } from "react";
import { InputWrapper, InputContainer, InputStyled, RightText } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  rightText? :string;
  className?: string;
}

function Input({ rightText, className, ...rest } : Props){
  return (
    <InputWrapper className={className}>
      <InputContainer>
        <InputStyled {...rest}/>
        {rightText && <RightText>{rightText}</RightText>}
      </InputContainer>
    </InputWrapper>
  );
}

export { Input };