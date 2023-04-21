import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { TextWithIcon } from "../../../../components/TextWithIcon";
import { BenefitsContainer, IntroductionContainer, IntroductionContent, Subtitle, Title } from "./styles";
import { useTheme } from "styled-components";
import coffeeCup from "../../../../assets/coffee-cup.png";

function Introduction(){
  const theme = useTheme();
  return (
    <IntroductionContainer>
      <IntroductionContent className="container">
        <div>
          <section>
            <Title>
              Encontre o café perfeito para qualquer hora do dia
            </Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </Subtitle>
          </section>
          <BenefitsContainer>
            <TextWithIcon
              icon={<ShoppingCart weight="fill" />}
              content="Compra simples e segura"
              backgroundColor={theme["yellow-dark"]}
            />
            <TextWithIcon
              icon={<Package weight="fill" />}
              content="Embalagem mantém o café intacto"
              backgroundColor={theme["base-text"]}
            />
            <TextWithIcon
              icon={<Timer weight="fill" />}
              content="Entrega rápida e rastreada"
              backgroundColor={theme["yellow"]}
            />
            <TextWithIcon
              icon={<Coffee weight="fill" />}
              content="O café chega fresquinho até você"
              backgroundColor={theme["purple"]}
            />
          </BenefitsContainer>
        </div>
        <img src={coffeeCup} />
      </IntroductionContent>
    </IntroductionContainer>
  );
}

export { Introduction };