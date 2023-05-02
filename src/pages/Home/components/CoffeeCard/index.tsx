import { ShoppingCart } from "phosphor-react";
import { Text } from "../../../../components/Typography";
import { Title } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeTitle, Tags } from "./styles";
import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoneyToBRL } from "../../../../utils/formatMoney";
import { useState } from "react";
import { Coffee } from "../../../../reducers/coffees/actions";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCardProps {
  coffee: Coffee;
}

function CoffeeCard({ coffee }: CoffeeCardProps){
  const [quantity, setQuantity] = useState(1);

  const { addCoffeeToCart } = useCart();

  function handleAddCoffeeToCart(){
    addCoffeeToCart({
      ...coffee,
      quantity
    });
  }

  function handleIncreaseQuantity(){
    setQuantity(state => state + 1);
  }
  function handleDecreaseQuantity(){
    setQuantity(state => state > 1 ? state - 1 : state);
  }
  return (
    <CoffeeCardContainer>
      <img src={`coffees/${coffee.photo}`} alt={`café ${name}`}/>
      <Tags>
        {
          coffee.tags.map(
            (tag) => (
              <span key={tag}>{tag}</span>
            )
          )
        }
      </Tags>
      <div>
        <CoffeeTitle>{coffee.name}</CoffeeTitle>
        <CoffeeDescription>
          {coffee.description}
        </CoffeeDescription>
      </div>

      <CardFooter>
        <div>
          <Text size="s">
            R$
          </Text>
          <Title size="m" color="text" as="strong">
            {formatMoneyToBRL(coffee.price)}
          </Title>
        </div>
        <AddCartWrapper>
          <QuantityInput 
            quantity={quantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
          />
          <button onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight="fill"/>
          </button>
        </AddCartWrapper>
      </CardFooter>

    </CoffeeCardContainer>
  );
}

export { CoffeeCard };