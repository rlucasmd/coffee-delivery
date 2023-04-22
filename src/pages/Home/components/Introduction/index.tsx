import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { TextWithIcon } from "../../../../components/TextWithIcon";
import { 
  BenefitsContainer, 
  IntroductionContainer, 
  IntroductionContent, 
  IntroductionTitle
} from "./styles";
import { useTheme } from "styled-components";
import coffeeCup from "../../../../assets/coffee-cup.png";
import { Text } from "../../../../components/Typography";

function Introduction(){
  const { colors } = useTheme();
  return (
    <IntroductionContainer>
      <IntroductionContent className="container">
        <div>
          <section>
            <IntroductionTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroductionTitle>
            <Text color="subtitle" size="l" as="h3" >
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </Text>
          </section>
          <BenefitsContainer>
            <TextWithIcon
              icon={<ShoppingCart weight="fill" />}
              content="Compra simples e segura"
              backgroundColor={colors["yellow-dark"]}
            />
            <TextWithIcon
              icon={<Package weight="fill" />}
              content="Embalagem mantém o café intacto"
              backgroundColor={colors["base-text"]}
            />
            <TextWithIcon
              icon={<Timer weight="fill" />}
              content="Entrega rápida e rastreada"
              backgroundColor={colors["yellow"]}
            />
            <TextWithIcon
              icon={<Coffee weight="fill" />}
              content="O café chega fresquinho até você"
              backgroundColor={colors["purple"]}
            />
          </BenefitsContainer>
        </div>
        <img src={coffeeCup} />
      </IntroductionContent>
    </IntroductionContainer>
  );
}

export { Introduction };