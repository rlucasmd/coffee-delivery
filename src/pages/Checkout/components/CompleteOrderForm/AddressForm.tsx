import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

function AddressForm(){
  const { register } = useFormContext();
  return (
    <AddressFormContainer>
      <Input 
        placeholder="CEP"
        className="zipCode"
        {...register("zipCode")}
      />   
      <Input 
        placeholder="Rua"
        className="street"
        {...register("street")}
      /> 
      <Input 
        placeholder="Número"
        {...register("number")}
      />
      <Input 
        placeholder="Complemento" 
        rightText="Opcional"
        className="complement"
        {...register("complement")}
      />
      <Input 
        placeholder="Bairro"
        {...register("district")}
      />
      <Input 
        placeholder="Cidade"
        {...register("city")}
      />
      <Input 
        placeholder="UF"
        {...register("uf")}
      />
    
    </AddressFormContainer>
  );
}

export { AddressForm };