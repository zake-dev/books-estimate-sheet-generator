import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
