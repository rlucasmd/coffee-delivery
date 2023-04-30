import { CurrencyDollar, MapPin, Money, Timer } from "phosphor-react";
import { TextWithIcon } from "../../components/TextWithIcon";
import { Text, Title } from "../../components/Typography";
import { OrderDetailsContainer, SuccessfulOrderContainer } from "./styles";
import { useTheme } from "styled-components";
import motoboyIllustration from "../../assets/illustration.svg";

function SuccessfulOrder(){
  const { colors } = useTheme();
  return (
    <SuccessfulOrderContainer className="container">
      <div>
        <Title size="l" as="h1">
          Uhu! Pedido confirmado
        </Title>
        <Text size="l">
          Agora é só aguardar que logo o café chegará até você
        </Text>
      </div>
      <section>
        <OrderDetailsContainer>
          <TextWithIcon 
            icon={<MapPin size={16} weight="fill"/>}
            content={
              <Text>
                Entrega em{" "}
                <strong>
                  Rua José Victor, 102
                </strong>
                <br/>
                Centro - Carnaúba dos Dantas,RN
              </Text>
            }
            backgroundColor={colors.purple}
          />
          <TextWithIcon 
            icon={<Timer size={16} weight="fill"/>}
            content={
              <Text>
                Previsão de entrega<br/>
                <strong>20 min - 30 min</strong>
              </Text>
            }
            backgroundColor={colors.yellow}
          />
          <TextWithIcon 
            icon={<CurrencyDollar size={16} weight="fill"/>}
            content={
              <Text>
                Pagamento na entrega<br/>
                <strong>Cartão de crédito</strong>
              </Text>
            }
            backgroundColor={colors["yellow-dark"]}
          />
        </OrderDetailsContainer>
        <img src={motoboyIllustration} />
      </section>
    </SuccessfulOrderContainer>
  );
}

export { SuccessfulOrder };