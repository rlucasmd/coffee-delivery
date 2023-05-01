import { Minus, Plus } from "phosphor-react";
import { ButtonIconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  quantity: number;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
}

function QuantityInput({ 
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity

}: QuantityInputProps){
  return (
    <QuantityInputContainer >
      <ButtonIconWrapper onClick={handleDecreaseQuantity} disabled={quantity <= 1}>
        <Minus size={14} weight="bold"/>
      </ButtonIconWrapper>
      <input type="number" readOnly value={quantity} />
      <ButtonIconWrapper onClick={handleIncreaseQuantity}>
        <Plus size={14} weight="bold"/>
      </ButtonIconWrapper>
    </QuantityInputContainer>
  );
}

export { QuantityInput };