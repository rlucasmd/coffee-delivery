import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";

function ConfirmationSection(){
  return (
    <ConfirmationSectionContainer>
      <div>
        <Text size="s">Total de itens</Text>
        <Text size="s">R$ 29,00</Text>
      </div>
      <div>
        <Text size="s">Entrega</Text>
        <Text size="s">R$ 10,00</Text>
      </div>
      <div>
        <Text weight={700} size="l" color="title">Total de itens</Text>
        <Text weight={700} size="l" color="title">R$ 39,00</Text>
      </div>
      <Button title="confirmar pedido"/>
    </ConfirmationSectionContainer>
  );
}

export { ConfirmationSection };