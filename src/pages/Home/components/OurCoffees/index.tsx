import { Title } from "../../../../components/Typography";
import { CoffeeGrid, OurCoffeesContainer } from "./styles";
import { coffees } from "../../../../data";
import { CoffeeCard } from "../CoffeeCard";

function OurCoffees(){
  return (
    <OurCoffeesContainer className="container">
      <Title size="l" color="title">
        Nossos cafés
      </Title>
      <CoffeeGrid>
        {
          coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
            />
          ))
        }
      </CoffeeGrid>
    </OurCoffeesContainer>
  );
}

export { OurCoffees };