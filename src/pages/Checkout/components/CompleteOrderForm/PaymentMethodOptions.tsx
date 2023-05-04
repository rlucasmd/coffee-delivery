import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodOptionsContainer } from "./styles";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { useFormContext } from "react-hook-form";

const paymentOptions = {
  credit:{
    content: "Cartão de Crédito",
    icon: <CreditCard size={16}/> 
  },
  debit: {
    content: "Cartão de Débito",
    icon: <Bank size={16}/>
  },
  money: {
    content: "Dinheiro",
    icon: <Money size={16} />
  }
  
};

function PaymentMethodOptions(){
  const { register } = useFormContext();
  return(
    <PaymentMethodOptionsContainer>
      {
        Object.entries(paymentOptions).map(([key, {content, icon}]) => (
          <PaymentMethodInput 
            id={key}
            key={content}
            content={content}
            icon={icon}
            value={key}
            {...register("paymentMethod")}
          />
        ))
      }
    </PaymentMethodOptionsContainer>
  );
}

export { PaymentMethodOptions };