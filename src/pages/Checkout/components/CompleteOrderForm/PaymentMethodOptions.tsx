import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodOptionsContainer } from "./styles";
import { PaymentMethodInput } from "../PaymentMethodInput";

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
  return(
    <PaymentMethodOptionsContainer>
      {
        Object.entries(paymentOptions).map(([key, value]) => (
          <PaymentMethodInput 
            id={key}
            key={key}
            content={value.content}
            icon={value.icon}
          />
        ))
      }
    </PaymentMethodOptionsContainer>
  );
}

export { PaymentMethodOptions };