import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Text } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { formatMoneyToBRL } from "../../../../utils/formatMoney";
import { CartItem } from "../../../../reducers/coffees/actions";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

function CoffeeCartCard({ coffee } : CoffeeCartCardProps){
  const { updateCoffeeCartQuantity, removeCoffeeFromCart } = useCart();
  function handleIncreaseCoffeeQuantity(){
    updateCoffeeCartQuantity(coffee.id, "increase");
  }
  function handleDecreaseCoffeeQuantity(){
    updateCoffeeCartQuantity(coffee.id, "decrease");
  }
  function handleRemoveCoffeeFromCart(){
    removeCoffeeFromCart(coffee.id);
  }
  return(
    <CoffeeCartCardContainer>
      <div>
        <img src={`coffees/${coffee.photo}`} />
        <div>
          <Text size="m" color="subtitle">
            {coffee.name}
          </Text>
          <ActionsContainer>
            <QuantityInput 
              quantity={coffee.quantity}
              handleDecreaseQuantity={handleDecreaseCoffeeQuantity}
              handleIncreaseQuantity={handleIncreaseCoffeeQuantity}
            />
            <RemoveButton onClick={handleRemoveCoffeeFromCart}>
              <Trash size={16}/>
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>{`R$ ${formatMoneyToBRL(coffee.price)}`}</p>
    </CoffeeCartCardContainer>
  );
}

export { CoffeeCartCard };