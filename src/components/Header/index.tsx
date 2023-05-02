import { Cart, HeaderButtonsContainer, HeaderContainer, Location } from "./styles";
import logoImg from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

function Header(){
  const { cartQuantity } = useCart();
  const navigate = useNavigate();

  function handleNavigateToCheckout(){
    navigate("/checkout");
  }
  return(
    <HeaderContainer>
      <div className="container">
        <img src={logoImg} />
        <HeaderButtonsContainer>
          <Location>
            <MapPin size={20} weight="fill"/>
            Carnaúba dos Dantas, RN
          </Location>
          <Cart onClick={handleNavigateToCheckout}>
            {cartQuantity >= 1 && <span>{cartQuantity <= 99 ? cartQuantity : "99"}</span>}
            <ShoppingCart size={20} weight="fill" />
          </Cart>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>

  );
}

export { Header };