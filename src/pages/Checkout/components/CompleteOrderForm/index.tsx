import { MapPinLine } from "phosphor-react";
import { Title } from "../../../../components/Typography";
import { SectionHeader } from "../SectionHeader";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "../AddressForm";

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
    </CompleteOrderFormContainer>
  );
}

export { CompleteOrderForm };