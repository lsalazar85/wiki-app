import { createGlobalStyle } from 'styled-components'
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, h4, h5, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  body {
    height: 100vh;
    max-height: 100%;
    margin: 0 auto;
    padding: 0;
    width: 100%; 
    background: ${colors.White};
  }
`
