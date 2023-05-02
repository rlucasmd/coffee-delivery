import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { CoffeeCartContextProvider } from "./contexts/CoffeeCartContext";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeCartContextProvider>
          <Router />
        </CoffeeCartContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
