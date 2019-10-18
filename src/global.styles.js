import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Poppins";
  }
  
  a {
    text-decoration: none;
    color: #000;
  }
`;