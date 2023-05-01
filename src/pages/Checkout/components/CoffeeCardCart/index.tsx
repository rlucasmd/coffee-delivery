import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Text } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { formatMoneyToBRL } from "../../../../utils/formatMoney";

interface CoffeeCartCardProps {
  name: string;
  photo: string;
  price: number;
}

function CoffeeCartCard({name, photo, price} : CoffeeCartCardProps){
  return(
    <CoffeeCartCardContainer>
      <div>
        <img src={`coffees/${photo}`} />
        <div>
          <Text size="m" color="subtitle">
            {name}
          </Text>
          <ActionsContainer>
            <QuantityInput quantity={1}/>
            <RemoveButton>
              <Trash size={16}/>
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>{`R$ ${formatMoneyToBRL(price)}`}</p>
    </CoffeeCartCardContainer>
  );
}

export { CoffeeCartCard };