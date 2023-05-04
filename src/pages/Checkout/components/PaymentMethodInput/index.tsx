import { HtmlHTMLAttributes, InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { PaymentMethodContainer, PaymentMethodContent  } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  content: string;
  icon: ReactNode;
}

const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(
  ({content, icon, id, ...rest}, ref) => {
    return(
      <PaymentMethodContainer>
        <input id={id} ref={ref} type="radio" {...rest} name="paymentMethod"/>
        <label htmlFor={id}>
          <PaymentMethodContent>
            {icon}
            {content}
          </PaymentMethodContent>
        </label>  
      </PaymentMethodContainer>
    );
  }
);

PaymentMethodInput.displayName = "Payment Method Input";

export { PaymentMethodInput };