import { createGlobalStyle } from "styled-components";
import { Colors } from "context/background-context";

const GlobalStyles = createGlobalStyle<Required<Colors>>`
  body {
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.fontColor};
    margin: 0;
    min-height: 100vh
  }
`;

export default GlobalStyles;
