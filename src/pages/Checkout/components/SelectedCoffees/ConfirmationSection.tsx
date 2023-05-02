import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoneyToBRL } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

function ConfirmationSection(){
  const { cart } = useCart();
  const totalProductsPrice = cart.reduce((accumulator, coffee) => {
    accumulator += coffee.price * coffee.quantity;
    return accumulator;
  }, 0);
  const deliveryTax = 10;
  const totalPrice = totalProductsPrice + deliveryTax;
  return (
    <ConfirmationSectionContainer>
      <div>
        <Text size="s">Total de itens</Text>
        <Text size="s">{`R$ ${formatMoneyToBRL(totalProductsPrice)}`}</Text>
      </div>
      <div>
        <Text size="s">Entrega</Text>
        <Text size="s">{`R$ ${formatMoneyToBRL(deliveryTax)}`}</Text>
      </div>
      <div>
        <Text weight={700} size="l" color="title">Total de itens</Text>
        <Text weight={700} size="l" color="title">{`R$ ${formatMoneyToBRL(totalPrice)}`}</Text>
      </div>
      <Button title="confirmar pedido"/>
    </ConfirmationSectionContainer>
  );
}

export { ConfirmationSection };