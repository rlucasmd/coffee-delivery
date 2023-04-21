import { Introduction } from "./components/Introduction";
import { HomeContainer } from "./styles";

function Home(){
  return (
    <HomeContainer>
      <Introduction />
    </HomeContainer>
  );
}

export { Home };