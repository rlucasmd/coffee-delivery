import { Minus, Plus } from "phosphor-react";
import { ButtonIconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  quantity?: number;
  increment?: () => void;
  decrement?: () => void;
}

function QuantityInput({ quantity, increment, decrement }: QuantityInputProps){
  return (
    <QuantityInputContainer >
      <ButtonIconWrapper>
        <Minus size={14} weight="bold"/>
      </ButtonIconWrapper>
      <input type="number" readOnly value={1} />
      <ButtonIconWrapper>
        <Plus size={14} weight="bold"/>
      </ButtonIconWrapper>
    </QuantityInputContainer>
  );
}

export { QuantityInput };