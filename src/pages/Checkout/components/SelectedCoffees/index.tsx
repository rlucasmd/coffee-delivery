import { Title } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCardCart";
import { ConfirmationSection } from "./ConfirmationSection";
import { 
  SelectedCoffeesContainer, 
  DetailsSectionContainer 
} from "./styles";

function SelectedCoffees(){
  const { cart } = useCart();
  return (
    <SelectedCoffeesContainer>
      <Title size="xs" color="subtitle">
        cafés selecionados
      </Title>
      <DetailsSectionContainer>
        {cart.map((coffee) => (
          <CoffeeCartCard 
            coffee={coffee}
            key={coffee.id}
          />
        ))}
        <ConfirmationSection />
      </DetailsSectionContainer>
    </SelectedCoffeesContainer>
  );
}

export { SelectedCoffees } ;