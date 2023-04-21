import { Cart, HeaderButtonsContainer, HeaderContainer, Location } from "./styles";
import logoImg from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

function Header(){
  return(
    <HeaderContainer>
      <div className="container">
        <img src={logoImg} />
        <HeaderButtonsContainer>
          <Location>
            <MapPin size={20} weight="fill"/>
          Carnaúba dos Dantas, RN
          </Location>
          <Cart>
            <ShoppingCart size={20} weight="fill" />
          </Cart>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>

  );
}

export { Header };