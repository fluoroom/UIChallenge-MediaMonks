import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    color: #DFBBFE;
    background-color:#2C2D38
    margin: 0;
    padding: 0;
    min-height: 100vh;
    transition: all .25s ease;
  &.c1, &.c2 {
    color: #DFBBFE;
    background-color:#2C2D38;
  }
    
  &.c3 {
    color: #7D26C9;
    background-color:#FFCB16;
  }

  &.c4 {
    color: #E1FF9A;
    background-color:#4F24EE;
  }
  
  &.c5 {
    color: #FF245B;
    background-color:#3C0C60;
  }

  &.c6 {
    color: #4F24EE;
    background-color:#00DC7C;
  }

  &.c7 {
    color: #00DC7C;
    background-color:#002838;
  }
  }
  
`;

export default GlobalStyles;
