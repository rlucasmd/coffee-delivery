import { HtmlHTMLAttributes, ReactNode } from "react";
import { PaymentMethodContainer, PaymentMethodContent  } from "./styles";

interface PaymentMethodInputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  content: string;
  icon: ReactNode;
}

function PaymentMethodInput({content, icon, ...rest} : PaymentMethodInputProps){
  return (
    <PaymentMethodContainer>
      <input type="radio" {...rest} name="paymentMethod"/>
      <label htmlFor={rest.id}>
        <PaymentMethodContent>
          {icon}
          {content}
        </PaymentMethodContent>
      </label>  
    </PaymentMethodContainer>

  );
}

export { PaymentMethodInput };