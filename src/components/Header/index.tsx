import { Cart, HeaderContainer, Location } from "./styles";
import logoImg from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

function Header(){
  return(
    <HeaderContainer>
      <img src={logoImg} />
      <div>
        <Location>
          <MapPin size={22} weight="fill"/>
          Carnaúba dos Dantas, RN
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>

  );
}

export { Header };