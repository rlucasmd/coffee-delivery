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
              name={coffee.name}
              description={coffee.description}
              photo={coffee.photo}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))
        }
      </CoffeeGrid>
    </OurCoffeesContainer>
  );
}

export { OurCoffees };