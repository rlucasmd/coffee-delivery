import { InputHTMLAttributes, forwardRef } from "react";
import { InputWrapper, InputContainer, InputStyled, RightText } from "./styles";

type StyledInputProps = InputHTMLAttributes<HTMLInputElement> & {
  rightText? :string;
}

const Input = forwardRef<HTMLInputElement, StyledInputProps>(
  ({ className, rightText, ...rest }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputContainer>
          <InputStyled ref={ref} {...rest}/>
          {rightText && <RightText>{rightText}</RightText>}
        </InputContainer>
      </InputWrapper>
    );
  }
);

Input.displayName = "Styled input";

// function Input({ rightText, ...rest } : Props){
//   return (
    
//   );
// }

export { Input };