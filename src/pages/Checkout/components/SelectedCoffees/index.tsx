import { Title } from "../../../../components/Typography";
import { CoffeeCartCard } from "../CoffeeCardCart";
import { ConfirmationSection } from "./ConfirmationSection";
import { 
  SelectedCoffeesContainer, 
  DetailsSectionContainer 
} from "./styles";

const cartItens = [
  {
    id: 13,
    tags: ["especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    photo: "arabe.png",
    price: 9.9,
  },
  {
    id: 14,
    tags: ["especial", "alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    photo: "irlandes.png",
    price: 9.9,
  }
];

function SelectedCoffees(){
  return (
    <SelectedCoffeesContainer>
      <Title size="xs" color="subtitle">
        cafés selecionados
      </Title>
      <DetailsSectionContainer>
        {cartItens.map((coffee) => (
          <CoffeeCartCard 
            name={coffee.name}
            price={coffee.price}
            photo={coffee.photo}
            key={coffee.id}
          />
        ))}
        <ConfirmationSection />
      </DetailsSectionContainer>
    </SelectedCoffeesContainer>
  );
}

export { SelectedCoffees } ;