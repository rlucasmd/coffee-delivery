import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus{
    outline: 0;
  }
  body{
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.background};
  }
  input, span, textarea, button, p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export { GlobalStyles };