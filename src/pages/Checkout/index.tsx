import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

enum PaymentOptions {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const CheckoutOrderValidationSchema = z.object({
  zipCode: z.string().min(1, "Informe o CPF"),
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
  const confirmOrderForm = useForm<CheckoutOrderValidationType>({
    resolver: zodResolver(CheckoutOrderValidationSchema),
    defaultValues:  {
      paymentMethod: undefined
    }
  });

  const { handleSubmit, formState } = confirmOrderForm;

  function onSubmitOrderForm(data: CheckoutOrderValidationType){
    console.log(data);
    console.log(formState);
  }
  console.log(formState.errors);
  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer 
        className="container"
        onSubmit={handleSubmit(onSubmitOrderForm)}
      >
        <CompleteOrderForm 

        />
        <SelectedCoffees 
      
        />
      </CheckoutContainer>
    </FormProvider>
  );
}

export { Checkout };