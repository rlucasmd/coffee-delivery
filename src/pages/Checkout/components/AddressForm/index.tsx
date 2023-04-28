import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

function AddressForm(){
  return (
    <AddressFormContainer>
      <Input 
        placeholder="CEP"
        className="cep"
      />   
      <Input 
        placeholder="Rua"
        className="street"
      /> 
      <Input 
        placeholder="Número"
      />
      <Input 
        placeholder="Complemento" 
        rightText="Opcional"
        className="complement"
      />
      <Input 
        placeholder="Bairro"
      />
      <Input 
        placeholder="Cidade"
      />
      <Input 
        placeholder="UF"
      />
    
    </AddressFormContainer>
  );
}

export { AddressForm };