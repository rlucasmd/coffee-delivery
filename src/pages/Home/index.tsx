import { Introduction } from "./components/Introduction";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles";
function Home(){
  return (
    <HomeContainer>
      <Introduction />
      <OurCoffees />
    </HomeContainer>
  );
}

export { Home };