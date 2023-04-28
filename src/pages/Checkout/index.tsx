import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";

function Checkout(){
  return (
    <CheckoutContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CheckoutContainer>
  );
}

export { Checkout };