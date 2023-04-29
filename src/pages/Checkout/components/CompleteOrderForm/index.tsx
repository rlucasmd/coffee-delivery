import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Title } from "../../../../components/Typography";
import { SectionHeader } from "../SectionHeader";
import { CompleteOrderFormContainer, FormSectionContainer, PaymentMethodOptionsContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

function CompleteOrderForm(){
  const theme = useTheme();
  return(
    <CompleteOrderFormContainer>
      <Title size="xs">
        Complete seu pedido
      </Title>
      <FormSectionContainer>
        <SectionHeader 
          icon={<MapPinLine size={22} color={theme.colors["yellow-dark"]}/>}
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber sua encomenda"
        />

        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionHeader
          icon={
            <CurrencyDollar 
              size={22} 
              color={theme.colors.purple}
            />
          }
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar" 
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}

export { CompleteOrderForm };