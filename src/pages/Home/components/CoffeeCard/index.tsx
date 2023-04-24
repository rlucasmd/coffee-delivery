import { ShoppingCart } from "phosphor-react";
import { Text } from "../../../../components/Typography";
import { Title } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeTitle, Tags } from "./styles";
import { QuantityInput } from "../../../../components/QuantityInput";

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
            {price}
          </Title>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill"/>
          </button>
        </AddCartWrapper>
      </CardFooter>

    </CoffeeCardContainer>
  );
}

export { CoffeeCard };