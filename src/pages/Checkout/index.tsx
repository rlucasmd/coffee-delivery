import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

enum PaymentOptions {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const CheckoutOrderValidationSchema = z.object({
  cep: z.string().min(1, "Informe o CPF"),
  street: z.string().min(3, "Informe uma rua"),
  number: z.string().min(1, "Informe um número"),
  complement: z.string(),
  district: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe uma cidade"),
  uf: z.string().min(2, "Informe uma Unidade Federativa"),
  paymentMethod: z.nativeEnum(PaymentOptions, {
    errorMap: () => {
      return { message: "Informe o método de pagamento"};
    }
  }),
});

type CheckoutOrderValidationType = z.infer<typeof CheckoutOrderValidationSchema>;

function Checkout(){
  const { handleSubmit } = useForm();
  return (
    <CheckoutContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CheckoutContainer>
  );
}

export { Checkout };