import { ShoppingCart } from "phosphor-react";
import { Text } from "../../../../components/Typography";
import { Title } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeTitle, Tags } from "./styles";
import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoneyToBRL } from "../../../../utils/formatMoney";
import { useState } from "react";

interface CoffeeProps {
  name: string;
  description: string;
  tags: string[];
  price: number;
  photo: string;
}

function CoffeeCard({
  name, 
  description,
  tags,
  price,
  photo
} : CoffeeProps){
  const [quantity, setQuantity] = useState(1);
  function handleIncreaseQuantity(){
    setQuantity(state => state + 1);
  }
  function handleDecreaseQuantity(){
    setQuantity(state => state > 1 ? state - 1 : state);
  }
  return (
    <CoffeeCardContainer>
      <img src={`coffees/${photo}`} alt={`café ${name}`}/>
      <Tags>
        {
          tags.map(
            (tag) => (
              <span key={tag}>{tag}</span>
            )
          )
        }
      </Tags>
      <div>
        <CoffeeTitle>{name}</CoffeeTitle>
        <CoffeeDescription>
          {description}
        </CoffeeDescription>
      </div>

      <CardFooter>
        <div>
          <Text size="s">
            R$
          </Text>
          <Title size="m" color="text" as="strong">
            {formatMoneyToBRL(price)}
          </Title>
        </div>
        <AddCartWrapper>
          <QuantityInput 
            quantity={quantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
          />
          <button>
            <ShoppingCart size={22} weight="fill"/>
          </button>
        </AddCartWrapper>
      </CardFooter>

    </CoffeeCardContainer>
  );
}

export { CoffeeCard };